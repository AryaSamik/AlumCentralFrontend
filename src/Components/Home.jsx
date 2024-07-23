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
    <button className='bg-blue-500 text-white font-bold  py-6 px-7 text-xl rounded-full relative overflow-hidden group'>
      <Link to="/StudentList" className='block relative z-10'>
        AlumniList
      </Link>
      <span className='absolute inset-0 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 transition duration-500 ease-out animate-pulse'></span>
    </button>
        {(authUser || authAdmin) ? <></> : <button className='bg-blue-300 p-7   rounded-xl font-bold text-black'><Link to='/StudentRegister'>Click Here to Create Your Profile</Link></button>}
      </div>
      <div className="bg-gray-100 p-8  rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
        Notable Alumni
      </h2>
      <CustomSlider />
    </div>
      
      <Foot/>
     </div>
    
  )
}

export default Home
