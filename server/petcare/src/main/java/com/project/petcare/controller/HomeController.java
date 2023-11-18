package com.project.petcare.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.project.petcare.entity.User;
import com.project.petcare.service.UserService;

@RestController
public class HomeController {
    @Autowired
    UserService userService;

    @GetMapping("")
    public String homePage(){
        return "This is home page";
    }

    @PostMapping("/login")
    public String loginProccess(@RequestBody User user){
        User findUser = userService.findByUsername(user.getUsername());
        if (findUser != null){
            if (findUser.getPassword().equals(user.getPassword()) && findUser.getRole().equals("guest")) return "this is a guest";
            if (findUser.getPassword().equals(user.getPassword()) && findUser.getRole().equals("employee")) return "this is an empolyee";
            else return "Wrong password";
        }
        return "User not found";
    }

    @PostMapping("/register")
    public String registerProccess(@RequestBody User user){
        User findUser = userService.findByUsername(user.getUsername());
        if (findUser == null) {
            Integer passLen = user.getPassword().length();
            if (passLen >= 8 && passLen <= 20) {
                User newUser = new User (user.getUsername(),user.getPassword());
                userService.saveUser(newUser);
                return "Register success";
            }
            return "Invalid Password";
        }
        return "Username is used";

    }
}
