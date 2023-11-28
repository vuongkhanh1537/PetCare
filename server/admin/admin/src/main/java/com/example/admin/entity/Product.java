// src/main/java/com/example/admin/entity/Product.java

package com.example.admin.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;


@Entity
@Table(name = "san_pham")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "SanPhamID", updatable = false, nullable = false)
    private Long productId;

    @Column(name = "NhaCungCap")
    private String supplier;

    @Column(name = "SoLuong")
    private int quantity;   

    @Column(name = "TenSanPham")
    private String productName;

    @Column(name = "MoTa")
    private String description;

    @Column(name = "PhanLoaiSanPham")
    private String petType;

    @Column(name = "Loai")
    private String category;

    @Column(name = "Phamloai")
    private String subCategory;

    @Column(name = "GiaThanh")
    private int cost;

    // Constructors
    public Product() {
        
    }

    public Product(Long productId, String supplier, int quantity, String productName,
                   String description, String petType, String category, String subCategory, int cost) {
        this.productId = productId;
        this.supplier = supplier;
        this.quantity = quantity;
        this.productName = productName;
        this.description = description;
        this.petType = petType;
        this.category = category;
        this.subCategory = subCategory;
        this.cost = cost;
    }

    // Getters and Setters
    public Long getProductId() {
        return productId;
    }

    public void setProductId(Long productId) {
        this.productId = productId;
    }

    public String getSupplier() {
        return supplier;
    }

    public void setSupplier(String supplier) {
        this.supplier = supplier;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getPetType() {
        return petType;
    }

    public void setPetType(String petType) {
        this.petType = petType;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getSubCategory() {
        return subCategory;
    }

    public void setSubCategory(String subCategory) {
        this.subCategory = subCategory;
    }

    public int getCost() {
        return cost;
    }

    public void setCost(int cost) {
        this.cost = cost;
    }

    // Other methods...

    @Override
    public String toString() {
        return "Product{" +
                "productId=" + productId +
                ", supplier='" + supplier + '\'' +
                ", quantity=" + quantity +
                ", productName='" + productName + '\'' +
                ", description='" + description + '\'' +
                ", petType='" + petType + '\'' +
                ", category='" + category + '\'' +
                ", subCategory='" + subCategory + '\'' +
                ", cost=" + cost +
                '}';
    }
}
