package com.project.petcare.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.project.petcare.entity.ProdInOrder;

import jakarta.transaction.Transactional;

@Repository
public interface ProdInOrderRepository extends JpaRepository<ProdInOrder, Integer> {
    
    @Query("select p from ProdInOrder p where p.order.id = ?1")
    public List<ProdInOrder> findInfoOfOrder(Integer orderId);

    @Modifying
    @Transactional
    @Query("update ProdInOrder p set p.amount = ?1 , p.totalPrice = ?2 where p.order.id = ?3")
    public void updateInfo(Integer amount, Integer totalPrice, Integer orderId);
}
