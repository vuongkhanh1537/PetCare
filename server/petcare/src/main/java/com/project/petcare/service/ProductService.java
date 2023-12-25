// ProductService.java
package com.project.petcare.service;

import com.project.petcare.entity.Product;

import java.util.Optional;

import org.springframework.stereotype.Service;

import java.util.List;
@Service
public interface ProductService {
    List<Product> getAllProducts();
    Optional<Product> getProductById(Integer productId);
    Product addOrUpdateProduct(Product product);
    void deleteProductById(Integer productId);
    List<Product> getProductsByName(String productName);
    List<String> getAllProviders();
    List<String> getAllPetType();
    List<String> getAllCategory();
    // Other methods...
}
