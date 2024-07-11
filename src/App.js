
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
import { useAuthAdminContext } from './context/AuthAdminContext';
import NotFound from './Components/NotFound';

function App() {
  const { authUser } = useAuthContext();
  const { authAdmin } = useAuthAdminContext();
  return (
    <>
    <Router>
        <Routes>
        <Route path='/AlumniLogin' element={authUser ? <Navigate to='/' /> : <AlumniLogin />} />
        <Route path='/messages' element={authUser ? <Message/> : <Navigate to='/AlumniLogin' /> } />
        <Route exact path='/' element={<Home/>}/>
         <Route exact path='/Admin_form' element={authAdmin ? <Navigate to='/' /> : <Login/>}/>
         {/* <Route exact path='/AlumniLogin' element={<AlumniLogin/>}/> */}
         <Route exact path='/AdminRegister' element={authUser ? <Navigate to='/'/> : <AdminRegister/>}/>  
         <Route path='/StudentRegister' element={authUser ? <Navigate to='/'/> : <StudentRegister/>}/>
         <Route path='/StudentList' element={<AlumniList/>}/>
         <Route path='/Dashboard' element={authAdmin ? <Dashboard/> : <Navigate to='/' />}/>
         <Route path='/updateAlumniRequest' element={ authAdmin ? <UpdateAlumniRequest/> : <Navigate to='/'/> }/>
         <Route path='/updateAdminRequest' element={ authAdmin ? <UpdateAdminRequest/> : <Navigate to='/'/> }/>
         <Route path='/About' element={<About/>}/>
         <Route path='*' element={<NotFound/>}/>
        </Routes>
        </Router>
    </>
  );
}

export default App;
 