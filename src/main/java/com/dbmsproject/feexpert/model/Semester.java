package com.dbmsproject.feexpert.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Semester {
    private String semesterId;

    private Date startTime;

    private Date endTime;

}
