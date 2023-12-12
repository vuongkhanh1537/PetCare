package com.project.petcare.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.petcare.entity.Product;
import org.springframework.data.jpa.repository.Query;
import java.util.List;
import java.util.Optional;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer> {
    List<Product> findAll();
    Optional<Product> findById(Integer productId);
    List<Product> findByProductName(String productName);

    @Query ("select p from Product p where p.id = ?1")
    public Product findProductById(Integer prodId);

    @Query ("select p from Product p where p.isAvailable = true")
    List<Product> findAllProduct();
}
