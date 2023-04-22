package com.dbmsproject.feexpert.dao;

import com.dbmsproject.feexpert.model.Semester;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class semesterDAOImpl implements semesterDAO{
    @Autowired
    JdbcTemplate jdbcTemplate;

    @Override
    public int updateSemesterInfo(Semester sem, int semesterId) {
        return jdbcTemplate.update("update semester set startDate = ?, endDate = ? where semesterId = ?", sem.getStartDate(),sem.getEndDate(),semesterId);
    }

    @Override
    public int addSemesterInfo(Semester sem) {
        return jdbcTemplate.update("insert into semester values (?,?,?)", sem.getSemesterId(), sem.getStartDate(),sem.getEndDate());
    }

    @Override
    public List<Semester> getSemesterInfo() {
        return jdbcTemplate.query("select * from semester", new BeanPropertyRowMapper<Semester>(Semester.class));
    }
}
