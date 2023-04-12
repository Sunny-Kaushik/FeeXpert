function UserHome() {

    return (
        <div className="container-flex">
            <nav className="navbar navbar-expand-md navbar-light bg-light">
                <a href="#" className="navbar-brand">INFO</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav align-items-center">
                        <li className="nav-item">
                            <a href="#" className="nav-link">Pay fees</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">Reciepts</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">Pending</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">Total fees</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">Scholarships</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default UserHome;