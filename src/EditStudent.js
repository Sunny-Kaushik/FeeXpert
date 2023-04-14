function EditStudent() {
    return (
        <div>
            <div class="container mt-5">
                <div class="row">
                    <div class="col-xl-6">
                        <h2>Add Student Form</h2>
                        <form>
                            <div class="form-group">
                                <label htmlFor="studentId">Student ID:</label>
                                <input type="text" class="form-control" id="studentId" name="studentId" required />
                            </div>
                            <div class="form-group">
                                <label htmlFor="password">Password:</label>
                                <input type="password" class="form-control" id="password" name="password" required />
                            </div>
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                    </div>

                    <div class="col-xl-6">
                        <h2>Delete Student Form</h2>
                        <form>
                            <div class="form-group">
                                <label htmlFor="studentId">Student ID:</label>
                                <input type="text" class="form-control" id="studentId" name="studentId" required />
                            </div>
                            <button type="submit" class="btn btn-danger">Delete</button>
                        </form>
                    </div>
                </div>
            </div>

            <div class="container mt-5">
                <h1 class="text-center mb-4">Update Student</h1>
                <form>
                    <div className="row">
                        <div class="col-md-6 mb-3">
                            <label htmlFor="studentId" class="form-label text-left">Student ID</label>
                            <input type="text" class="form-control" id="studentId" name="studentId"
                                placeholder="Enter student ID" />
                        </div>
                        <div class="col-md-6 mb-3">
                            <label htmlFor="studentName" class="form-label">Student Name</label>
                            <input type="text" class="form-control" id="studentName" name="studentName"
                                placeholder="Enter student name" />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <label htmlFor="studentBatch" class="form-label">Student Batch</label>
                            <input type="text" class="form-control" id="studentBatch" name="studentBatch"
                                placeholder="Enter student batch" />
                        </div>
                        <div class="col-md-6 mb-3">
                            <label htmlFor="address" class="form-label">Address</label>
                            <input type="text" class="form-control" id="address" name="address"
                                placeholder="Enter student address" />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <label htmlFor="contact" class="form-label">Contact</label>
                            <input type="text" class="form-control" id="contact" name="contact"
                                placeholder="Enter student contact" />
                        </div>
                        <div class="col-md-6 mb-3">
                            <label htmlFor="semid" class="form-label">Semester ID</label>
                            <input type="text" class="form-control" id="semid" name="semid" placeholder="Enter semester ID" />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <label htmlFor="scholarship" class="form-label">Scholarship</label>
                            <input type="text" class="form-control" id="scholarship" name="scholarship"
                                placeholder="Enter scholarship details" />
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary">Update</button>
                </form>
            </div>
        </div>
    );
}

export default EditStudent;