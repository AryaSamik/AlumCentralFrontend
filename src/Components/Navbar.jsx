
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import LogoName from '../images/Birla_Institute_of_Technology_Mesra.png';
import useLogout from '../hooks/useLogout';
import { useAuthAdminContext } from '../context/AuthAdminContext';
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { authUser} = useAuthContext();
  const navigate = useNavigate();
  const { logout } = useLogout();
  const {authAdmin} = useAuthAdminContext();
  const handleLogout =  () => {
   logout();
    navigate('/');
  };

  return (
    <>
      <nav className="w-full bg-purple-700 text-white flex items-center justify-between p-4">
        <div className="flex items-center gap-2">
          <img src={LogoName} alt="logo" className="w-20" />
          <h2 className="text-lg font-bold">Birla Institute of Technology</h2>
        </div>
        <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <button className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
        <div className="hidden md:flex md:items-center md:w-auto w-full">
          <div className="flex flex-col md:flex-row md:gap-4">
            <Link to="/" className="block md:inline-block p-2">Home</Link>
            <Link to="/About" className="block md:inline-block p-2">About</Link>
            {(authUser || authAdmin) ? (
              <>
                {(authAdmin)?(<Link to='/Dashboard' className="block p-2">Dashboard</Link>):(<Link to="/messages" className="block md:inline-block p-2">Messages</Link>)}
                <button onClick={handleLogout} className="bg-white text-purple-700 px-4 py-2 rounded">Logout</button>
                <div className="flex items-center gap-2">
                  <img src={authUser ? authUser.user.image : (authAdmin ? authAdmin.image : "")} alt="user" className="w-8 h-8 rounded-full" />
                  <span>{authUser ? authUser.user.name : (authAdmin ? authAdmin.name+" (Admin)" : "")}</span>
                </div>
              </>
            ) : (
              <>
                <Link to="/AlumniLogin" className="block md:inline-block p-2">
                  <button className="bg-white text-purple-700 px-4 py-2 rounded">User Login</button>
                </Link>
                <Link to="/Admin_form" className="block md:inline-block p-2">
                  <button className="bg-white text-purple-700 px-4 py-2 rounded">Admin Login</button>
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
      {isOpen && (
        <div className="bg-purple-700 text-white w-full flex flex-col items-center md:hidden">
          <Link to="/" className="block p-2">Home</Link>
          <Link to="/About" className="block p-2">About</Link>
          {(authUser || authAdmin) ? (
            <>
            {(authAdmin)?(<Link to='/Dashboard' className="block p-2">Dashboard</Link>):(<Link to="/messages" className="block md:inline-block p-2">Messages</Link>)}
              <button onClick={handleLogout} className="bg-white text-purple-700 px-4 py-2 rounded">Logout</button>
              <div className="flex items-center gap-2 p-2">
                <img src={authUser ? authUser.user.image : (authAdmin ? authAdmin.image : "")} alt="user" className="w-8 h-8 rounded-full" />
                <span>{authUser ? authUser.user.name : (authAdmin ? authAdmin.name+" (Admin)" : "")}</span>
              </div>
            </>
          ) : (
            <>
              <Link to="/AlumniLogin" className="block p-2">
                <button className="bg-white text-purple-700 px-4 py-2 rounded">User Login</button>
              </Link>
              <Link to="/Admin_form" className="block p-2">
                <button className="bg-white text-purple-700 px-4 py-2 rounded">Admin Login</button>
              </Link>
            </>
          )}
        </div>
      )}
    </>
  );
}

export default Navbar;
