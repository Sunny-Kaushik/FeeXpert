function Scholarship() {
    return (

        <div class="container mt-5">
            <div class="row">
                <div class="col-md-12">
                    <div class="management-heading bg-dark">Student Scholarship Management</div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <div class="form-box">
                        <h2 class="form-heading bg-secondary">Get Student with Scholarship</h2>
                        <form>
                            <div class="form-group">
                                <label htmlFor="scholarshipType">Scholarship Type</label>
                                <select class="form-control" id="scholarshipType" required>
                                    <option value="" selected disabled>Select Scholarship Type</option>
                                    <option value="merit">Merit-based Scholarship</option>
                                    <option value="need">Need-based Scholarship</option>
                                </select>
                            </div>
                            <button type="submit" class="btn btn-primary btn-block">Get Student with Scholarship</button>
                        </form>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <div class="form-box">
                        <h2 class="form-heading bg-secondary">Provide Scholarship to Student</h2>
                        <form>
                            <div class="form-group">
                                <label htmlFor="studentName">Student Name</label>
                                <input type="text" class="form-control" id="studentName" placeholder="Enter student name" required />
                            </div>
                            <div class="form-group">
                                <label htmlFor="scholarshipTypeProvide">Scholarship Type</label>
                                <select class="form-control" id="scholarshipTypeProvide" required>
                                    <option value="" selected disabled>Select Scholarship Type</option>
                                    <option value="merit">Merit-based Scholarship</option>
                                    <option value="need">Need-based Scholarship</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label htmlFor="scholarshipAmount">Scholarship Amount</label>
                                <input type="number" class="form-control" id="scholarshipAmount"
                                    placeholder="Enter scholarship amount required" />
                            </div>
                            <button type="submit" class="btn btn-success btn-block bg-">Provide Scholarship</button>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Scholarship;