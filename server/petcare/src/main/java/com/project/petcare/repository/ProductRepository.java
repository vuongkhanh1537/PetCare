package com.project.petcare.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.petcare.entity.Product;

import java.util.List;
import java.util.Optional;

public interface ProductRepository extends JpaRepository<Product, Long> {
    List<Product> findAll();
    Optional<Product> findById(Long productId);
    List<Product> findByProductName(String productName);

}
