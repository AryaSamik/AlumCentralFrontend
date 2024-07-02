import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAlumni } from '../features/alumni/alumniSlice';

const AlumniCards = () => {
  const dispatch = useDispatch();
  const alumni = useSelector((state) => state.alumni.alumni);
  const alumniStatus = useSelector((state) => state.alumni.status);
  const error = useSelector((state) => state.alumni.error);

  const [filteredAlumni, setFilteredAlumni] = useState([]);
  const [searchName, setSearchName] = useState('');
  const [searchGraduationYear, setSearchGraduationYear] = useState('');
  const [searchBranch, setSearchBranch] = useState('');
  const [searchCompany, setSearchCompany] = useState('');

  useEffect(() => {
    if (alumniStatus === 'idle') {
      dispatch(fetchAlumni());
    }
  }, [alumniStatus, dispatch]);

  useEffect(() => {
    const filtered = alumni.filter((person) => {
      return (
        (searchName === '' || person.name.toLowerCase().includes(searchName.toLowerCase())) &&
        (searchGraduationYear === '' || person.graduationYear === parseInt(searchGraduationYear)) &&
        (searchBranch === '' || person.branch.toLowerCase().includes(searchBranch.toLowerCase())) &&
        (searchCompany === '' || person.company.toLowerCase().includes(searchCompany.toLowerCase()))
      );
    });
    setFilteredAlumni(filtered);
  }, [searchName, searchGraduationYear, searchBranch, searchCompany, alumni]);

  return (
    <div className="container mx-auto p-4">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by name"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
          className="border p-2 m-2"
        />
        <input
          type="text"
          placeholder="Search by year of graduation"
          value={searchGraduationYear}
          onChange={(e) => setSearchGraduationYear(e.target.value)}
          className="border p-2 m-2"
        />
        <input
          type="text"
          placeholder="Search by branch"
          value={searchBranch}
          onChange={(e) => setSearchBranch(e.target.value)}
          className="border p-2 m-2"
        />
        <input
          type="text"
          placeholder="Search by company"
          value={searchCompany}
          onChange={(e) => setSearchCompany(e.target.value)}
          className="border p-2 m-2"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 border-black lg:grid-cols-3 gap-6">
        {alumniStatus === 'loading' && <p>Loading...</p>}
        {alumniStatus === 'failed' && <p>{error}</p>}
        {alumniStatus === 'succeeded' &&
          filteredAlumni.map((person, index) => (
            <div
              key={index}
              className="bg-white shadow-md border-2 border-black rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <img
                src={person.image}
                alt={person.name}
                className="w-full h-auto object-cover rounded-t-lg"
                style={{ maxHeight: '500px' }} // Set a max height to limit excessive stretching
              />
              <div className="p-4">
                <h5 className="text-xl font-bold">{person.name}</h5>
                {person.designation && person.company && (
                  <>
                    <p className="text-gray-700">
                      {person.designation} at {person.company}
                    </p>
                    <p className="text-gray-700">{person.branch}</p>
                    <p className="text-gray-700 text-sm">
                      Admission Year: {person.admissionYear}
                    </p>
                    <p className="text-gray-700 text-sm">
                      Graduation Year: {person.graduationYear}
                    </p>
                    <p className="text-gray-600">{person.tools}</p>
                  </>
                )}
                {!person.designation && !person.company && (
                  <>
                    <p className="text-gray-700">{person.branch}</p>
                    <p className="text-gray-700 text-sm">
                      Admission Year: {person.admissionYear}
                    </p>
                    <p className="text-gray-700 text-sm">
                      Graduation Year: {person.graduationYear}
                    </p>
                    <p className="text-gray-600">{person.tools}</p>
                  </>
                )}
                <p className="text-gray-600">{person.message}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default AlumniCards;
