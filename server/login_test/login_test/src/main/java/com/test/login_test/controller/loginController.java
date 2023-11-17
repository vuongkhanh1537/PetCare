package com.test.login_test.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.test.login_test.entity.User;
import com.test.login_test.service.LoginService;

@Controller
public class loginController {

    @Autowired
    private LoginService userRepo ; 

    @GetMapping("/login")
    public String loginPage(){
        
        return "login";
    }
    
    @PostMapping("/login")
    public String welcome(
                        Model model,
                        @RequestParam String username, 
                        @RequestParam String password){
        User findUser = userRepo.findByUsername(username);
        System.out.println(findUser.getUsername());
        System.out.println(findUser.getPassword());
        if (findUser != null) {
            if (findUser.getPassword().equals(password))  {
                return "welcome";
            }
        }
        String tryAg = "Please try again!";
        model.addAttribute("errorMssg", tryAg);
        return "login";
    }

    @GetMapping("/register")
    public String registerPage(){
        return "register";
    }

    @PostMapping("/register")
    public String register(@RequestParam String username, @RequestParam String password){
        User findUser = userRepo.findByUsername(username);
        if (findUser != null) {
            return "register";
        }
        User newUser = new User(username, password);
        userRepo.save(newUser);
        return "register_sucess";
    }
}
