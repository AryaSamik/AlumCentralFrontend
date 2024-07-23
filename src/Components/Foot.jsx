import React from 'react';
import LogoName from '../images/Birla_Institute_of_Technology_Mesra.png';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub } from "react-icons/fa";


function Foot() {
    return (
        <div className="bg-blue-600 text-white py-8">
            <div className="container mx-auto flex flex-wrap justify-between items-center text-center md:text-left">
                <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
                    <img src={LogoName} alt="logo" className="h-16 w-16 mb-2" />
                    <h4 className="text-lg font-bold">Department of Computer Science</h4>
                    <p>Birla Institue of Technology,Ranchi</p>
                </div>
                <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-4 md:mb-0">
                    <div>
                        <ul className="space-y-2">
                            <li><a href="#/" className="hover:text-gray-300">Notice</a></li>
                            <li><a href="#/" className="hover:text-gray-300">Events</a></li>
                            <li><a href="#/library" className="hover:text-gray-300">Library</a></li>
                            <li><a href="#/gallery" className="hover:text-gray-300">Gallery</a></li>
                            <li><a href="#/contact" className="hover:text-gray-300">Contact</a></li>
                            <li><a href="#/about" className="hover:text-gray-300">About</a></li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col items-center md:items-start">
                    <div className="mapouter w-full">
                        <div className="gmap_canvas w-full h-48">
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3661.333698677276!2d85.43503007800219!3d23.41230984729636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4fb53f0c27be7%3A0x66180c1cf3c5e704!2sBirla%20Institute%20of%20Technology%20-%20Mesra!5e0!3m2!1sen!2sin!4v1704727855800!5m2!1sen!2sin" 
                                allowFullScreen="" 
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade"
                                className="w-full h-full"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-blue-700 text-center py-4 mt-4">
                <span><div className="font-bold hover:text-gray-300">AlumCentral</div></span>
                Developed By:
                <div>
                    <div className='flex flex-col items-center'>
                        <span>Siddharth Kumar</span>
                        <div className='flex'>
                            <span className='mt-1 text-lg mx-1.5'><Link to="https://www.linkedin.com/in/siddharth-kumar-ba4191249/"><FaLinkedin /></Link></span>
                            <span className='mt-1 text-lg mx-1.5'><Link to='https://github.com/siddharthkumarrrrr'><FaGithub /></Link></span>
                        </div>
                    </div>
                    <div className='flex flex-col items-center'>
                        <span>Arya Samik</span>
                        <div className='flex'>
                            <span className='mt-1 text-lg mx-1.5'><Link to="https://www.linkedin.com/in/aryasamik/"><FaLinkedin /></Link></span>
                            <span className='mt-1 text-lg mx-1.5'><Link to='https://github.com/aryasamik'><FaGithub /></Link></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Foot;
