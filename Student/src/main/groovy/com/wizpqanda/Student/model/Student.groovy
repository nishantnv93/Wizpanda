package com.wizpqanda.Student.model

import org.springframework.stereotype.Component

import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id
import javax.persistence.Table

@Component
@Entity
@Table(name= "student")
class Student {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private int id;

    private String name;

    private String email;

    private String mobileNumber;

    private String role;

    public int getId() {
        return id
    }

    public void setId(int id) {
        this.id = id
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getMobileNumber() {
        return mobileNumber;
    }

    public void setMobileNumber(String mobileNumber) {
        this.mobileNumber = mobileNumber;
    }

    public String getRole() {
        return role
    }

    public void setRole(String role) {
        this.role = role;
    }
}
