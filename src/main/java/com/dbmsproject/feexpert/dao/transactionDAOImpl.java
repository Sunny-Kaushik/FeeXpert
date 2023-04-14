package com.dbmsproject.feexpert.dao;


import com.dbmsproject.feexpert.model.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class transactionDAOImpl implements transactionDAO{

    @Autowired
    JdbcTemplate jdbcTemplate;

    @Override
    public Transaction getReceipt(String studentId) {
        return null;
    }

    @Override
    public List<Transaction> viewTransactions(String studentId) {
        return null;
    }

    @Override
    public int payFee(Transaction transactions) {
        return 0;
    }

    @Override
    public List<Transaction> getAll() {
        return null;
    }
}
