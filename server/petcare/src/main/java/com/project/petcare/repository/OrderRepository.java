package com.project.petcare.repository;


import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.project.petcare.entity.Order;

import jakarta.transaction.Transactional;


@Repository
public interface OrderRepository extends JpaRepository<Order, Integer> {
    @Modifying
    @Transactional
    @Query("update Order o set o.status = ?1 where o.id = ?2")
    public void updateStatus(Integer status, Integer id);

    @Modifying
    @Transactional
    @Query("update Order o set o.status = ?1, o.payDate = ?3 where o.id = ?2")
    public void updateStatusPaid(Integer status, Integer id, LocalDate payDate);

    @Modifying
    @Transactional
    @Query("update Order o set o.totalPrice = ?1 where o.id = ?2")
    public void updateTotalPrice(Integer totalPrice, Integer id);

    @Query("select o from Order o where o.id = ?1")
    public Order findOrderById(Integer id);
    
    @Query("SELECT o FROM Order o WHERE o.payDate IS NOT NULL AND o.payDate >= ?1")
    List<Order> findPaidOrdersAfterDate(LocalDate date);

    @Query("SELECT o FROM Order o WHERE o.payDate BETWEEN :startDate AND :endDate")
    List<Order> findPaidOrdersBetweenDates(@Param("startDate") LocalDate startDate, @Param("endDate") LocalDate endDate);
    
    @Query("SELECT o FROM Order o WHERE o.orderDate >= ?1 AND o.orderDate <= ?2")
    List<Order> findOrdersBetweenDates(LocalDate startDate, LocalDate endDate);
}
