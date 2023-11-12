package com.example.PetCareBE.global.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;
import com.example.PetCareBE.global.model.User;
import com.example.PetCareBE.global.repository.UserRepository;

@Service
@Transactional
public class UserService {
    private UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public void addUser(User user) {
        userRepository.addUser(user);
    }

    public User getUserByUsername(String username) {
        return userRepository.getUserByUsername(username);
    }

    public List<User> getAllUsers() {
        return userRepository.getAllUsers();
    }

    public void updateUser(User user) {
        userRepository.updateUser(user);
    }

    public void deleteUser(String username) {
        userRepository.deleteUser(username);
    }

    public List<User> searchUsers(String searchTerm) {
        return userRepository.searchUsers(searchTerm);
    }

    public int countUsers() {
        return userRepository.countUsers();
    }

    public boolean validateUser(String username, String password) {
        return userRepository.validateUser(username, password);
    }

    public void saveUser(User user) {
        userRepository.save(user);
    }
    
}