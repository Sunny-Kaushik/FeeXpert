package com.dbmsproject.feexpert.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Transaction {
    private String studentId;

    private String semesterId;

    private int paymentMode;

    private String transactionId;

    private Date transactonDate;

    private int feePaid;

    private int scholarship;
}
