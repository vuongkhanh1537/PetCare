package com.project.petcare.dto;

import java.time.LocalDate;

import com.project.petcare.entity.Order;

public class OrderDto {
    private Integer id;
    private LocalDate orderDate;
    private LocalDate payDate;
    private Integer status;
    private Integer totalPrice;
    private String empFName;
    private String empLName;

    public OrderDto(Order order) {
        this.id = order.getId();
        this.orderDate = order.getOrderDate();
        this.payDate = order.getPayDate();
        this.status = order.getStatus();
        this.totalPrice = order.getTotalPrice();
        this.empFName = order.getEmployee().getFirstName();
        this.empLName = order.getEmployee().getLastName();
    }

    public Integer getId() {
        return id;
    }
    public void setId(Integer id) {
        this.id = id;
    }
    public LocalDate getOrderDate() {
        return orderDate;
    }
    public void setOrderDate(LocalDate orderDate) {
        this.orderDate = orderDate;
    }
    public LocalDate getPayDate() {
        return payDate;
    }
    public void setPayDate(LocalDate payDate) {
        this.payDate = payDate;
    }
    public Integer getStatus() {
        return status;
    }
    public void setStatus(Integer status) {
        this.status = status;
    }
    public Integer getTotalPrice() {
        return totalPrice;
    }
    public void setTotalPrice(Integer totalPrice) {
        this.totalPrice = totalPrice;
    }


    public String getEmpFName() {
        return empFName;
    }


    public void setEmpFName(String empFName) {
        this.empFName = empFName;
    }


    public String getEmpLName() {
        return empLName;
    }


    public void setEmpLName(String empLName) {
        this.empLName = empLName;
    }

    
}
