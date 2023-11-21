package com.project.petcare.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.project.petcare.entity.Employee;

@Repository
public interface AdminRepository extends JpaRepository<Employee,Integer> {
    @Query("SELECT e FROM Employee e WHERE e.id= ?1")
    public Employee findEmployee(Integer id);
}
