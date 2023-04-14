package com.dbmsproject.feexpert.dao;

import com.dbmsproject.feexpert.model.Semester;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class semesterDAOImpl implements semesterDAO{
    @Autowired
    JdbcTemplate jdbcTemplate;

    @Override
    public int updateSemesterInfo(Semester sem, String semesterId) {
        return 0;
    }
}
