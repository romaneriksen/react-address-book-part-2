import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import Dashboard from './components/Dashboard';
import Contact from './components/Contact';
import CreateContact from './components/CreateContact';
import UpdateContact from './components/UpdateContact';

function App() {
    return (
    <>
     <nav>
          <Link to="/">Dashboard</Link>{" "}
        </nav>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/view/:id" element={<Contact />} />
          <Route path="/createcontact" element={<CreateContact />} />
          <Route path="/updatecontact/:id" element={<UpdateContact />} />
      </Routes>
    </>
    );
}

export default App;
