package com.project.petcare.service;

import java.net.http.HttpResponse;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;

import com.project.petcare.detail.OrderDetail;
import com.project.petcare.dto.OrderDto;
import com.project.petcare.entity.Employee;
import com.project.petcare.entity.Order;
import com.project.petcare.entity.ProdInOrder;
import com.project.petcare.entity.Product;
import com.project.petcare.receive.ProductAmount;
import com.project.petcare.repository.EmployeeRepository;
import com.project.petcare.repository.OrderRepository;
import com.project.petcare.repository.ProdInOrderRepository;
import com.project.petcare.repository.ProductRepository;

@Service
public class ProductProcService {
    private final String adminMail = "congamaidau134@gmail.com";

    @Autowired
    private JavaMailSender mailSender;

    @Autowired
    ProdInOrderRepository prodInOrderRepository;

    @Autowired
    OrderRepository orderRepository;

    @Autowired
    ProductRepository productRepository;

    @Autowired
    EmployeeRepository employeeRepository;

    public List<OrderDto> findAllOrder(){
        ArrayList<OrderDto> returnList = new ArrayList<>();
        ArrayList<Order> orderList = new ArrayList<>(orderRepository.findAll());
        for (int i = 0 ; i < orderList.size() ; i ++){
            returnList.add(new OrderDto(orderList.get(i)));
        } 
        return  returnList;
    }

    public OrderDetail findOrder (Integer orderId){
        return new OrderDetail(orderRepository.findOrderById(orderId));
    }

    public Order addOrder(List<ProductAmount>product, Integer empId, Integer status){
        Order newOrder = new Order();
        newOrder.setEmployee(employeeRepository.findEmployee(empId));
        newOrder.setStatus(status);
        Integer totalPrice = 0;
        newOrder.setOrderDate(LocalDate.now());
        Integer orderId = orderRepository.save(newOrder).getId();
        for (ProductAmount prod : product){
            if (status == 3 ){
                productRepository.updateQuantity(productRepository.findProductById(prod.getProductId()).getQuantity()- prod.getAmount(), prod.getProductId());
                orderRepository.updateStatusPaid(status, orderId, LocalDate.now());
            }
            else if (status == 2) {
                productRepository.updateQuantity(productRepository.findProductById(prod.getProductId()).getQuantity()- prod.getAmount(), prod.getProductId());
                orderRepository.updateStatus(status, orderId);
            }
            else orderRepository.updateStatus(status, orderId);           
            ProdInOrder newOrderProd = new ProdInOrder();
            newOrderProd.setOrder(newOrder);
            newOrderProd.setProduct(productRepository.findProductById(prod.getProductId()));
            newOrderProd.setAmount(prod.getAmount());
            newOrderProd.setUnitPrice(productRepository.findProductById(prod.getProductId()).getCost());
            newOrderProd.setTotalPrice(newOrderProd.getAmount()*newOrderProd.getUnitPrice());
            totalPrice += newOrderProd.getTotalPrice();
            prodInOrderRepository.save(newOrderProd);
            // newOrder.getProdInOrder().add(newOrderProd);
        }
        orderRepository.updateTotalPrice(totalPrice, orderId);
        
        return orderRepository.findOrderById(orderId);
    }

    public String changeOrder(List<ProductAmount>product, Integer status, Integer orderId){

        Order findOrder = orderRepository.findOrderById(orderId);
        Employee fromEmp = employeeRepository.findEmployee(findOrder.getEmployee().getId());
        Integer totalPrice = 0;
        ArrayList<ProdInOrder> prodList = new ArrayList<>(prodInOrderRepository.findInfoOfOrder(orderId));
        ArrayList<Boolean> checkList = new ArrayList<>(Collections.nCopies(prodList.size(), false));

        //check number in store
        for (ProductAmount prod : product){
            boolean find = false;       
            for (ProdInOrder prodOrder : prodList){
                if (prod.getProductId().equals(prodOrder.getProduct().getProductId())){
                    if (status == 3 && findOrder.getStatus() == 1 || status == 2){
                        if (productRepository.findProductById(prod.getProductId()).getQuantity()- prod.getAmount() < 0) return "Cannot pay: Out of number!";
                    }
                    find = true;
                    break;
                }
            }
            if (find == true) continue;
            if (status == 3 && findOrder.getStatus() == 1 || status == 2){
                if (productRepository.findProductById(prod.getProductId()).getQuantity() - prod.getAmount() < 0) return "Cannot pay: Out of number!";
            }
        }

        //Update order info
        for (ProductAmount prod : product){
            boolean find = false;       
            for (ProdInOrder prodOrder : prodList){
                if (prod.getProductId().equals(prodOrder.getProduct().getProductId())){
                    checkList.set(prodList.indexOf(prodOrder),true);
                    //update number of product in store
                    if (status == 3 && findOrder.getStatus() == 1 ) {
                        productRepository.updateQuantity(productRepository.findProductById(prod.getProductId()).getQuantity()- prod.getAmount(), prod.getProductId());
                        orderRepository.updateStatusPaid(status, orderId, LocalDate.now());
                    }
                    else if (status == 2) {
                        productRepository.updateQuantity(productRepository.findProductById(prod.getProductId()).getQuantity()- prod.getAmount(), prod.getProductId());
                        orderRepository.updateStatus(status, orderId);
                    }
                    else orderRepository.updateStatus(status, orderId);

                    prodOrder.setAmount(prod.getAmount());
                    prodOrder.setTotalPrice(prodOrder.getUnitPrice()*prod.getAmount());
                    totalPrice+=prodOrder.getTotalPrice();
                    //luu
                    prodInOrderRepository.updateInfo(prodOrder.getAmount(),prodOrder.getTotalPrice(),prodOrder.getId());
                    find = true;
                    break;
                }
            }
            if (find == true) continue;
            ProdInOrder newProd = new ProdInOrder();
            newProd.setAmount(prod.getAmount());
            newProd.setProduct(productRepository.findProductById(prod.getProductId()));
            newProd.setOrder(findOrder);
            newProd.setUnitPrice(productRepository.findProductById(prod.getProductId()).getCost());
            newProd.setTotalPrice(newProd.getAmount()*newProd.getUnitPrice());
            totalPrice += newProd.getTotalPrice();
            prodInOrderRepository.save(newProd);
            if (status == 3 && findOrder.getStatus() == 1 ) {
                productRepository.updateQuantity(productRepository.findProductById(prod.getProductId()).getQuantity()- prod.getAmount(), prod.getProductId());
                orderRepository.updateStatusPaid(status, orderId, LocalDate.now());
            }
            else if (status == 2) {
                productRepository.updateQuantity(productRepository.findProductById(prod.getProductId()).getQuantity()- prod.getAmount(), prod.getProductId());
                orderRepository.updateStatus(status, orderId);
            }
            else orderRepository.updateStatus(status, orderId);
        }
        //remove redundant products
        for (int i = 0 ; i < checkList.size() ; i ++ ){
            if (checkList.get(i) == false) {
                // totalPrice -= prodList.get(i).getTotalPrice();
                prodInOrderRepository.delete(prodList.get(i));
            }
        }

        //update total price of order
        orderRepository.updateTotalPrice(totalPrice, orderId);

        //send mail to Employee
        SimpleMailMessage mailMessage = new SimpleMailMessage();
        mailMessage.setFrom(adminMail);
        if (status == 3){
            mailMessage.setTo(fromEmp.getEmail());
            mailMessage.setSubject("ĐƠN HÀNG ĐÃ ĐƯỢC THANH TOÁN");
            mailMessage.setText("Đơn hàng "+findOrder.getId()+" của " + fromEmp.getLastName() + " quản lý đã được thanh toán vào lúc "+ LocalDateTime.now()+ ".\n" +
                                "Xin chúc mừng đơn thứ "+ orderRepository.countOrder(fromEmp.getId())+ " của " + fromEmp.getLastName() +"!" );
            mailSender.send(mailMessage);
        }
        if (status == 4){
            mailMessage.setTo(fromEmp.getEmail());
            mailMessage.setSubject("ĐƠN HÀNG ĐÃ BỊ HỦY");
            mailMessage.setText("Đơn hàng "+findOrder.getId()+" của " + fromEmp.getLastName() + " quản lý đã bị hủy vào lúc "+ LocalDateTime.now()+ ".\n");
            mailSender.send(mailMessage);
        }
        return "Update success!";
    }
}
