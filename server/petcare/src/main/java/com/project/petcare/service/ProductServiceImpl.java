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

    private final ProductRepository productRepository;

    @Autowired
    public ProductServiceImpl(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @Override
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    @Override
    public Optional<Product> getProductById(Long productId) {
        return productRepository.findById(productId);
    }

    @Override
    public Product addOrUpdateProduct(Product product) {
        return productRepository.save(product);
    }

    @Override
    public void deleteProductById(Long productId) {
        productRepository.deleteById(productId);
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
