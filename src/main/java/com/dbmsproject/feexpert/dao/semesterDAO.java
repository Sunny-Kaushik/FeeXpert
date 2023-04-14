package com.dbmsproject.feexpert.dao;

import com.dbmsproject.feexpert.model.Semester;
import org.springframework.stereotype.Repository;


public interface semesterDAO {

    public int updateSemesterInfo(Semester sem, String semesterId);

}
