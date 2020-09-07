package com.wizpqanda.Student.controller

import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody

import javax.jws.*;

import com.wizpqanda.Student.DAO.StudentService
import com.wizpqanda.Student.model.Student
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

import javax.ws.rs.Produces
import javax.ws.rs.core.MediaType


@RestController
@RequestMapping("/webapi/v1.0/student")
@CrossOrigin(origins = "http://localhost:4200")
class StudentController {

    @Autowired
    public StudentService studentService;

    @GetMapping("/getrecords")
    @Produces(MediaType.APPLICATION_JSON)
    public Student getStudent(){
        return studentService.getStudentRecord();
    }

    @PostMapping("/saverecord")
    @Produces(MediaType.APPLICATION_JSON)
    public Student saveStudent(@RequestBody Student student){
        return studentService.saveStudentRecord(student);
    }
}
