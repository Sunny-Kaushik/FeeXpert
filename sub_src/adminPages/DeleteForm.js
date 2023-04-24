import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function DeleteForm() {
    const navigate = useNavigate();
    const [deleteId, setDeleteId] = useState("");


    // To modify the deleteId whenever some data is filled in the form.
    const handleChange = (e) => {
        const { name, value } = e.target;
        setDeleteId(value);
    };

    
    //Handles the sending request and recieving response part of submit event.
    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log("In handle submit");
        const sendPost = async () => {
            try {
              const response = await axios.post("http://localhost:8080/", deleteId);
              console.log(response);
              console.log("No error");
            } catch (error) {
                console.error(error);
            }
        }
        await sendPost();
    };


    // Handles redirecting based on the response.
    function processResponse(response) {
        if (response.data) { navigate("/admin/adminHome"); }
        else { navigate("/error"); }
    }

    return (
        <div className="container mt-5">
            <h2>Delete Student</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="studentId">Student ID:</label>
                    <input
                        type="text"
                        className="form-control"
                        value={deleteId}
                        onChange={handleChange}
                        id="studentId"
                        name="studentId"
                        required
                    />
                </div>
                <button type="submit" className="btn btn-danger">
                    Delete
                </button>
            </form>
        </div>
    );
}

export default DeleteForm;
