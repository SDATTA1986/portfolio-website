import { FaCalendar, FaCertificate, FaDownload } from "react-icons/fa6";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import img from '../../assets/Self Image.jpeg'
import { HiBuildingOffice2 } from "react-icons/hi2";
import ExamplePdf from '../../assets/Resume_SOURAV DATTA.pdf'

const AboutMe = () => {
    return (
        <section id="about">
            <SectionTitle heading={"About Me"}></SectionTitle>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row ">
                    <img src={img} className="w-1/2 rounded-lg shadow-2xl" />
                    <div className="w-1/2 pl-4">

                        <p className="pt-6 pb-16">Hi, I'm <strong>SOURAV DATTA</strong>[M.Tech(C.U)], a passionate and detail-oriented web developer on a mission to craft immersive and functional online experiences. With a strong foundation in HTML, CSS, and JavaScript, I bring creativity and technical expertise to every project I undertake.<br /><br></br>

                            I thrive in the dynamic world of web development, where my love for clean code meets my commitment to user-centric design. My journey began with a fascination for turning lines of code into visually stunning and responsive websites. Since then, I've honed my skills in front-end development, delving into frameworks like React and mastering the art of crafting seamless user interfaces.</p>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 text-center mb-8">
                            <div>
                                <FaCalendar className="text-xl inline-block mb-2"></FaCalendar>
                                <h1 className="text-6xl">0.6<small>+</small></h1>
                                <p>
                                    Years<br /> Experience
                                </p>
                            </div>
                            <div>
                                <FaCertificate className="text-xl inline-block mb-2 text-red-500"></FaCertificate>
                                <h1 className="text-6xl">02<small>+</small></h1>
                                <p>
                                    Completed<br /> Certifications
                                </p>
                            </div>
                            <div>
                                <HiBuildingOffice2 className="text-xl inline-block mb-2 " />

                                <h1 className="text-6xl">00<small>+</small></h1>
                                <p>
                                    Companies<br /> Worked
                                </p>
                            </div>
                        </div>
                        {/* <div className="stats shadow">

                            <div className="stat">
                                <div className="stat-figure text-secondary">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                </div>
                                <div className="stat-title">Downloads</div>
                                <div className="stat-value">31K</div>
                                <div className="stat-desc">Jan 1st - Feb 1st</div>
                            </div>

                            <div className="stat">
                                <div className="stat-figure text-secondary">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                                </div>
                                <div className="stat-title">New Users</div>
                                <div className="stat-value">4,200</div>
                                <div className="stat-desc">↗︎ 400 (22%)</div>
                            </div>

                            <div className="stat">
                                <div className="stat-figure text-secondary">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
                                </div>
                                <div className="stat-title">New Registers</div>
                                <div className="stat-value">1,200</div>
                                <div className="stat-desc">↘︎ 90 (14%)</div>
                            </div>

                        </div> */}
                        <a href={ExamplePdf} download="Resume_SOURAV DATTA" target="_blank" rel="noreferrer" className="btn bg-green-200">Download Resume<FaDownload /></a>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutMe;