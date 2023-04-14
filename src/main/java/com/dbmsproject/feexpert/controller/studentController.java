package com.dbmsproject.feexpert.controller;

import com.dbmsproject.feexpert.dao.studentDAO;
import com.dbmsproject.feexpert.model.Student;
import com.dbmsproject.feexpert.model.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class studentController {

    @Autowired
    studentDAO sDAO;

    @GetMapping("/student/login")
    public int showLogin() {return 0;}

    @PostMapping("/student/login")
    public int login(@RequestBody String userId,@RequestBody String password) {return 0;}

    @GetMapping("/student/{studentId}")
    public Student getStudentById(@PathVariable String studentId) {return null;}

    @GetMapping("/student/{studentId}/transactions")
    public List<Transaction> getTransactions(@PathVariable String studentId) {return null;}

    @PostMapping("/student/{studentId}/transactions")
    public int addTransaction(@PathVariable String studentId, @RequestBody Transaction transaction) {return 0;}
}
