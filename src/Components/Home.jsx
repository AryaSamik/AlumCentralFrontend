import React from 'react'
import "./home.css"
import Navbar from './Navbar' 
import BitAlmuniImg from './BitAlmuniImg'
import Foot from './Foot'
import CustomSlider from './CustomSlider'
import { Link } from 'react-router-dom'
import { useAuthContext } from '../context/AuthContext'
import { useAuthAdminContext } from '../context/AuthAdminContext'
function Home() {
  const {authUser} = useAuthContext();
  const {authAdmin} = useAuthAdminContext();
  return (
    <div className=' mx-auto'>
    <Navbar/>
    <BitAlmuniImg/>
    <div className=" px-5 py-5 font-serif text-xl message text-center" style={{color:'black'}}>
    "Welcome to AlumCentral, where past meets future. Here, our esteemed alumni share their journeys, insights, and expertise to guide you in your own path. Connect, learn, and grow with us as you build a brighter future, 
    inspired by those who have been in your shoes."      </div>

    
    <div className="button_list mt-3">
        <button className='bg-blue-300 p-7  font-bold rounded-xl  text-black'><Link to="/StudentList">AlumniList</Link></button>
        {(authUser || authAdmin) ? <></> : <button className='bg-blue-300 p-7   rounded-xl font-bold text-black'><Link to='/StudentRegister'>Click Here to Create Your Profile</Link></button>}
      </div>
      <CustomSlider/>
      <Foot/>
     </div>
    
  )
}

export default Home
