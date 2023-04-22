package com.dbmsproject.feexpert.controller;
import com.dbmsproject.feexpert.dao.transactionDAO;
import com.dbmsproject.feexpert.model.Student;

import com.dbmsproject.feexpert.dao.studentDAO;
import com.dbmsproject.feexpert.model.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class studentController {

    @Autowired
    studentDAO sDAO;

    @Autowired
    transactionDAO tranDAO;

    @GetMapping("/student/login")
    public int showLogin() {return 0;}

    @PostMapping("/student/login")
    public boolean login(@RequestBody int userId,@RequestBody String password) {
        return sDAO.checkUserPassword(userId, password);
    }

    @GetMapping("/student/{studentId}")
    public Student getStudentById(@PathVariable int studentId) {
        return sDAO.getStudentById(studentId);
    }

    @GetMapping("/student/{studentId}/transactions")
    public List<Transaction> getTransactions(@PathVariable int studentId) {
        return tranDAO.viewTransactions(studentId);
    }

    @GetMapping("/student/{studentId}/transactions/{transactionId}")
    public Transaction getReceiptByTransactionId(@PathVariable int studentId, @PathVariable int transactionId) {
        return tranDAO.getReceiptByTransactionId(transactionId);
    }

    @GetMapping("/student/{studentId}/transactions/{semesterId}")
    public Transaction getReceiptBySemesterId(@PathVariable int studentId, @PathVariable int semesterId) {
        return tranDAO.getReceipt(studentId, semesterId);
    }

    @PostMapping("/student/{studentId}/transactions")
    public int addTransaction(@PathVariable String studentId, @RequestBody Transaction transaction) {
        return tranDAO.addTransaction(transaction);
    }

    @GetMapping("/student/{studentId}/newTransaction")
    public void showNewTransaction(@PathVariable String studentId) {;}

    @GetMapping("/student/{studentId}/pending")
    public String showPendingFees(@PathVariable String studentId) {
        return null;
    }
}
