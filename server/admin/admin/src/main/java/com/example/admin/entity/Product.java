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
    private String productType;

    // Constructors
    public Product() {

    }

    public Product(String supplier, int quantity, String productName, String description, String productType) {
        this.supplier = supplier;
        this.quantity = quantity;
        this.productName = productName;
        this.description = description;
        this.productType = productType;
    }

    // Getter and Setter methods

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

    public String getProductType() {
        return productType;
    }

    public void setProductType(String productType) {
        this.productType = productType;
    }

    @Override
    public String toString() {
        return "Product{" +
                "productId=" + productId +
                ", supplier='" + supplier + '\'' +
                ", quantity=" + quantity +
                ", productName='" + productName + '\'' +
                ", description='" + description + '\'' +
                ", productType='" + productType + '\'' +
                '}';
    }
}
