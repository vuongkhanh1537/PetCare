// ProductService.java
package com.project.petcare.service;

import com.project.petcare.entity.Product;

import java.util.Optional;
import java.util.List;

public interface ProductService {
    List<Product> getAllProducts();
    Optional<Product> getProductById(Integer productId);
    Product addOrUpdateProduct(Product product);
    void deleteProductById(Integer productId);
    List<Product> getProductsByName(String productName);
    List<String> getAllProviders();
    // Other methods...
}
