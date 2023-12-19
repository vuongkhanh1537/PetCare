package com.project.petcare.service.admin;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.petcare.entity.Employee;
import com.project.petcare.entity.User;
import com.project.petcare.repository.EmployeeRepository;
import com.project.petcare.repository.UserRepository;

@Service
public class AdminServiceImpl implements AdminService{
    @Autowired
    EmployeeRepository adminRepository;

    @Autowired
    UserRepository userRepository;

    @Override
    public List<Employee> listOfEmployee() {
       return adminRepository.findAll();
    }

    @Override
    public Employee saveEmp(Employee emp) {
        User newUser = new User(emp.getEmail(), "123456789");
        emp.setUser(userRepository.save(newUser));
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
        User findUser = userRepository.findByUsername(findEmployee.getEmail());
        userRepository.delete(findUser);
        return findEmployee;
    }

    @Override
    public void updateEmp(Integer id, Employee newEmp) {
        adminRepository.updateAddress(newEmp.getAddress(), id);
        adminRepository.updateBDate(newEmp.getBdate(), id);
        adminRepository.updateCCCD(newEmp.getCccd(), id);
        adminRepository.updateDate(newEmp.getDate(), id);
        adminRepository.updateEmail(newEmp.getEmail(), id);
        adminRepository.updateFName(newEmp.getFirstName(), id);
        adminRepository.updateLName(newEmp.getLastName(), id);
        adminRepository.updatePhoneNum(newEmp.getPhoneNum(), id);
        adminRepository.updatePlace(newEmp.getPlace(), id);
        adminRepository.updateSex(newEmp.getSex(), id);
    }

    // @Override
    // public Employee updateEmp(Integer id, String pos, String role) {
    //     // TODO Auto-generated method stub
    //     Employee findEmployee = adminRepository.findEmployee(id);
    //     findEmployee.setPos(pos);
    //     findEmployee.setRole(role);
    //     return findEmployee;
    // }
    
  
}
