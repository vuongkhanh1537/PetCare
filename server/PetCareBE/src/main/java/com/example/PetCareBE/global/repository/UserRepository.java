package com.example.PetCareBE.global.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.PetCareBE.global.model.User;
import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    void addUser(User user);
    User getUserByUsername(String username);
    List<User> getAllUsers();
    void updateUser(User user);
    void deleteUser(String username);
    List<User> searchUsers(String searchTerm);
    int countUsers();
    boolean validateUser(String username, String password);
    
}