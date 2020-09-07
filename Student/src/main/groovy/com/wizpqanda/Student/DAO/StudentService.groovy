package com.wizpqanda.Student.DAO

import com.wizpqanda.Student.model.Student
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service

@Service
class StudentService {

    @Autowired
    public StudentRepository studentRepository;

    public Student getStudentRecord(){
        return studentRepository.findAll();
    }

    public Student saveStudentRecord(Student student){
        return studentRepository.saveAndFlush(student);
    }
}
