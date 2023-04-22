package com.dbmsproject.feexpert.dao;

import com.dbmsproject.feexpert.model.FeeStructure;

import java.util.List;

public interface feeStructureDAO {
    public int getTotalFee(String batchId);
    public List<FeeStructure> getFeeStructures();
    public FeeStructure getFeeStructureById(int batchId);
    public int updateFeeStructure(int id, FeeStructure feeStructure);
    public int addFeeStructure(FeeStructure feeStructure);
}
