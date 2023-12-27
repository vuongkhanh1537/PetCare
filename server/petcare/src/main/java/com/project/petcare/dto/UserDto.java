package com.project.petcare.dto;

import com.project.petcare.entity.User;

public class UserDto {
    private Integer id;
    private String name;

    public UserDto(User user) {
        this.id = user.getEmployee().getId();
        this.name = user.getEmployee().getFirstName() + " " + user.getEmployee().getLastName();
    }

    public Integer getId() {
        return id;
    }
    public void setId(Integer id) {
        this.id = id;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    
}
