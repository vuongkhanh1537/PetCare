package com.project.petcare.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.petcare.entity.Order;
import com.project.petcare.entity.ProdInOrder;
import com.project.petcare.service.ProductProcService;
import com.project.receive.ProductAmount;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@CrossOrigin
@RequestMapping("/order")
public class ProductProccess {
    @Autowired
    ProductProcService procService;

    @GetMapping("")
    public List<Order> orderList() {
        return procService.findAllOrder();
    }

    @PostMapping("/{employee_id}")
    public Order addOrder(@RequestBody List<ProductAmount> product, @PathVariable Integer employee_id , @RequestParam Integer status){
        return procService.addOrder(product, employee_id, status);
    }

    @PutMapping("")
    public void updateOrder(@RequestBody List<ProductAmount> product , @RequestParam Integer status , @RequestParam Integer orderId){
        procService.changeOrder(product,status, orderId);
    }
    
}
