
import './App.css';
import Login from './Components/Login';
import Home from './Components/Home';
import AdminRegister from './Components/Register';
import StudentRegister from './Components/StudentRegister';
import { BrowserRouter as Router, Route , Routes} from 'react-router-dom';
import AlumniList from './Components/AlumniList';
import Dashboard from './Components/Dashboard';
import UpdateAlumniRequest from './Components/UpdateAlumniRequest';
import UpdateAdminRequest from './Components/UpdateAdminRequest';
import About from './Components/About';

function App() {
  return (
    <>
    <Router>
        <Routes>
        <Route exact path='/' element={<Home/>}/>
         <Route exact path='/Admin_form' element={<Login/>}/>
         <Route exact path='/AdminRegister' element={<AdminRegister/>}/>  
         <Route path='/StudentRegister' element={<StudentRegister/>}/>
         <Route path='/StudentList' element={<AlumniList/>}/>
         <Route path='/Dashboard' element={<Dashboard/>}/>
         <Route path='/updateAlumniRequest' element={<UpdateAlumniRequest/>}/>
         <Route path='/updateAdminRequest' element={<UpdateAdminRequest/>}/>
         <Route path='/About' element={<About/>}/>
        </Routes>
        </Router>
    </>
  );
}

export default App;
 