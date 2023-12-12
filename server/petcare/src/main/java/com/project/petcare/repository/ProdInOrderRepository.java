package com.project.petcare.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.petcare.entity.ProdInOrder;

@Repository
public interface ProdInOrderRepository extends JpaRepository<ProdInOrder, Integer> {
    
}
