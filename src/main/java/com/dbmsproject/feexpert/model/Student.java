package com.dbmsproject.feexpert.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Student extends User{
    private String studentId;

    private String studentName;

    private String batch;

    private String address;

    private int contact;

    private String semesterId;

    private int Scholarship;
}
