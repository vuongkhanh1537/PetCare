package com.example.PetCareBE.admin.product.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "san_pham")
public class Product {

    @Id
    @Column(name = "SanPhamID")
    private String ID;

    @Column(name = "NhaCungCap")
    private String Provider;

    @Column(name = "SoLuong")
    private Integer Quantity;

    
}
