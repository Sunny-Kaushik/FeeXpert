import './App.css';
import AdminNav from './AdminNav';
import EditStudent from './EditStudent';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminHome from './AdminHome';
import FeeStructure from './FeeStructure';
import Scholarship from './Scholarship';
import Transaction from './Transaction';

function App() {
  return (
    <Router>
      <div className="App">
        <AdminNav />
        <Routes>
          <Route path="/admin/editStudent" element={ <EditStudent />} />
        </Routes>
        <Routes>
          <Route path="/admin/adminHome" element={ <AdminHome />} />
        </Routes>
        <Routes>
          <Route path="/admin/feeStructure" element={ <FeeStructure />} />
        </Routes>
        <Routes>
          <Route path="/admin/scholarship" element={ <Scholarship />} />
        </Routes>
        <Routes>
          <Route path="/admin/transaction" element={ <Transaction />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;