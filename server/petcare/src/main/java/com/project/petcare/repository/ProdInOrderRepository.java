package com.project.petcare.repository;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
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

    @Query("SELECT SUM(pio.amount) FROM ProdInOrder pio " +
            "WHERE MONTH(pio.order.payDate) = ?1 AND YEAR(pio.order.payDate) = ?2 " +
            "AND pio.product.type1 = 'Chó'")
    Integer findAmountOfDogsInOrdersForMonth(Integer month, Integer year);

    @Query("SELECT SUM(pio.amount) FROM ProdInOrder pio " +
            "WHERE MONTH(pio.order.payDate) = ?1 AND YEAR(pio.order.payDate) = ?2 " +
            "AND pio.product.type1 = 'Mèo'")
    Integer findAmountOfCatsInOrdersForMonth(Integer month, Integer year);

}