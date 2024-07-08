
import './App.css';
import Login from './Components/Login';
import Home from './Components/Home';
import AdminRegister from './Components/Register';
import StudentRegister from './Components/StudentRegister';
import { BrowserRouter as Router, Navigate,Route , Routes} from 'react-router-dom';
import AlumniList from './Components/AlumniList';
import Dashboard from './Components/Dashboard';
import Message from './Components/Message';
import AlumniLogin from './Components/AlumniLogin'
import UpdateAlumniRequest from './Components/UpdateAlumniRequest';
import UpdateAdminRequest from './Components/UpdateAdminRequest';
import About from './Components/About';
import { useAuthContext } from "./context/AuthContext";

function App() {
  const { authUser } = useAuthContext();
  return (
    <>
    <Router>
        <Routes>
        <Route path='/AlumniLogin' element={authUser ? <Navigate to='/' /> : <AlumniLogin />} />
        <Route path='/messages' element={ <Message/>} />
        <Route exact path='/' element={<Home/>}/>
         <Route exact path='/Admin_form' element={<Login/>}/>
         {/* <Route exact path='/AlumniLogin' element={<AlumniLogin/>}/> */}
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
 