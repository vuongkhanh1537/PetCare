package com.project.petcare.repository;


import java.time.LocalDate;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.project.petcare.entity.Employee;

import jakarta.transaction.Transactional;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee,Integer> {
    @Query("SELECT e FROM Employee e WHERE e.id= ?1")
    public Employee findEmployee(Integer id);

    @Transactional
    @Modifying
    @Query("UPDATE Employee e set e.pos = ?1 where e.id = ?2")
    public void updatePos(String pos, Integer id);    

    @Transactional
    @Modifying
    @Query("UPDATE Employee e set e.cccd = ?1 where e.id = ?2")
    public void updateCCCD(String cccd, Integer id);

    @Transactional
    @Modifying
    @Query("UPDATE Employee e set e.place = ?1 where e.id = ?2")
    public void updatePlace(String place, Integer id);

    @Transactional
    @Modifying
    @Query("UPDATE Employee e set e.date = ?1 where e.id = ?2")
    public void updateDate(LocalDate date, Integer id);

    @Transactional
    @Modifying
    @Query("UPDATE Employee e set e.bdate = ?1 where e.id = ?2")
    public void updateBDate(LocalDate bDate, Integer id);

    @Transactional
    @Modifying
    @Query("UPDATE Employee e set e.sex = ?1 where e.id = ?2")
    public void updateSex(String sex, Integer id);

    @Transactional
    @Modifying
    @Query("UPDATE Employee e set e.phoneNum = ?1 where e.id = ?2")
    public void updatePhoneNum(String phoneNum, Integer id);

    @Transactional
    @Modifying
    @Query("UPDATE Employee e set e.firstName = ?1 where e.id = ?2")
    public void updateFName(String firstName, Integer id);

    @Transactional
    @Modifying
    @Query("UPDATE Employee e set e.lastName = ?1 where e.id = ?2")
    public void updateLName(String lastName, Integer id);

    @Transactional
    @Modifying
    @Query("UPDATE Employee e set e.address = ?1 where e.id = ?2")
    public void updateAddress(String address, Integer id);

    @Transactional
    @Modifying
    @Query("UPDATE Employee e set e.role = ?1 where e.id = ?2")
    public void updateRole(String role, Integer id);

    @Transactional
    @Modifying
    @Query("UPDATE Employee e set e.email = ?1 where e.id = ?2")
    public void updateEmail(String email, Integer id);


}
