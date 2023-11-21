package com.test.login_test.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.test.login_test.entity.User;
import com.test.login_test.repository.UserRepo;

@Service
public class LoginService  {
    @Autowired
    UserRepo userRepo;

    public User findByUsername(String username){
        return userRepo.findByUsername(username);
    }
    
    public User save(User user){
        return userRepo.save(user);
    }
}
