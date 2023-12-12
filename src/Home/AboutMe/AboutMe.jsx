import { FaCalendar, FaCertificate, FaDownload } from "react-icons/fa6";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import img from '../../assets/Self Image.jpeg'
import { HiBuildingOffice2 } from "react-icons/hi2";
import ExamplePdf from '../../assets/1.pdf'

const AboutMe = () => {
    return (
        <div>
            <SectionTitle heading={"About Me"}></SectionTitle>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row ">
                    <img src={img} className="w-1/2 rounded-lg shadow-2xl" />
                    <div className="w-1/2 pl-4">

                        <p className="pt-6 pb-16">Hi, I'm <strong>SOURAV DATTA</strong>[M.Tech(C.U)], a passionate and detail-oriented web developer on a mission to craft immersive and functional online experiences. With a strong foundation in HTML, CSS, and JavaScript, I bring creativity and technical expertise to every project I undertake.<br/><br></br>

                            I thrive in the dynamic world of web development, where my love for clean code meets my commitment to user-centric design. My journey began with a fascination for turning lines of code into visually stunning and responsive websites. Since then, I've honed my skills in front-end development, delving into frameworks like React and mastering the art of crafting seamless user interfaces.</p>
                        <div className="grid grid-cols-3 gap-4 text-center mb-8">
                            <div>
                                <FaCalendar className="text-xl inline-block mb-2"></FaCalendar>
                                <h1 className="text-6xl">0.6<small>+</small></h1>
                                <p>
                                    Years<br/> Experience
                                </p>
                            </div>
                            <div>
                                <FaCertificate className="text-xl inline-block mb-2 text-red-500"></FaCertificate>
                                <h1 className="text-6xl">02<small>+</small></h1>
                                <p>
                                    Completed<br/> Certifications
                                </p>
                            </div>
                            <div>
                                <HiBuildingOffice2 className="text-xl inline-block mb-2 "/>
                                   
                                <h1 className="text-6xl">00<small>+</small></h1>
                                <p>
                                    Companies<br/> Worked
                                </p>
                            </div>
                        </div>
                        <a href={ExamplePdf} download="Example-PDF-document" target="_blank" rel="noreferrer" className="btn bg-green-200">Download Resume<FaDownload /></a>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default AboutMe;