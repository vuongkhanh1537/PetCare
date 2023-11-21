package com.project.petcare.service.admin;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.petcare.entity.Employee;
import com.project.petcare.repository.AdminRepository;

@Service
public class AdminServiceImpl implements AdminService{
    @Autowired
    AdminRepository adminRepository;

    @Override
    public List<Employee> listOfEmployee() {
       return adminRepository.findAll();
    }

    @Override
    public Employee saveEmp(Employee emp) {
        return adminRepository.save(emp);
    }

    @Override
    public Employee findEmployee(Integer id) {
        return adminRepository.findEmployee(id);
    }

    @Override
    public Employee delEmp(Integer id) {
        Employee findEmployee = adminRepository.findEmployee(id);
        adminRepository.delete(findEmployee);
        return findEmployee;
    }

    @Override
    public Employee updateEmp(Integer id, String pos, String role) {
        // TODO Auto-generated method stub
        Employee findEmployee = adminRepository.findEmployee(id);
        findEmployee.setPos(pos);
        findEmployee.setRole(role);
        return findEmployee;
    }
    
  
}
