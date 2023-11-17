package com.example.PetCareBE.global.controller;

import org.springframework.stereotype.Controller;
import com.example.PetCareBE.global.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import com.example.PetCareBE.global.model.User;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class RegistrationController {

    private final UserService userService;

    @Autowired
    public RegistrationController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/register")
    public String registrationForm() {
        return "register";
    }

    @PostMapping("/register")
    public String register(@RequestParam("username") String username, @RequestParam("password") String password) {
        // Check if the username is already taken
        if (userService.getUserByUsername(username) != null) {
            return "redirect:/register?error";
        }

        // Create a new user and save it to the database
        User newUser = new User(username, password);
        userService.saveUser(newUser);

        return "redirect:/login?registered";
    }
}
