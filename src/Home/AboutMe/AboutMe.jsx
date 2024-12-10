// import { FaCalendar, FaCertificate, FaDownload } from "react-icons/fa6";
// import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
// import img from '../../assets/aboutme.jpg'
// import { HiBuildingOffice2 } from "react-icons/hi2";
// import ExamplePdf from '../../assets/Resume_SOURAV DATTA.pdf'

// const AboutMe = () => {
//     return (
//         <section id="about">
//             {/* <SectionTitle  heading={"About Me"}></SectionTitle> */}

//             <div className="hero mx-auto  text-center my-12">
            
//             <h3 className="text-3xl uppercase mx-auto w-1/3 border-y-4 py-4 z-[0]">About Me</h3>
//         </div>
        

//             <div className="hero">
//                 <div className="hero-content flex-col lg:flex-row items-center ">
//                     <img src={img} className="w-1/2 rounded-lg shadow-2xl " />
//                     <div className="w-1/2 pl-4">

//                         <p className="pt-6 pb-16">Hi, I'm <strong>SOURAV DATTA</strong>[M.Tech(C.U)], a passionate and detail-oriented web developer on a mission to craft immersive and functional online experiences. With a strong foundation in HTML, CSS, and JavaScript, I bring creativity and technical expertise to every project I undertake.<br /><br></br>

//                             I thrive in the dynamic world of web development, where my love for clean code meets my commitment to user-centric design. My journey began with a fascination for turning lines of code into visually stunning and responsive websites. Since then, I've honed my skills in front-end development, delving into frameworks like React and mastering the art of crafting seamless user interfaces.</p>
//                         <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 text-center mb-8">
//                             <div>
//                                 <FaCalendar className="text-xl inline-block mb-2 text-green-500"></FaCalendar>
//                                 <h1 className="text-6xl">0.6<small>+</small></h1>
//                                 <p>
//                                     Years<br /> Experience
//                                 </p>
//                             </div>
//                             <div>
//                                 <FaCertificate className="text-xl inline-block mb-2 text-green-500"></FaCertificate>
//                                 <h1 className="text-6xl">02<small>+</small></h1>
//                                 <p>
//                                     Completed<br /> Certifications
//                                 </p>
//                             </div>
//                             <div>
//                                 <HiBuildingOffice2 className="text-xl inline-block mb-2 text-green-500 " />

//                                 <h1 className="text-6xl">00<small>+</small></h1>
//                                 <p>
//                                     Companies<br /> Worked
//                                 </p>
//                             </div>
//                         </div>
//                         {/* <div className="stats shadow">

//                             <div className="stat">
//                                 <div className="stat-figure text-secondary">
//                                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
//                                 </div>
//                                 <div className="stat-title">Downloads</div>
//                                 <div className="stat-value">31K</div>
//                                 <div className="stat-desc">Jan 1st - Feb 1st</div>
//                             </div>

//                             <div className="stat">
//                                 <div className="stat-figure text-secondary">
//                                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
//                                 </div>
//                                 <div className="stat-title">New Users</div>
//                                 <div className="stat-value">4,200</div>
//                                 <div className="stat-desc">↗︎ 400 (22%)</div>
//                             </div>

//                             <div className="stat">
//                                 <div className="stat-figure text-secondary">
//                                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
//                                 </div>
//                                 <div className="stat-title">New Registers</div>
//                                 <div className="stat-value">1,200</div>
//                                 <div className="stat-desc">↘︎ 90 (14%)</div>
//                             </div>

//                         </div> */}
//                         <a href={ExamplePdf} download="Resume_SOURAV DATTA" target="_blank" rel="noreferrer" className="btn bg-green-200">Download Resume<FaDownload /></a>
//                     </div>

//                 </div>
//             </div>
//         </section>
//     );
// };

// export default AboutMe;




import  { useState, useEffect } from 'react';
import { FaCalendar, FaCertificate, FaDownload , } from "react-icons/fa6";
import { MdOutlinePageview } from "react-icons/md";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import img from '../../assets/aboutme.jpg'
import { HiBuildingOffice2 } from "react-icons/hi2";
import ExamplePdf from '../../assets/Resume_SOURAV DATTA.pdf'
import AOS from "aos";
AOS.init();
import "aos/dist/aos.css";

const AboutMe = () => {
    const [pageView, setPageView] = useState(0);

    const [completedProjects, setCompletedProjects] = useState(0);

    const [countExperience, setCountExperience] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            if (pageView < 100) {
                setPageView(prevCount => prevCount + 1);
            } else {
                clearInterval(timer);
            }
        }, 150); // Increment every second until it reaches 2

        return () => clearInterval(timer);
    }, [pageView]);

    useEffect(() => {
        const timer = setInterval(() => {
            if (completedProjects < 12) {
                setCompletedProjects(prevCount => prevCount + 1);
            } else {
                clearInterval(timer);
            }
        }, 500); // Increment every second until it reaches 2

        return () => clearInterval(timer);
    }, [completedProjects]);


    useEffect(() => {
        const timer = setInterval(() => {
            if (countExperience < 6) {
                setCountExperience(prevCount => prevCount + 1);
            } else {
                clearInterval(timer);
            }
        }, 500); // Increment every second until it reaches 2

        return () => clearInterval(timer);
    }, [countExperience]);

    // const VisitorCounter = () => {
        const [visits, setVisits] = useState(0);
    
        useEffect(() => {
            const storedVisits = localStorage.getItem("visits");
            if (storedVisits) {
                setVisits(Number(storedVisits) + 1);
            } else {
                setVisits(1);
            }
            localStorage.setItem("visits", visits + 1);
        }, [visits]);
    // }

    return (
        <section id="about">
            <div className="hero mx-auto  text-center my-12">
                <h3 className="text-3xl uppercase mx-auto w-1/3 border-y-4 py-4 z-[0]">About Me</h3>
            </div>

            <div className="hero">
                <div className="hero-content flex-col-reverse lg:flex-row items-center ">



                    {/* <img src={img} className="lg:w-1/2 rounded-lg shadow-2xl w-[400px] h-[400px]" /> */}

                    
                    <ul className="timeline timeline-vertical">
                    <h5 className='text-4xl sm:ml-[50px] md:ml-60 mb-2 sm:mt-20 md:mt-0 mx-auto'>My Education</h5>
                    <div >
                    <hr className='w-1/2 mx-auto mb-20 '></hr>
                    </div>
                    
                <li>
                    <div className="timeline-start ">2010</div>
                    <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-white"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    </div>
                    <div className="timeline-end timeline-box bg-white text-black">
                        <p className="text-2xl  font-medium">M.Tech-Optics </p>
                        <p className="text-xl">University of Calcutta</p>
                    </div>
                    <hr className="bg-white"/>
                </li>
                <li>
                    <hr className="bg-white"/>
                    <div className="timeline-end ">2008</div>
                    <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-white"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    </div>
                    <div className="timeline-start timeline-box bg-white text-black">
                        <p className="text-2xl  font-medium">B.tech-Electronics</p>
                        <p className="text-xl">West Bengal University of Technology</p>
                    </div>
                    <hr className="bg-white"/>
                </li>
                <li>
                    <hr className="bg-white" />
                    <div className="timeline-start ">2004</div>
                    <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-white"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    </div>
                    <div className="timeline-end timeline-box bg-white text-black">
                        <p className="text-2xl  font-medium">Higher Secondary</p>
                        <p className="text-xl">West Bengal Council of Higher Secondary Education</p>
                    </div>
                    <hr className="bg-white"/>
                </li>
                <li>
                    <hr className="bg-white"/>
                    <div className="timeline-end ">2002</div>
                    <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-white"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    </div>
                    <div className="timeline-start timeline-box bg-white text-black">
                        <p className="text-2xl  font-medium">Secondary</p>
                        <p className="text-xl">West Bengal Board of Secondary Education</p>
                    </div>
                    
                </li>
                
                
                
            </ul>


            


                    <div className="w-1/2 pl-4 ">
                        <p className="pt-6 pb-16 text-xl ">Hi, I'm <strong>SOURAV DATTA</strong>, a passionate and detail-oriented web developer on a mission to craft immersive and functional online experiences. With a strong foundation in HTML, CSS, and JavaScript, I bring creativity and technical expertise to every project I undertake.<br /><br></br>

                            I thrive in the dynamic world of web development, where my love for clean code meets my commitment to user-centric design. My journey began with a fascination for turning lines of code into visually stunning and responsive websites. Since then, I've honed my skills in front-end development, delving into frameworks like React and mastering the art of crafting seamless user interfaces.</p>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 text-center mb-8">
                            <div>
                                <FaCalendar className="text-xl inline-block mb-2 text-green-500"></FaCalendar>
                                <h1 className="text-6xl">0.<span>{countExperience}</span><small>+</small></h1>
                                <p>
                                    Years<br /> Experience
                                </p>
                            </div>
                            <div>
                            <MdOutlinePageview className="text-xl inline-block mb-2 text-green-500"></MdOutlinePageview>
                                {/* <h1 className="text-6xl">{pageView}<small>+</small></h1> */}
                                <h1 className="text-6xl">{visits}<small>+</small></h1>
                                <p>
                                   Page Visitors
                                </p>
                            </div>
                            <div>
                                <HiBuildingOffice2 className="text-xl inline-block mb-2 text-green-500 " />

                                <h1 className="text-6xl">{completedProjects}<small>+</small></h1>
                                <p>
                                    Projects<br />Completed
                                </p>
                            </div>
                        </div>
                        <a href={ExamplePdf} download="Resume_SOURAV DATTA" target="_blank" rel="noreferrer" className="btn bg-white">Download Resume<FaDownload /></a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
