package com.example.admin.controller;

import com.example.admin.entity.DichVu;
import com.example.admin.service.DichVuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/api/services")
public class DichVuController {

    private final DichVuService dichVuService;

    @Autowired
    public DichVuController(DichVuService dichVuService) {
        this.dichVuService = dichVuService;
    }

    @GetMapping
    public ResponseEntity<List<DichVu>> getAllServices() {
        List<DichVu> services = dichVuService.getAllServices();
        return new ResponseEntity<>(services, HttpStatus.OK);
    }

    @GetMapping("/{serviceId}")
    public ResponseEntity<DichVu> getServiceById(@PathVariable Long serviceId) {
        Optional<DichVu> service = dichVuService.getServiceById(serviceId);
        return service.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping
    public ResponseEntity<DichVu> addService(@RequestBody DichVu newService) {
        DichVu savedService = dichVuService.addOrUpdateService(newService);
        return new ResponseEntity<>(savedService, HttpStatus.CREATED);
    }

    @PutMapping("/{serviceId}")
    public ResponseEntity<DichVu> updateService(@PathVariable Long serviceId, @RequestBody DichVu updatedService) {
        Optional<DichVu> existingService = dichVuService.getServiceById(serviceId);
        if (existingService.isPresent()) {
            updatedService.setId(serviceId);
            DichVu savedService = dichVuService.addOrUpdateService(updatedService);
            return new ResponseEntity<>(savedService, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{serviceId}")
    public ResponseEntity<Void> deleteService(@PathVariable Long serviceId) {
        dichVuService.deleteServiceById(serviceId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @GetMapping("/search")  
    public ResponseEntity<List<DichVu>> getServicesByName(@RequestParam String name) {
        List<DichVu> services = dichVuService.getServicesByName(name);
        return new ResponseEntity<>(services, HttpStatus.OK);
    }
}
