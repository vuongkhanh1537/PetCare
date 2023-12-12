package com.project.petcare.repository;


import java.time.LocalDate;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.project.petcare.entity.Order;


@Repository
public interface OrderRepository extends JpaRepository<Order, Integer> {
    @Modifying
    @Query("update Order o set o.status = ?1, o.payDate = ?3 where o.id = ?2")
    public void updateStatus(Boolean status, Integer id, LocalDate payDate);
}
