import { useState, useEffect } from 'react';
import axios from 'axios';

function AdminHome() {
  const [students, setStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8080/api/students')
      .then(response => setStudents(response.data))
      .catch(error => console.error(error));
  }, []);

  const filteredStudents = students.filter(student => {
    return student.id.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Student List</h1>
      <div className="row mb-3">
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="Search by ID"
            value={searchTerm}
            onChange={event => setSearchTerm(event.target.value)}
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="card">
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-striped">
                  <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Batch</th>
                        <th>Address</th>
                        <th>Contact</th>
                        <th>Semester</th>
                        <th>Scholarship</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredStudents.map(student => (
                      <tr key={student.id}>
                        <td>{student.id}</td>
                        <td>{student.name}</td>
                        <td>{student.batch}</td>
                        <td>{student.address}</td>
                        <td>{student.contact}</td>
                        <td>{student.semester}</td>
                        <td>{student.scholarship}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminHome;
