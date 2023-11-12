package com.example.PetCareBE.global.controller;

import org.springframework.stereotype.Controller;
import com.example.PetCareBE.global.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import com.example.PetCareBE.global.model.User;
import javax.servlet.http.HttpSession;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class LoginController {

    private final UserService userService;

    @Autowired
    public LoginController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/login")
    public String loginForm() {
        return "login";
    }

    @PostMapping("/login")
    public String login(@RequestParam("username") String username, @RequestParam("password") String password, HttpSession session) {
        User user = userService.getUserByUsername(username);

        if (user != null && user.getPassword().equals(password)) {
            // Successful login
            session.setAttribute("user", user);
            return "redirect:/";
        } else {
            // Invalid login
            return "redirect:/login?error";
        }
    }

    @GetMapping("/logout")
    public String logout(HttpSession session) {
        // Clear the session and invalidate the user's login
        session.invalidate();
        return "redirect:/login";
    }
}
