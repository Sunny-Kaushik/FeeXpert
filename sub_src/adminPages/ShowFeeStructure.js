import { useState, useEffect } from 'react';
import axios from 'axios';

function ShowFeeStructure() {
  const [students, setStudents] = useState([]);
  const [structures, setStructures] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredStudents, setFilteredStudents] = useState([]);


  useEffect(() => {
    axios.get('http://localhost:8080/admin/feeStructure')
      .then(response => {
        setStructures(response.data);
      })
      .catch(error => console.error(error));
  }, []);


  const handleFilter = async() => {
    axios.get("http://localhost:8080/admin/feeStructure/{batchId}")
    .then(response => {
        setFilteredStudents(response.data);
    })
    .catch(error => console.error(error));
  };

  const handleReset = () => {
    setFilteredStudents(students);
    setSearchTerm('');
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Fee structure list</h1>
      <div className="row mb-3">
        <div className="col">
          <div className="input-group">
            <input
              type="number"
              className="form-control"
              placeholder="Search by ID"
              value={searchTerm}
              onChange={event => setSearchTerm(event.target.value)}
            />
            
            <div class="btn-group" role="group" aria-label="Basic example">
              <button className="btn btn-primary" onClick={handleFilter}> Go </button>
              <button className="btn btn-secondary" onClick={handleReset} > Reset </button>
            </div>

          </div>
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
                      <th>BatchId</th>
                      <th>Tuition fee</th>
                      <th>Hostel fee</th>
                      <th>Mess fee</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredStudents.map(structure => (
                      <tr key={structure.batchId}>
                        <td>{student.batchId}</td>
                        <td>{student.tuitionFee}</td>
                        <td>{student.hostelFee}</td>
                        <td>{student.messFee}</td>
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

export default ShowFeeStructure;
