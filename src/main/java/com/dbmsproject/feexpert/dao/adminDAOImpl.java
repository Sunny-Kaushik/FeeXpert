package com.dbmsproject.feexpert.dao;

import com.dbmsproject.feexpert.model.Admin;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class adminDAOImpl implements adminDAO{
    @Autowired
    JdbcTemplate jdbcTemplate;

    @Override
    public boolean checkAdminPassword(int userId, String password) {
        Admin admin = jdbcTemplate.queryForObject("select * from admin where userId = ?", new Object[] {userId}, new BeanPropertyRowMapper<Admin>(Admin.class));
        if (admin.getPassword().equals(password)) {
            return true;
        }
        else {
            return false;
        }
    }
}
