package com.project.petcare.entity;

import java.time.LocalDate;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "Employee")
@NoArgsConstructor
@Getter
@Setter
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
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

    public Employee(String pos, String cccd, String place, LocalDate date, String sex, String phoneNum,
            String firstName, String lastName, String address, String role) {
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
    }
    

}
