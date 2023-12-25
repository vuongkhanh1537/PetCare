package com.project.petcare.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.project.petcare.entity.Employee;
import com.project.petcare.service.admin.AdminService;

@CrossOrigin
@RestController
public class AdminController {
    @Autowired
    AdminService adminService;

    @GetMapping("/admin/home")
    public String adminHome(){
        return "this is adminHome";
    }

    @GetMapping("/admin/all_employee")
    public List<Employee> listOfEmployee(){
        return adminService.listOfEmployee();
    }

    @PostMapping("/admin/employee")
    public ResponseEntity<Employee> addEmployee (@RequestBody Employee emp){
        Employee savedEmp = adminService.saveEmp(emp);
        if (savedEmp != null) return ResponseEntity.ok(savedEmp);
        return ResponseEntity.badRequest().body(null) ;
    }

    @GetMapping("/admin/employee")
    public Employee employeeDetails(@RequestParam(name = "id") Integer id){
        return adminService.findEmployee(id);
    }

    @DeleteMapping("/admin/employee")
    public Employee deleteEmployee(@RequestParam(name = "id") Integer id){
        return adminService.delEmp(id);
    }

    @PutMapping("/admin/employee")
    public Employee updateInfEmployee(@RequestParam(name = "id") Integer id, @RequestBody Employee newEmployee){
        adminService.updateEmp(id, newEmployee);
        return newEmployee;
    }

}
