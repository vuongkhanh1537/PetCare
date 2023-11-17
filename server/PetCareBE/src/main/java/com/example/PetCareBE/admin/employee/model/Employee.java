package com.example.PetCareBE.admin.employee.model;

import java.time.LocalDate;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "nhan_vien")
public class Employee {

    @Id
    @Column(name = "NVid")
    private String id;

    @Column(name = "ChucVu", nullable = false)
    private String position;

    @Column(name = "NoiCap", nullable = false)
    private String placeOfIssue;

    @Column(name = "NgayCap", nullable = false)
    private LocalDate dateOfIssue;

    @Column(name = "GioiTinh", nullable = false)
    private String gender;

    @Column(name = "SDT", nullable = false)
    private String phoneNumber;

    @Column(name = "HoVaTenDem", nullable = false)
    private String middleName;

    @Column(name = "TenDau", nullable = false)
    private String lastName;

    @Column(name = "UserType", nullable = false)
    private String userType;

    public Employee() {
    }

    public Employee(String id, String position, String placeOfIssue, LocalDate dateOfIssue, String gender, String phoneNumber, String middleName, String lastName, String userType) {
        this.id = id;
        this.position = position;
        this.placeOfIssue = placeOfIssue;
        this.dateOfIssue = dateOfIssue;
        this.gender = gender;
        this.phoneNumber = phoneNumber;
        this.middleName = middleName;
        this.lastName = lastName;
        this.userType = userType;
    }

    // Getters and Setters

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getPosition() {
        return position;
    }

    public void setPosition(String position) {
        this.position = position;
    }

    public String getPlaceOfIssue() {
        return placeOfIssue;
    }

    public void setPlaceOfIssue(String placeOfIssue) {
        this.placeOfIssue = placeOfIssue;
    }

    public LocalDate getDateOfIssue() {
        return dateOfIssue;
    }

    public void setDateOfIssue(LocalDate dateOfIssue) {
        this.dateOfIssue = dateOfIssue;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getMiddleName() {
        return middleName;
    }

    public void setMiddleName(String middleName) {
        this.middleName = middleName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getUserType() {
        return userType;
    }

    public void setUserType(String userType) {
        this.userType = userType;
    }
}