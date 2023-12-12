package com.project.petcare.service;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;

import com.project.petcare.entity.Employee;
import com.project.petcare.entity.Order;
import com.project.petcare.entity.ProdInOrder;
import com.project.petcare.entity.Product;
import com.project.petcare.repository.EmployeeRepository;
import com.project.petcare.repository.OrderRepository;
import com.project.petcare.repository.ProdInOrderRepository;
import com.project.petcare.repository.ProductRepository;
import com.project.receive.ProductAmount;

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

    public List<Order> findAllOrder(){
        return orderRepository.findAll();
    }

    public Order addOrder(List<ProductAmount>product, Integer empId ){
        Order newOrder = new Order();
        newOrder.setEmployee(employeeRepository.findEmployee(empId));
        newOrder.setStatus(false);
        Integer totalPrice = 0;
        for (ProductAmount prod : product){
            ProdInOrder newOrderProd = new ProdInOrder();
            newOrderProd.setOrder(newOrder);
            newOrderProd.setProduct(productRepository.findProductById(prod.getProductId()));
            newOrderProd.setAmount(prod.getAmount());
            newOrderProd.setUnitPrice(productRepository.findProductById(prod.getProductId()).getCost());
            newOrderProd.setTotalPrice(newOrderProd.getAmount()*newOrderProd.getUnitPrice());
            totalPrice += newOrderProd.getTotalPrice();
            prodInOrderRepository.save(newOrderProd);
        }
        newOrder.setTotalPrice(totalPrice);
        newOrder.setOrderDate(LocalDate.now());
        return orderRepository.save(newOrder);
    }
    public void updateOrderStatus(Boolean status, Integer id){
        orderRepository.updateStatus(status, id, LocalDate.now());
    }

}
