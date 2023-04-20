import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function UpdateForm() {
    const navigate = useNavigate();
    const [studentData, setStudentData] = useState({
        studentId: "",
        studentName: "",
        studentBatch: "",
        address: "",
        contact: "",
        semid: "",
        scholarship: "",
    });

    // To modify the student data whenever some data is filled in the form.
    const handleChange = (e) => {
        const { name, value } = e.target;
        setStudentData((prevData) => ({ ...prevData, [name]: value }));
    };

    //Handles the sending request and receiving response part of submit event.
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("In handle submit");
        const sendPost = async () => {
            try {
                const response = await axios.post("http://localhost:8080/addStudent", studentData);
                console.log(response);
                console.log("No error");
                processResponse(response);
            } catch (error) {
                console.error(error);
            }
        };
        await sendPost();
    };

    // Handles redirecting based on the response.
    function processResponse(response) {
        if (response.data) {
            navigate("/admin/adminHome");
        } else {
            navigate("/error");
        }
    }

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Update Student</h1>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label htmlFor="studentId" className="form-label text-left">
                            Student ID
                        </label>
                        <input
                            type="number"
                            className="form-control"
                            id="studentId"
                            name="studentId"
                            value={studentData.studentId}
                            onChange={handleChange}
                            placeholder="Enter student ID"
                            required
                        />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="studentName" className="form-label">
                            Student Name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="studentName"
                            name="studentName"
                            value={studentData.studentName}
                            onChange={handleChange}
                            placeholder="Enter student name"
                            required
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label htmlFor="studentBatch" className="form-label">
                            Student Batch
                        </label>
                        <input
                            type="number"
                            className="form-control"
                            id="studentBatch"
                            name="studentBatch"
                            value={studentData.studentBatch}
                            onChange={handleChange}
                            placeholder="Enter student batch"
                            required
                        />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="address" className="form-label">
                            Address
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="address"
                            name="address"
                            value={studentData.address}
                            onChange={handleChange}
                            placeholder="Enter student address"
                            required
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label htmlFor="contact" className="form-label">
                            Contact
                        </label>
                        <input
                            type="number"
                            className="form-control"
                            id="contact"
                            name="contact"
                            value={studentData.contact}
                            onChange={handleChange}
                            placeholder="Enter student contact number"
                            required
                        />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="semid" className="form-label">
                            Semester ID
                        </label>
                        <input
                            type="number"
                            className="form-control"
                            id="semid"
                            name="semid"
                            value={studentData.semid}
                            onChange={handleChange}
                            placeholder="Enter student's semester ID"
                            required
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label htmlFor="scholarship" className="form-label">
                        Scholarship
                        </label>
                        <input
                            type="number"
                            className="form-control"
                            id="scholarship"
                            name="scholarship"
                            value={studentData.scholarship}
                            onChange={handleChange}
                            placeholder="Enter scholarship"
                            required
                        />
                    </div>
                </div>
            </form>
        </div>
    );
};
        
export default UpdateForm;