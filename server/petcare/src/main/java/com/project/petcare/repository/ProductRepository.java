package com.project.petcare.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.project.petcare.entity.Product;

import jakarta.transaction.Transactional;

import java.util.List;
import java.util.Optional;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer> {
    List<Product> findAll();

    Optional<Product> findById(Integer productId);

    List<Product> findByProductName(String productName);

    @Query("select p from Product p where p.id = ?1")
    public Product findProductById(Integer prodId);

    @Query("select p from Product p where p.isAvailable = true")
    List<Product> findAllProduct();

    @Query("SELECT DISTINCT p.provider FROM Product p")
    List<String> findAllProviders();

    @Transactional
    @Modifying
    @Query("update Product p set p.quantity = ?1 where p.id = ?2")
    public void updateQuantity(Integer newQuantity, Integer id);

    @Transactional
    @Modifying
    @Query("update Product p set p.isAvailable = false where p.id = ?1")
    public void deleteProduct(Integer productID);

    @Query("SELECT p FROM Product p WHERE p.type1 = 'Chó'")
    List<Product> findDogProducts();
}