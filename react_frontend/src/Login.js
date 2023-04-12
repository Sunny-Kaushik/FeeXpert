import { useState, useMemo } from "react";

function Login() {

    const forUser = "User";
    const forAdmin = "Admin";
    const [loginAs, setLoginAs] = useState(forAdmin);

    const logerHandler = () => {
        if (loginAs == forAdmin) { setLoginAs(forUser); }
        else { setLoginAs(forAdmin); }
        setFormData({...formData, user: loginAs});
    }


    const [formData, setFormData] = useState({
        admin: {
            username: "",
            password: ""
        },
        user: loginAs,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            admin: {
                ...prevState.admin,
                [name]: value
            }
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log(formData);
            const response = await fetch("http://localhost:8080/", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            console.log(formData);
            console.log(response);
            if (response.ok) {
                const data = await response.json(); // parse the JSON data
                console.log(data); // log the parsed JSON data to the console
                console.log("good");
            } else {
                console.log("bad");
            }
        } catch (error) {
            console.error(error);
        }
    };


    return (
        <div className="Login">
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
                                        <input type="text" name="username" value={formData.admin.username} onChange={handleChange} className="form-control" id="username" placeholder="Enter username" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password" className="form-label">Password:</label>
                                        <input type="password" name="password" value={formData.admin.password} onChange={handleChange} className="form-control" id="password" placeholder="Enter password" />
                                    </div>
                                    <button type="submit" className="btn mt-1 bg-custom-color">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <footer className="text-secondary" id="footer">
                powered by feeXpert
            </footer>
        </div>
    );
}

export default Login;