package com.wizpqanda.Student.DAO

import com.wizpqanda.Student.model.Student
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository


@Repository
interface StudentRepository extends JpaRepository<Student, Integer> {
}