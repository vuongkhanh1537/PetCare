package com.project.petcare.service;

import java.net.http.HttpResponse;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
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
            if (status == 3){
                productRepository.updateQuantity(productRepository.findProductById(prod.getProductId()).getQuantity()- prod.getAmount(), prod.getProductId());
                orderRepository.updateStatusPaid(status, orderId, LocalDate.now());
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
        Integer totalPrice = 0;
        ArrayList<ProdInOrder> prodList = new ArrayList<>(prodInOrderRepository.findInfoOfOrder(orderId));
        ArrayList<Boolean> checkList = new ArrayList<>(Collections.nCopies(prodList.size(), false));

        //check number in store
        for (ProductAmount prod : product){
            boolean find = false;       
            for (ProdInOrder prodOrder : prodList){
                if (prod.getProductId().equals(prodOrder.getProduct().getProductId())){
                    if (status == 3){
                        if (productRepository.findProductById(prod.getProductId()).getQuantity()- prod.getAmount() < 0) return "Cannot pay: Out of number!";
                    }
                    find = true;
                    break;
                }
            }
            if (find == true) continue;
            if (status == 3){
                if (productRepository.findProductById(prod.getProductId()).getQuantity() - prod.getAmount() < 0) return "Cannot pay: Out of number!";
            }
        }

        //Update
        for (ProductAmount prod : product){
            boolean find = false;       
            for (ProdInOrder prodOrder : prodList){
                if (prod.getProductId().equals(prodOrder.getProduct().getProductId())){
                    checkList.set(prodList.indexOf(prodOrder),true);
                    if (status == 3){
                        
                        productRepository.updateQuantity(productRepository.findProductById(prod.getProductId()).getQuantity()- prod.getAmount(), prod.getProductId());
                        orderRepository.updateStatusPaid(status, orderId, LocalDate.now());
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
            if (status == 3){
                productRepository.updateQuantity(productRepository.findProductById(prod.getProductId()).getQuantity()- prod.getAmount(), prod.getProductId());
                orderRepository.updateStatusPaid(status, orderId, LocalDate.now());
            }
            else orderRepository.updateStatus(status, orderId);
        }
        for (int i = 0 ; i < checkList.size() ; i ++ ){
            if (checkList.get(i) == false) {
                // totalPrice -= prodList.get(i).getTotalPrice();
                prodInOrderRepository.delete(prodList.get(i));
            }
        }
        orderRepository.updateTotalPrice(totalPrice, orderId);
        return "Update success!";
    }
    // public void changeOrder()
}
