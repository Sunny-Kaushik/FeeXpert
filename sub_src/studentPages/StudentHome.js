function StudentHome() {
    return (
        <div className="container mt-5">
            <h1>Welcome to Student Portal</h1>
            <ul className="list-group mt-4">
                <li className="list-group-item">
                    <h4>Info</h4>
                    <p>View your personal information</p>
                    <a href="#" className="btn btn-primary">Go</a>
                </li>
                <li className="list-group-item">
                    <h4>Transaction Info</h4>
                    <p>View your transaction details</p>
                    <a href="#" className="btn btn-primary">Go</a>
                </li>
                <li className="list-group-item">
                    <h4>Pay Fees</h4>
                    <p>Pay your fees here</p>
                    <a href="pay.html" className="btn btn-primary">Go</a>
                </li>
                <li className="list-group-item">
                    <h4>Print Receipts</h4>
                    <p>Print your payment receipts</p>
                    <a href="#" className="btn btn-primary">Go</a>
                </li>
            </ul>
        </div>
    );
};

export default StudentHome;