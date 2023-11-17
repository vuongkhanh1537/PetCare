package com.example.PetCareBE.global.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.example.PetCareBE.global.model.User;
import com.example.PetCareBE.global.service.UserService;
import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {
    private UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping
    public void addUser(@RequestBody User user) {
        userService.addUser(user);
    }

    @GetMapping("/{username}")
    public User getUserByUsername(@PathVariable String username) {
        return userService.getUserByUsername(username);
    }

    @GetMapping
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @PutMapping
    public void updateUser(@RequestBody User user) {
        userService.updateUser(user);
    }

    @DeleteMapping("/{username}")
    public void deleteUser(@PathVariable String username) {
        userService.deleteUser(username);
    }

    @GetMapping("/search")
    public List<User> searchUsers(@RequestParam String searchTerm) {
        return userService.searchUsers(searchTerm);
    }

    @GetMapping("/count")
    public int countUsers() {
        return userService.countUsers();
    }

    @PostMapping("/validate")
    public boolean validateUser(@RequestParam String username, @RequestParam String password) {
        return userService.validateUser(username, password);
    }
}