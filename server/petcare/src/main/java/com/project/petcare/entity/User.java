package com.project.petcare.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "users")
@NoArgsConstructor
@Getter
@Setter
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "username",nullable = false, unique = true, length = 255)
    private String username;

    @Column(name = "password",nullable = false, length = 20)
    private String password;

    @OneToOne(mappedBy = "user")
    private Employee employee;

    public User(String username, String password) {
        this.username = username;
        this.password = password;
    }

}
