function Transaction() {
    return (

        <div class="container mt-5">
            <div class="row">
                <div class="col-md-12">
                    <div class="management-heading">Transaction Management</div>
                    <div class="form-box">
                        <h2>Using Transaction ID</h2>
                        <form>
                            <div class="form-group">
                                <label htmlFor="transactionID">Transaction ID</label>
                                <input type="text" class="form-control" id="transactionID" placeholder="Enter transaction ID" required />
                            </div>
                            <button type="submit" class="btn btn-dark btn-block">Get Transaction</button>
                        </form>
                    </div>
                    <div class="form-box">
                        <h2>Using Student ID</h2>
                        <form>
                            <div class="form-group">
                                <label htmlFor="studentID">Student ID</label>
                                <input type="text" class="form-control" id="studentID" placeholder="Enter student ID" required />
                            </div>
                            <button type="submit" class="btn btn-dark btn-block">Get Transaction</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Transaction;