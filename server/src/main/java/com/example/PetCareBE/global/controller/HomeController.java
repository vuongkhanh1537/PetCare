package com.example.PetCareBE.global.controller;

import com.example.PetCareBE.global.model.User;
import com.example.PetCareBE.global.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PathVariable;


import java.util.List;

@Controller
public class HomeController {

    private final UserService userService;

    @Autowired
    public HomeController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/")
    public String home(Model model) {
        // Logic for the homepage
        List<User> users = userService.getAllUsers();

        model.addAttribute("users", users);

        return "home";
    }

    @GetMapping("/users/{username}")
    public String getUserDetails(@PathVariable("username") String username, Model model) {
        // Logic to retrieve user details by username
        User user = userService.getUserByUsername(username);

        model.addAttribute("user", user);

        return "user-details";
    }

    @PostMapping("/users")
    public String createUser(User user) {
        // Logic for creating a new user
        userService.addUser(user);

        return "redirect:/";
    }


}