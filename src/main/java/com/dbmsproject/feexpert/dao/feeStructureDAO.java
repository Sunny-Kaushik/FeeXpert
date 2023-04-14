package com.dbmsproject.feexpert.dao;

import com.dbmsproject.feexpert.model.FeeStructure;

public interface feeStructureDAO {
    public int getTotalFee(String batchId);

    public int updateFeeStructure(int id, FeeStructure feeStructure);
}
