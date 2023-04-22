package com.dbmsproject.feexpert.dao;

import com.dbmsproject.feexpert.model.Student;
import com.dbmsproject.feexpert.model.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public class studentDAOImpl implements studentDAO{

    @Autowired
    JdbcTemplate jdbcTemplate;

    @Override
    public List<Student> viewStudentWithScholarship() {
        List<Student> students = jdbcTemplate.query("SELECT * FROM student WHERE scholarship > 0", new BeanPropertyRowMapper<Student>(Student.class));
        return students;
    }

    @Override
    public int addStudent(Student student) {
        return jdbcTemplate.update("insert into student values (?,?,?,?,?,?,?,?,?)",student.getStudentID(),student.getStudentName(),student.getUserId(), student.getPassword(),student.getSemesterId(),student.getBatchId(),student.getContact(),student.getAddress(),student.getScholarship());
    }

    @Override
    public int deleteStudent(int studentId) {
        return jdbcTemplate.update("delete from student where studentID = ?", studentId);
    }

    @Override
    public int updateStudent(Student student, int studentId) {
        return jdbcTemplate.update("UPDATE student SET studentName = ?, userId = ?, password = ?, semesterId = ?, batchId = ?, contact = ?, address = ?, scholarship = ? WHERE studentID = ?;", student.getStudentName(),student.getUserId(), student.getPassword(),student.getSemesterId(),student.getBatchId(),student.getContact(),student.getAddress(),student.getScholarship(), studentId);
    }

    @Override
    public List<Student> getStudents() {
        return jdbcTemplate.query("select * from student;",new BeanPropertyRowMapper<Student>(Student.class));
    }
}
