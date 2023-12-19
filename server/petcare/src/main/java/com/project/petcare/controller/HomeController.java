package com.project.petcare.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.project.petcare.dto.UserDto;
import com.project.petcare.entity.User;
import com.project.petcare.service.UserService;
import org.springframework.web.bind.annotation.CrossOrigin;

@RestController
@CrossOrigin
public class HomeController {
    @Autowired
    UserService userService;

    @GetMapping("")
    public String homePage(){
        return "This is home page";
    }

    @PostMapping("/login")
    public ResponseEntity<UserDto> loginProccess(@RequestBody User user){
        User findUser = userService.findByUsername(user.getUsername());
        if (findUser != null){
            if (findUser.getPassword().equals(user.getPassword()) ) return ResponseEntity.ok(new UserDto(findUser));
            else return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(null);
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
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
