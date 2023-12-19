// ProductServiceImpl.java
package com.project.petcare.service;

import com.project.petcare.entity.Product;
import com.project.petcare.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ProductServiceImpl implements ProductService {
    @Autowired
    private final ProductRepository productRepository;

    
    public ProductServiceImpl(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @Override
    public List<Product> getAllProducts() {
        return productRepository.findAllProduct();
    }

    @Override
    public Optional<Product> getProductById(Integer productId) {
        return productRepository.findById(productId);
    }

    @Override
    public Product addOrUpdateProduct(Product product) {
        product.setIsAvailable(true);
        return productRepository.save(product);
    }

    @Override
    public void deleteProductById(Integer productId) {
        productRepository.deleteProduct(productId);
    }

    @Override
    public List<Product> getProductsByName(String productName) {
        return productRepository.findByProductName(productName);
    }

    @Override
    public List<String> getAllProviders() {
        return productRepository.findAll()
                .stream()
                .map(Product::getProvider)
                .distinct()
                .collect(Collectors.toList());
    }
    // Other methods...
}
