package com.dbmsproject.feexpert.dao;

import com.dbmsproject.feexpert.model.FeeStructure;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class feeStructureDAOImpl implements feeStructureDAO{

    @Autowired
    JdbcTemplate jdbcTemplate;

    @Override
    public int getTotalFee(String batchId) {
        return 0;
    }

    @Override
    public int updateFeeStructure(int id, FeeStructure feeStructure) {
        return 0;
    }
}
