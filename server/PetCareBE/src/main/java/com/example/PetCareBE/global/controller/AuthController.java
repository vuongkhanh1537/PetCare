package com.example.PetCareBE.global.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.PetCareBE.global.model.User;
import com.example.PetCareBE.global.service.UserService;
import com.example.PetCareBE.global.model.LoginRequest;
import com.example.PetCareBE.global.model.RegisterRequest;

@RestController
@RequestMapping("/api")
public class AuthController {

    private final UserService userService;

    @Autowired
    public AuthController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody LoginRequest loginRequest) {
        // Retrieve the username and password from the loginRequest
        String username = loginRequest.getUsername();
        String password = loginRequest.getPassword();

        User user = userService.getUserByUsername(username);

        if (user != null && user.getPassword().equals(password)) {
            // Successful login
            return ResponseEntity.ok("Login successful");
        } else {
            // Invalid login
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid username or password");
        }
    }

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody RegisterRequest registerRequest) {
        // Retrieve the username and password from the registerRequest
        String username = registerRequest.getUsername();
        String password = registerRequest.getPassword();

        // Check if the username is already taken
        if (userService.getUserByUsername(username) != null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Username already exists");
        }

        // Create a new user and save it to the database
        User newUser = new User(username, password);
        userService.saveUser(newUser);

        return ResponseEntity.ok("Registration successful");
    }
}
