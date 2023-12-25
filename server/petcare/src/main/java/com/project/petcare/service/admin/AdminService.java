package com.project.petcare.service.admin;

import java.util.List;

import org.springframework.stereotype.Service;

import com.project.petcare.entity.Employee;

@Service
public interface AdminService {
    public List<Employee> listOfEmployee();
    public Employee saveEmp(Employee emp);
    public Employee findEmployee(Integer id);
    public Employee delEmp(Integer id);
    // public Employee updateEmp(Integer id, String pos, String role);

    public void updateEmp(Integer id, Employee newEmp);
}
