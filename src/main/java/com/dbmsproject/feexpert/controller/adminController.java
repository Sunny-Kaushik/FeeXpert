package com.dbmsproject.feexpert.controller;

import com.dbmsproject.feexpert.dao.feeStructureDAO;
import com.dbmsproject.feexpert.dao.semesterDAO;
import com.dbmsproject.feexpert.dao.studentDAO;
import com.dbmsproject.feexpert.dao.transactionDAO;
import com.dbmsproject.feexpert.model.FeeStructure;
import com.dbmsproject.feexpert.model.Semester;
import com.dbmsproject.feexpert.model.Student;
import com.dbmsproject.feexpert.model.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class adminController {
    @Autowired
    studentDAO sDAO;
    @Autowired
    semesterDAO semDAO;
    @Autowired
    feeStructureDAO feeStructDAO;
    @Autowired
    transactionDAO transDAO;

    @GetMapping("/admin/login")
    public void showLogin() {;}

    @PostMapping("/admin/login")
    public boolean login(@RequestBody int userId,@RequestBody String password) {
        return false;
    }

    @GetMapping("/admin")
    public void showAdmin(){;}

    @GetMapping("/admin/students")
    public List<Student> getAllStudent() {
        return sDAO.getStudents();
    }

    @PostMapping("/admin/students")
    public int addStudent(@RequestBody Student student) {
        return sDAO.addStudent(student);
    }

    @GetMapping("/admin/addStudent")
    public void getAddStudentPage() {;}

    @GetMapping("/admin/students/{studentId}")
    public Student getStudentById(@PathVariable String studentId) {return null;}

    @PutMapping("/admin/students/{studentId}")
    public int updateStudentById(@RequestBody Student student, @PathVariable int studentId) {return sDAO.updateStudent(student,studentId);}

    @DeleteMapping("/admin/students/{studentId}")
    public int deleteStudentById(@PathVariable int studentId) {
        return sDAO.deleteStudent(studentId);
    }

    @GetMapping("/admin/students/pending")
    public List<Student> getStudentWithPendingFee() {return null;}

    @GetMapping("/admin/students/batch/{batchId}")
    public List<Student> getStudentByBatchId(@PathVariable String batchId) {return null;}

    @GetMapping("/admin/feeStructure")
    public List<FeeStructure> getAllFeeStructures() {return feeStructDAO.getFeeStructures();}

    @PostMapping("/admin/feeStructure")
    public int addFeeStructure(@RequestBody FeeStructure feeStructure) {return feeStructDAO.addFeeStructure(feeStructure);}

    @GetMapping("/admin/feeStructure/{batchId}")
    public FeeStructure getFeeStructureById(@PathVariable int batchId) {return feeStructDAO.getFeeStructureById(batchId);}

    @PutMapping("/admin/feeStructure/{batchId}")
    public int updateFeeStructure(@RequestBody FeeStructure feeStructure,@PathVariable int batchId) {
        return feeStructDAO.updateFeeStructure(batchId,feeStructure);
    }

    @GetMapping("/admin/students/scholarship")
    public List<Student> getStudentWithScholarship() {return sDAO.viewStudentWithScholarship();}

    @GetMapping("/admin/transactions")
    public List<Transaction> getAllTransactions() {return null;}

    @GetMapping("/admin/transactions/{transactionId}")
    public Transaction getTransactionByTransactionId(@PathVariable String transactionId) {return null;}

    @GetMapping("/admin/transactions/student/{studentId}")
    public List<Transaction> getTransactionsByStudentId(@PathVariable String studentId) {return null;}

    @GetMapping("/admin/semesters")
    public List<Semester> getSemesters() {return semDAO.getSemesterInfo();}

    @PostMapping("/admin/semesters")
    public int addSemester(@RequestBody Semester sem) {return semDAO.addSemesterInfo(sem);}

    @PutMapping("/admin/semesters/{batchId}")
    public int updateSemester(@RequestBody Semester sem,@PathVariable int batchId) {return semDAO.updateSemesterInfo(sem,batchId);}
}
