package com.example.admin.repository;

import com.example.admin.entity.DichVu;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface DichVuRepository extends JpaRepository<DichVu, Long> {
    List<DichVu> findAll();
    Optional<DichVu> findById(Long id);
    List<DichVu> findByTenDichVu(String tenDichVu);
}
