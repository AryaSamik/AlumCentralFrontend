import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAlumni } from '../features/alumni/alumniSlice';
import { fetchAdmin } from '../features/admin/adminSlice';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Foot from './Foot';
import { HiArrowLeft } from 'react-icons/hi2';

const Dashboard = () => {
  const dispatch = useDispatch();
  const { alumni  } = useSelector((state) => state.alumni);
  const { admin } = useSelector((state) => state.admin);

  const verifiedAlumni = alumni.filter((alumnus) => alumnus.verified).length;
  const notVerifiedAlumni = alumni.length - verifiedAlumni;

  const verifiedAdmin = admin.filter((admin) => admin.verified).length;
  const notVerifiedAdmin = admin.length - verifiedAdmin;

  useEffect(() => {
    dispatch(fetchAlumni());
    dispatch(fetchAdmin());
  }, [dispatch]);

  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <main className="w-full">
        <div>
          <button onClick={() => {navigate(-1)}} className='relative float-left text-3xl top-1 left-5'><HiArrowLeft/></button>
          <h1 className='text-3xl flex justify-center mt-5 mb-3'><span>Admin Dashboard</span></h1>
        </div>
        <div className="edit pannel flex flex-col lg:flex-row gap-4 justify-center">
          <Link to="/updateAlumniRequest" className="w-full lg:w-[350px]">
            <div className="AlumniRequest bg-blue-200 p-4 m-5 text-center rounded-md">
              <p className="font-bold">No. of Alumni Request</p>
              <h2>{notVerifiedAlumni}</h2>
              <br />
              <div>
                <button>Tap to see</button>
              </div>
            </div>
          </Link>
          <Link to="/updateAdminRequest" className="w-full lg:w-[300px]">
            <div className="AdminRequest bg-green-200 p-4 m-5 text-center rounded-md">
              <p className="font-bold">No. of Admin Request</p>
              <h1>{notVerifiedAdmin}</h1>
              <br />
              <div>
                <button>Tap to see</button>
              </div>
            </div>
          </Link>
        </div>
        <div className="AdminList mt-4 p-5">
          <label>No. of Admins of this website: {verifiedAdmin}</label>
          <table className="w-full border border-black mt-2">
            <thead>
              <tr>
                <th className="border border-black p-2">Name</th>
                <th className="border border-black p-2">Email</th>
                <th className="border border-black p-2">Image</th>
              </tr>
            </thead>
            <tbody>
              {admin
                .filter((admin) => admin.verified)
                .map((admin, index) => (
                  <tr key={index} className="border border-black">
                    <td className="border border-black p-2">{admin.name}</td>
                    <td className="border border-black p-2">{admin.email}</td>
                    <td className="border border-black p-2">
                      <img src={admin.image} alt={admin.name} style={{ width: '50px', height: '50px' }} />
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        <div className="some_Alumni mt-4 p-5">
          <label>Some Verified Alumni: {verifiedAlumni}</label>
          <table className="w-full border border-black mt-2">
            <thead>
              <tr>
                <th className="border border-black p-2">Name</th>
                <th className="border border-black p-2">Roll No</th>
                <th className="border border-black p-2">Image</th>
              </tr>
            </thead>
            <tbody>
              {alumni
                .filter((alumnus) => alumnus.verified)
                .slice(0, 5)
                .map((alumnus, index) => (
                  <tr key={index} className="border border-black">
                    <td className="border border-black p-2">{alumnus.name}</td>
                    <td className="border border-black p-2">{alumnus.bitRollno}</td> {/* Assuming bitRollno is the field name */}
                    <td className="border border-black p-2">
                      <img src={alumnus.image} alt={alumnus.name} style={{ width: '50px', height: '50px' }} />
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
           <div className="flex items-end my-5">
     <Link to="/StudentList">
        <button className='border-black bg-yellow-400 text-xl text-black rounded p-5 '>See all alumni</button>
               </Link>
</div>
        </div>
      </main>
      <Foot />
    </>
  );
};

export default Dashboard;
