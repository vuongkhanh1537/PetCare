package com.project.petcare.entity;

import java.time.LocalDate;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


//Còn thiếu status??? * 
//-------
@Entity
@Table(name = "Employee")
@NoArgsConstructor
@Getter
@Setter
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @Column(name = "position")
    private String pos;

    @Column(name = "CCCD", length = 20, nullable = false, unique = true)
    private String cccd;

    @Column(name = "place", nullable = false)
    private String place;

    @Column(name = "date")
    @Temporal(TemporalType.DATE)
    private LocalDate date;

    @Column(name = "bdate")
    @Temporal(TemporalType.DATE)
    private LocalDate bdate;

    @Column(name = "sex")
    private String sex;

    @Column(name = "phone_num", length = 13)
    private String phoneNum;

    @Column(name = "first_name",length = 50)
    private String firstName;

    @Column(name = "last_name",length = 10)
    private String lastName;

    @Column(name = "address",length = 50)
    private String address;
    
    @Column(name = "role")
    private String role;

    @Column(name = "email", length =50)
    private String email;

    public Employee(String pos, String cccd, String place, LocalDate date, String sex, String phoneNum,
            String firstName, String lastName, String address, String role, String email, LocalDate bDate) {
        this.pos = pos;
        this.cccd = cccd;
        this.place = place;
        this.date = date;
        this.sex = sex;
        this.phoneNum = phoneNum;
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.role = role;
        this.email = email;
        this.bdate = bDate;
    }
    
    public void updateEmp (Employee newEmployee){
        this.address = newEmployee.getAddress();
        this.cccd = newEmployee.getCccd();
        this.date = newEmployee.getDate();
        this.firstName = newEmployee.getFirstName();
        this.lastName = newEmployee.getLastName();
        this.phoneNum = newEmployee.getPhoneNum();
        this.place = newEmployee.getPlace();
        this.pos = newEmployee.getPos();
        this.role = newEmployee.getRole();
        this.sex = newEmployee.getSex();
        this.email = newEmployee.getEmail();
        this.bdate = newEmployee.getBdate();
    }


}
