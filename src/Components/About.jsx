import React from "react";
import Foot from "./Foot";
import Navbar from "./Navbar";
import AboutBuilding from '../images/AboutBuilding.jpeg';
import Image1 from '../images/firstImage.jpeg';
import Image2 from '../images/image2.jpg';
import Image3 from '../images/Prof__I_Manna_1.jpg';
import Image4 from '../images/Achievements.jpg';
import Image5 from '../images/Building.jpg';
import Image6 from '../images/poignee-de-mains-v2.jpg';

function About() {
    return (
        <>
            <Navbar />
            <div className="bg-gray-100 py-6">
                <div className="container mx-auto">
                    <div className="text-center">
                        <h6 className="text-xl font-semibold">
                            <span className="text-blue-500">
                                <span id="ContentNewsTicker_lbltitle">About Us</span>
                            </span>
                        </h6>
                    </div>
                </div>
            </div>

            <div className="container mx-auto py-8">
                <div className="bg-white p-6 shadow-lg rounded-lg">
                    <h5 className="text-2xl font-bold mb-4">
                        <label id="ContentMainContent_ctitle">About us</label>
                    </h5>
                    <div className="space-y-8">
                        <div className="flex flex-wrap">
                            <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
                                <img alt="About Building" className="w-full h-auto rounded" src={AboutBuilding} />
                            </div>
                            <div className="w-full lg:w-1/2 px-4">
                                <h3 className="text-xl font-semibold mb-4">Leading The Future</h3>
                                <p className="mb-4">An unquenchable thirst for innovation and disruption; a rich legacy of technology and entrepreneurship; and a commitment to nurturing leaders who make a difference to the world has been the credo of BIT Mesra in the nearly six decades of its existence.</p>
                                <p>It has many firsts to its credit. It was the first in the country to establish a department dedicated to Space Engineering & Rocketry way back in 1964. It was also the first to develop a Science & Technology Entrepreneurs’ Park (BIT-STEP), on campus to instill the spirit of entrepreneurship in its students. Today, it is a vibrant place, bustling with student activities and innovative teaching methods that make it home to thousands of aspiring leaders of tomorrow.</p>
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-4">
                            <div className="w-full lg:w-1/3 px-4 mb-8">
                                <div className="relative h-80">
                                    <div className="absolute inset-0 bg-slate-200 pt-10 opacity-0 hover:opacity-75 transition duration-300 ease-in-out flex justify-center items-center overflow-auto ">
                                        <div className="text-center text-black">
                                            <h3 className="text-lg font-bold mb-2">Institute Vision</h3>
                                            <p>To become a globally recognized academic institution in consonance with the social, economic and ecological environment, striving continuously for excellence in education, research and technological service to the national needs.</p>
                                            <h3 className="text-lg text-black font-bold mb-2">Institute Mission</h3>
                                            <p className="text-black">To educate students at Undergraduate, Post Graduate, Doctoral and Post Doctoral levels to perform challenging engineering and managerial jobs in industry</p>
                                            <p className="text-black">To provide excellent research and development facilities to take up Ph.D programmes and research projects</p>
                                            <p className="text-black">To develop effective teaching and learning skills and state-of-the-art research potential of the faculty</p>
                                            <p className="text-black">To build national capabilities in technology, education and research in emerging areas</p>
                                            <p className="text-black">To provide excellent technological services to satisfy the requirements of the industry and overall benefit to society</p>
                                        </div>
                                    </div>
                                    <img alt="Institute Vision" className="w-full h-full object-cover rounded" src={Image1} />
                                    <h2 className="text-center mt-2 font-semibold">Institute Vision</h2>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/3 px-4 mb-8">
                                <div className="relative h-80">
                                    <div className="absolute inset-0 bg-slate-200 pt-10 opacity-0 hover:opacity-75 transition duration-300 ease-in-out flex justify-center items-center overflow-auto p-4">
                                        <div className="text-center text-black">
                                            <p>An unquenchable thirst for innovation and disruption; a rich legacy of technology and entrepreneurship; and a commitment to nurturing leaders who make a difference to the world has been the credo of BIT Mesra in the nearly six decades of its existence.</p>
                                            <p>It has many firsts to its credit. It was the first in the country to establish a department dedicated to Space Engineering & Rocketry way back in 1964. It was also the first to develop a Science & Technology Entrepreneurs’ Park (BIT-STEP), on campus to instill the spirit of entrepreneurship in its students. Today, it is a vibrant place, bustling with student activities and innovative teaching methods that make it home to thousands of aspiring leaders of tomorrow.</p>
                                        </div>
                                    </div>
                                    <img alt="History" className="w-full h-full object-cover rounded" src={Image2} />
                                    <h2 className="text-center mt-2 font-semibold">History</h2>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/3 px-4 mb-8">
                                <div className="relative h-80">
                                    <div className="absolute inset-0 bg-slate-200 pt-4 opacity-0 hover:opacity-75 transition duration-300 ease-in-out flex justify-center items-center overflow-auto p-4">
                                        <div className="text-center text-black">
                                           <p>JOHAR! Welcome to the Birla Institute of Technology (BIT) Mesra, the second oldest Institute of Technology in independent India, founded in 1955 by the visionary industrialist and philanthropist Mr. B.M. Birla. BIT Mesra is located in Ranchi, the capital of the State of Jharkhand, the mineral hub and abode of serene beauty of natural forests, mountains and waterfalls.</p>
                                           <p>In more than six decades of its glorious existence, this Institute, recognized by the University Grants Commission (UGC) as a deemed to be University in 1986 under section 3 of the UGC Act 1956, has emerged as one of the top most self-financed or private Engineering Institution catering to both traditional engineering disciplines and emerging technological domains with firm foundation in fundamental sciences and orientation toward modern innovations and applications.</p>
                                           <p>We were the first in the nation to establish a Department of Space Engineering and Rocketry in 1964 equipped with static rocket test firing facility in association with the Indian Space Research Organization (ISRO) to augment the national space mission. BIT initiated the concept of small manufacturing enterprises in 1970 by establishing the Small Industries Research and Development Organization (SIRDO). Possibly this is the first example of Science and Technological Entrepreneurs Park (STEP) in the country subsequently conceptualized and established by the Government of India in several IITs.</p>
                                           <p>No wonder that India Today, the most widely circulated weekly magazine in India has recently rated BIT Mesra as the ‘second’ in the country wide ranking of Engineering Institutions in private category.</p>
                                           <p>The main campus of BIT in the outskirts of Ranchi at Mesra is spread over approximately 780 acres of a well laid out township with adequate civil infrastructure of buildings, metallic roads, parks and social amenities in the midst of a generous spread of lush green natural Sal forest located at the confluence of Subarnrekha and Jumar rivers. The iconic two-storied main building offers over 3 lakh square feet of covered area with approximately the same area available in other academic buildings around it making up the rest of the academic campus offering classrooms, faculty and administrative offices, seminar and conference halls, laboratories and workshops, and modern lecture theatres distributed among the Departments and centres.</p>
                                           <p>The Mesra campus consists of 14 student hostels to accommodate over 4500 students and scholars, family housing for over 500 faculty and staff members, a commercial complex and multiple shopping centres, a primary health centre, a dedicated 33 kVA electrical sub-station, and a modern water filtration plant to supply drinking water. The campus is secured with natural and constructed boundary equipped with digital surveillance and security patrolling. The sports complex of the institute spreads over 25 acres of land being used every day by the students and staff for physical training, games and sports and various extracurricular activities. The sports complex consists of a standard athletic track along with badminton hall, multi-gym facility, volleyball and basketball court, hockey ground, football field, kabaddi court, netball court, kho-kho field, cricket stadium, lawn tennis court, gymnasium hall and recess centre.</p>
                                        </div>
                                    </div>
                                    <img alt="Director's Message" className="w-full h-full object-cover rounded" src={Image3} />
                                    <h2 className="text-center mt-2 font-semibold">Director's Message</h2>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-4">
                            <div className="w-full lg:w-1/3 px-4 mb-8">
                                <div className="relative h-80">
                                    <div className="absolute inset-0 bg-slate-200 pt-4 opacity-0 hover:opacity-75 transition duration-300 ease-in-out flex justify-center items-center overflow-auto ">
                                        <div className="text-center text-black">
                                            <h3 className="text-lg font-bold mb-2">Governance</h3>
                                            <table className="w-full text-sm text-left text-white">
                                                <thead className="text-xs uppercase bg-gray-700">
                                                    <tr>
                                                        <th scope="col" className="px-6 py-3">Name</th>
                                                        <th scope="col" className="px-6 py-3">Position</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr className="bg-gray-800">
                                                        <td className="px-6 py-4">Mr. B. M. Birla</td>
                                                        <td className="px-6 py-4">Founder</td>
                                                    </tr>
                                                    <tr className="bg-gray-700">
                                                        <td className="px-6 py-4">Dr. I. Manna</td>
                                                        <td className="px-6 py-4">Vice Chancellor</td>
                                                    </tr>
                                                    <tr className="bg-gray-800">
                                                        <td className="px-6 py-4">Prof. R. N. Gupta</td>
                                                        <td className="px-6 py-4">Registrar</td>
                                                    </tr>
                                                    <tr className="bg-gray-700">
                                                        <td className="px-6 py-4">Prof. N. Roy</td>
                                                        <td className="px-6 py-4">Dean, R&D</td>
                                                    </tr>
                                                    <tr className="bg-gray-800">
                                                        <td className="px-6 py-4">Prof. P. K. Mishra</td>
                                                        <td className="px-6 py-4">Dean, Academics</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <img alt="Governance" className="w-full h-full object-cover rounded" src={Image4} />
                                    <h2 className="text-center mt-2 font-semibold">Governance</h2>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/3 px-4 mb-8">
                                <div className="relative h-80">
                                    <div className="absolute inset-0 bg-slate-200 pt-4 opacity-0 hover:opacity-75 transition duration-300 ease-in-out flex justify-center items-center overflow-auto ">
                                        <div className="text-center text-black">
                                            <p>An unquenchable thirst for innovation and disruption; a rich legacy of technology and entrepreneurship; and a commitment to nurturing leaders who make a difference to the world has been the credo of BIT Mesra in the nearly six decades of its existence.</p>
                                            <p>It has many firsts to its credit. It was the first in the country to establish a department dedicated to Space Engineering & Rocketry way back in 1964. It was also the first to develop a Science & Technology Entrepreneurs’ Park (BIT-STEP), on campus to instill the spirit of entrepreneurship in its students. Today, it is a vibrant place, bustling with student activities and innovative teaching methods that make it home to thousands of aspiring leaders of tomorrow.</p>
                                        </div>
                                    </div>
                                    <img alt="History" className="w-full h-full object-cover rounded" src={Image5} />
                                    <h2 className="text-center mt-2 font-semibold">History</h2>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/3 px-4 mb-8">
                                <div className="relative h-80">
                                    <div className="absolute inset-0 bg-slate-200 opacity-0 p-1 hover:opacity-75 transition duration-300 ease-in-out flex justify-center items-center overflow-auto p-4">
                                        <div className="text-center text-black">
                                            <h3 className="text-lg font-bold mb-2">Partnerships</h3>
                                            <p>BIT Mesra has developed extensive partnerships with various national and international organizations to provide students with the best opportunities in research and development.</p>
                                            <p>Our partners include top universities, research institutes, and corporations across the globe, enabling our students to engage in cutting-edge research and gain valuable industry experience.</p>
                                        </div>
                                    </div>
                                    <img alt="Partnerships" className="w-full h-full object-cover rounded" src={Image6} />
                                    <h2 className="text-center mt-2 font-semibold">Partnerships</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Foot />
        </>
    );
}

export default About;
