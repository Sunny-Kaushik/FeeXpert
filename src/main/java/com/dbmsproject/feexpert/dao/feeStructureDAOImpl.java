package com.dbmsproject.feexpert.dao;

import com.dbmsproject.feexpert.model.FeeStructure;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class feeStructureDAOImpl implements feeStructureDAO{

    @Autowired
    JdbcTemplate jdbcTemplate;

    @Override
    public int getTotalFee(String batchId) {
        FeeStructure feeStructure = jdbcTemplate.queryForObject("select * from feestructure where batchId = ?", new Object[] {batchId}, new BeanPropertyRowMapper<FeeStructure>(FeeStructure.class));
        return feeStructure.getHostelFee() + feeStructure.getMessFee() + feeStructure.getTuitionFee();
    }

    @Override
    public List<FeeStructure> getFeeStructures() {
        return jdbcTemplate.query("select * from feestructure", new BeanPropertyRowMapper<FeeStructure>(FeeStructure.class));
    }

    @Override
    public FeeStructure getFeeStructureById(int batchId) {
        return jdbcTemplate.queryForObject("select * from feestructure where batchId = ?", new Object[] {batchId}, new BeanPropertyRowMapper<FeeStructure>(FeeStructure.class));
    }

    @Override
    public int updateFeeStructure(int id, FeeStructure feeStructure) {
        return jdbcTemplate.update("update feestructure set tuitionFee = ?, hostelFee = ?, messFee = ? where batchId = ?",feeStructure.getTuitionFee(),feeStructure.getHostelFee(),feeStructure.getMessFee(), id);
    }

    @Override
    public int addFeeStructure(FeeStructure feeStructure) {
        return jdbcTemplate.update("insert into feestructure values (?,?,?,?)",feeStructure.getBatchId(),feeStructure.getTuitionFee(),feeStructure.getHostelFee(),feeStructure.getMessFee());
    }
}
