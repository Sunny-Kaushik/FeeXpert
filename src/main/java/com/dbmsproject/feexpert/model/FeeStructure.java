package com.dbmsproject.feexpert.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class FeeStructure {
    private String batchId;

    private int tuitionFee;

    private int hostelFee;

    private int messFee;
}
