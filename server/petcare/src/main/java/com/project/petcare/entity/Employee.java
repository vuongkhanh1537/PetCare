package com.project.petcare.entity;

import java.time.LocalDate;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

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


    @Column(name = "CCCD", length = 20, unique = true)
    private String cccd;

    @Column(name = "place")
    private String place;

    @Column(name = "cccdDate")
    @Temporal(TemporalType.DATE)
    private LocalDate date;

    @Column(name = "bdate")
    @Temporal(TemporalType.DATE)
    private LocalDate bdate;

    @Column(name = "gender")
    private String sex;

    @Column(name = "phone_num", length = 13)
    private String phoneNum;

    @Column(name = "first_name",length = 50)
    private String firstName;

    @Column(name = "last_name",length = 10)
    private String lastName;

    @Column(name = "address",length = 50)
    private String address;
    

    @Column(name = "email", length =50)
    private String email;

    @OneToMany(mappedBy = "employee")
    @JsonIgnore
    private List<Order> order;

    @OneToOne
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    @JsonIgnore
    private User user;

    public Employee(String cccd, String place, LocalDate date, String sex, String phoneNum,
            String firstName, String lastName, String address, String email, LocalDate bDate) {
        this.cccd = cccd;
        this.place = place;
        this.date = date;
        this.sex = sex;
        this.phoneNum = phoneNum;
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
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
        this.sex = newEmployee.getSex();
        this.email = newEmployee.getEmail();
        this.bdate = newEmployee.getBdate();
    }


}
