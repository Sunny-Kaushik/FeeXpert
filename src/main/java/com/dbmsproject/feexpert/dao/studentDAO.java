package com.dbmsproject.feexpert.dao;

import com.dbmsproject.feexpert.model.Student;
import com.dbmsproject.feexpert.model.Transaction;
import org.springframework.stereotype.Repository;

import java.util.List;


public interface studentDAO {

    public List<Student> viewStudentWithScholarship();

    public int addStudent(Student student);

    public int deleteStudent(int studentId);

    public int updateStudent(Student student, int studentId);

    public List<Student> getStudents();

    //    checkFeeInfo() left
}
