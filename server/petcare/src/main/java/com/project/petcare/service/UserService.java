package com.project.petcare.service;

import org.springframework.stereotype.Service;

import com.project.petcare.entity.User;

@Service
public interface UserService {
    public User findByUsername(String username);

    public User saveUser(User user); 
}
