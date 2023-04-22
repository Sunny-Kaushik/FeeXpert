package com.dbmsproject.feexpert.dao;


import com.dbmsproject.feexpert.model.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class transactionDAOImpl implements transactionDAO{

    @Autowired
    JdbcTemplate jdbcTemplate;

    @Override
    public Transaction getReceipt(int studentId, int semesterId) {
        return jdbcTemplate.queryForObject("select * from transaction_details where studentId = ? and semesterId = ?", new Object[] {studentId,semesterId}, new BeanPropertyRowMapper<Transaction>(Transaction.class));
    }

    @Override
    public Transaction getReceiptByTransactionId(int transactionId) {
        return jdbcTemplate.queryForObject("select * from transaction_details where transactionId = ?", new Object[] {transactionId}, new BeanPropertyRowMapper<Transaction>(Transaction.class));
    }

    @Override
    public List<Transaction> viewTransactions(int studentId) {
        return jdbcTemplate.query("select * from transaction_details where studentId = ?",new Object[]{studentId}, new BeanPropertyRowMapper<Transaction>(Transaction.class));
    }

    @Override
    public int addTransaction(Transaction transaction) {
        return jdbcTemplate.update("insert into transaction_details values (?,?,?,?,?,?,?)", transaction.getStudentId(),transaction.getTransactionId(),transaction.getSemesterId(),transaction.getTransactonDate(),transaction.getPaymentMode(),transaction.getFeePaid(),transaction.getScholarship());
    }

    @Override
    public List<Transaction> getAll() {
        return jdbcTemplate.query("select * from transaction_details",new BeanPropertyRowMapper<Transaction>(Transaction.class));
    }
}
