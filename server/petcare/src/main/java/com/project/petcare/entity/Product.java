// src/main/java/com/example/admin/entity/Product.java

package com.project.petcare.entity;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.validation.constraints.*;


@Entity
@Table(name = "product")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID", updatable = false, nullable = false)
    private Integer productId;

    @Column(name = "provider", nullable = false)
    @NotBlank(message = "provider cannot be blank")
    private String provider;

    @Column(name = "numberOf", nullable = false)
    @Min(value = 0, message = "Quantity must be greater than or equal to 0")
    private Integer quantity;   

    @Column(name = "productName", nullable = false)
    @NotBlank(message = "Product name cannot be blank")
    private String productName;

    @Column(name = "descriptions", length = 1000)
    @NotBlank(message = "Description cannot be blank")
    @Size(max = 60, message = "Description cannot exceed 60 characters")    
    private String description;

    @Column(name = "type1", nullable = false)
    @NotBlank(message = "Pet type cannot be blank")
    private String type1; // pet type

    @Column(name = "type2", nullable = false)
    @NotBlank(message = "Category cannot be blank")
    private String type2; // category

    @Column(name = "cost", nullable = false)
    @Min(value = 0, message = "Cost must be greater than or equal to 0")
    private int cost;

    private Boolean isAvailable;

    @OneToMany(mappedBy = "product")
    @JsonIgnore
    private List<ProdInOrder> prodInOrder;

    // Constructors
    public Product() {
        this.quantity = 0;
    }

    public Product(Integer productId, String provider, int quantity, String productName,
                   String description, String petType, String category, int cost) {
        this.productId = productId;
        this.provider = provider;
        this.quantity = 0;
        this.productName = productName;
        this.description = description;
        this.type1 = petType;
        this.type2 = category;
        this.cost = cost;
    }

    // Getters and Setters
    public Integer getProductId() {
        return productId;
    }

    public void setProductId(Integer productId) {
        this.productId = productId;
    }

    public String getProvider() {
        return provider;
    }

    public void setProvider(String provider) {
        this.provider = provider;
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
                ", provider='" + provider + '\'' +
                ", quantity=" + quantity +
                ", productName='" + productName + '\'' +
                ", description='" + description + '\'' +
                ", petType='" + type1 + '\'' +
                ", category='" + type2 + '\'' +
                ", cost=" + cost +
                '}';
    }

    public Boolean getIsAvailable() {
        return isAvailable;
    }

    public void setiSAvailable(Boolean iSAvailable) {
        this.isAvailable = iSAvailable;
    }

    public List<ProdInOrder> getProdInOrder() {
        return prodInOrder;
    }

    public void setProdInOrder(List<ProdInOrder> prodInOrder) {
        this.prodInOrder = prodInOrder;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public String getType1() {
        return type1;
    }

    public void setType1(String type1) {
        this.type1 = type1;
    }

    public String getType2() {
        return type2;
    }

    public void setType2(String type2) {
        this.type2 = type2;
    }

    public void setIsAvailable(Boolean isAvailable) {
        this.isAvailable = isAvailable;
    }
}
