package com.project.petcare.controller;

import java.net.http.HttpResponse;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.petcare.detail.OrderDetail;
import com.project.petcare.dto.OrderDto;
import com.project.petcare.entity.Order;
import com.project.petcare.entity.ProdInOrder;
import com.project.petcare.receive.ProductAmount;
import com.project.petcare.service.ProductProcService;

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
    public List<OrderDto> orderList() {
        return procService.findAllOrder();
    }

    @PostMapping("/{employee_id}")
    public Order addOrder(@RequestBody List<ProductAmount> product, @PathVariable Integer employee_id , @RequestParam Integer status){
        return procService.addOrder(product, employee_id, status);
    }

    @PutMapping("")
    public ResponseEntity<String> updateOrder(@RequestBody List<ProductAmount> product , @RequestParam Integer status , @RequestParam Integer orderId){
        String message = procService.changeOrder(product,status, orderId);
        if (message == "Cannot pay: Out of number!") return ResponseEntity.badRequest().body("Cannot pay: Out of number!");
        return ResponseEntity.ok().body("Update success!");
    }
    
    @GetMapping("/info")
    public ResponseEntity<OrderDetail> orderDetail(@RequestParam Integer id){
        return ResponseEntity.ok(procService.findOrder(id));
    }
}
