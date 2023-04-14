package com.dbmsproject.feexpert.dao;

import com.dbmsproject.feexpert.model.Student;
import com.dbmsproject.feexpert.model.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public class studentDAOImpl implements studentDAO{

    @Autowired
    JdbcTemplate jdbcTemplate;

    @Override
    public int viewScholarship(String studentId) {
        return 0;
    }


    @Override
    public int addStudent(Student student) {
        return 0;
    }

    @Override
    public int deleteStudent(String studentId) {
        return 0;
    }

    @Override
    public int updateStudent(Student student, String studentId) {
        return 0;
    }

    @Override
    public int updateScholarship(String studentId) {
        return 0;
    }

    @Override
    public int getAllStudent() { return 0; }
}
