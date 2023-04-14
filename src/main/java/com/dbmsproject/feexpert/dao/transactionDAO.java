package com.dbmsproject.feexpert.dao;

import com.dbmsproject.feexpert.model.Transaction;
import org.springframework.stereotype.Repository;

import java.util.List;


public interface transactionDAO {
    public Transaction getReceipt(String studentId);

    public List<Transaction> viewTransactions(String studentId);

    public int payFee(Transaction transactions);

    public List<Transaction> getAll();
}
