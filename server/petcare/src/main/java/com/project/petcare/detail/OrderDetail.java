package com.project.petcare.detail;

import com.project.petcare.entity.Order;

public class OrderDetail {
    private Order order;
    private String empName;
    public Order getOrder() {
        return order;
    }
    public void setOrder(Order order) {
        this.order = order;
    }
    public String getEmpName() {
        return empName;
    }
    public void setEmpName(String empName) {
        this.empName = empName;
    }
    public OrderDetail(Order order) {
        this.order = order;
        this.empName = order.getEmployee().getFirstName() +  " "  + order.getEmployee().getLastName();
    }
    
}
