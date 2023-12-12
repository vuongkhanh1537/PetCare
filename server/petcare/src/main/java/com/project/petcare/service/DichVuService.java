package com.project.petcare.service;

import com.project.petcare.entity.DichVu;
import com.project.petcare.repository.DichVuRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DichVuService {
     @Autowired
    private final DichVuRepository dichVuRepository;

   
    public DichVuService(DichVuRepository dichVuRepository) {
        this.dichVuRepository = dichVuRepository;
    }

    public List<DichVu> getAllServices() {
        return dichVuRepository.findAll();
    }

    public Optional<DichVu> getServiceById(Long serviceId) {
        return dichVuRepository.findById(serviceId);
    }

    public DichVu addOrUpdateService(DichVu service) {
        return dichVuRepository.save(service);
    }

    public void deleteServiceById(Long serviceId) {
        dichVuRepository.deleteById(serviceId);
    }

    public List<DichVu> getServicesByName(String name) {
        return dichVuRepository.findByTenDichVu(name);
    }
}
