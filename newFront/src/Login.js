import axios from "axios";
import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    
    const navigate = useNavigate();

    const forUser = "User",forAdmin = "Admin";
    const [loginAs, setLoginAs] = useState(forAdmin);
    
    // formdata stores the structure of the data being sent to the server.
    const [formData, setFormData] = useState({
        user: {
            username: "",
            password: ""
        },
        userType: forUser
    });
    

    // Manages the userType. Will be triggered when the button for changing the userType is pressed.
    const logerHandler = (e) => {
        if (loginAs === forAdmin) { 
            setFormData({...formData, userType: forAdmin});
            setLoginAs(forUser); 
        }
        else {
            setFormData({...formData, userType: forUser});
            setLoginAs(forAdmin);
        }
    }


    // To modify the formData whenever some data is filled in the form.
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            user: {
                ...prevState.user,
                [name]: value
            }
        }));
    };


    //Handles the submit event when the form is submitted.
    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log("In handle  submit");
        const sendPost = async () => {
            try {
              const response = await axios.post("http://localhost:8080/", formData);
              console.log(response);
              console.log("No error");
              processResponse(response);
            } catch (error) {
                console.error(error);
            }
        }
        
        await sendPost();
    };

    
    // Handles redirecting based on the response.
    function processResponse(response) {
        if (response.data) {
            if (loginAs == "Admin") { navigate("/student/studentHome"); }
            else { navigate("/admin/adminHome"); }
        }
        else {
            navigate("/error");
        }
    }
    
    
    return (
        <div className="Login mt-5">
            <div className="container" id="login_container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header d-flex justify-content-between align-items-center">
                                <h4 className="d-inline">Login</h4>
                                <a href="#" type="button" className="btn text-primary d-flex" onClick={logerHandler}>login as {loginAs}</a>
                            </div>
                            <div className="card-body">
                                <form onSubmit={handleSubmit} >
                                    <div className="form-group">
                                        <label htmlFor="username" className="form-label">Username:</label>
                                        <input type="text" name="username" value={formData.user.username} onChange={handleChange} className="form-control" id="username" placeholder="Enter username" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password" className="form-label">Password:</label>
                                        <input type="password" name="password" value={formData.user.password} onChange={handleChange} className="form-control" id="password" placeholder="Enter password" />
                                    </div>
                                    <button type="submit" className="btn mt-1 bg-primary">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <footer className="text-secondary text-center" id="footer">
                powered by feeXpert
            </footer>
        </div>
    );
}

export default Login;