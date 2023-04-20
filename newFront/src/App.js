import AdminNav from './adminPages/AdminNav';
import EditStudent from './adminPages/EditStudent';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminHome from './adminPages/AdminHome';
import FeeStructure from './adminPages/FeeStructure';
import Scholarship from './adminPages/Scholarship';
import Transaction from './adminPages/Transaction';
import StudentHome from './studentPages/StudentHome';
import AddStudentForm from './adminPages/AddStudentForm';
import AddForm from './adminPages/AddFom';
import UpdateForm from './adminPages/UpdateFrom';
import DeleteForm from './adminPages/DeleteForm';
import Login from './Login';
import Error from './Error';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/admin/login" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/error" element={<Error />} />
          <Route path="/student/login" element={<Login />} />

          <Route path="/admin/*" element={ <>
              <AdminNav />
              <Routes>
                <Route path="/editStudent" element={
                  <>
                  <DeleteForm/>
                  <AddForm/>
                  <UpdateForm/>
                </>
              } />
                <Route path="/adminHome" element={<AdminHome />} />
                <Route path="/feeStructure" element={<FeeStructure />} />
                <Route path="/scholarship" element={<Scholarship />} />
                <Route path="/transaction" element={<Transaction />} />
              </Routes>
          </>} />

          <Route path="/student/*" element={ <>
              <Routes>
                <Route path="/studentHome" element={<StudentHome />} />
              </Routes>
          </>} />

          <Route exact path="/" element={<Login />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;