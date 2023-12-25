package com.project.petcare.entity;

import java.time.LocalDate;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "orders")
@Getter
@Setter
@NoArgsConstructor
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private Integer status;

    private Integer totalPrice;

    @Temporal(TemporalType.DATE)
    private LocalDate orderDate;

    @Temporal(TemporalType.DATE)
    private LocalDate payDate;
    
    @OneToMany(mappedBy = "order")
    // @JsonIgnore
    private List<ProdInOrder> prodInOrder;

    @ManyToOne
    @JoinColumn(name = "employee_id", referencedColumnName = "id")
    @JsonIgnore
    private Employee employee;


    @Override
    public String toString(){
        String result ="Thông tin đơn hàng: \n";
        Integer count = 1;
        for (ProdInOrder prod : prodInOrder){
            result = result + count.toString()+ ". Tên sản phẩm: " + prod.getProduct().getProductName() + ". \n";
            result = result + "  Số lượng: " + prod.getAmount() + ". \n";
            result = result + "  Đơn giá: " + prod.getUnitPrice() + ". \n";
            result = result + "  Tổng: " + prod.getTotalPrice() + ". \n";
            count ++;
        }
        result = result + "Tổng giá tiền đơn hàng: " + this.totalPrice + '.';
        return result;
    };
}
