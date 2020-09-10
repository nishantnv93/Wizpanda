package com.wizpqanda.Student.DAO

import com.wizpqanda.Student.model.Student
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.jpa.repository.Query
import org.springframework.data.repository.query.Param
import org.springframework.stereotype.Service

@Service
class StudentService {

    @Autowired
    public StudentRepository studentRepository;

    public List<Student> getStudentRecord(){
        return studentRepository.findAll();
    }

    public List<Student> saveStudentRecord(Student student){
        return studentRepository.saveAndFlush(student);
    }


}
