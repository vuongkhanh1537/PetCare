package com.project.petcare.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.petcare.entity.DichVu;

import java.util.List;
import java.util.Optional;

@Repository
public interface DichVuRepository extends JpaRepository<DichVu, Long> {
    List<DichVu> findAll();
    Optional<DichVu> findById(Long id);
    List<DichVu> findByTenDichVu(String tenDichVu);
}
