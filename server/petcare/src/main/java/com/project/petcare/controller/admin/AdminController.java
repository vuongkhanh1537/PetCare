package com.project.petcare.controller.admin;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
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

    @PostMapping("/admin/add_emp")
    public Employee addEmployee (@RequestBody Employee emp){
        return adminService.saveEmp(emp);
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
        Employee findEmployee = adminService.findEmployee(id);
        findEmployee.updateEmp(newEmployee);
        return findEmployee;
    }

}
