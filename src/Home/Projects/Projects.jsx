// import petProject from "../../assets/pet project.png"

// const Projects = () => {
//     return (
//         <section id="projects">
//             {/* <SectionTitle heading={"My Experience"}></SectionTitle> */}
//             <div className="hero mx-auto  text-center my-12">
//                 <h3 className="text-3xl uppercase mx-auto w-1/3 border-y-4 py-4 z-[0]">My Projects</h3>
//             </div>

//             <div className="grid md:grid-cols-2 grid-cols-1 gap-4 ml-4 mr-4">
//                 <div className="card w-full text-black bg-white ">
//                 <figure><img src={petProject} alt="Shoes" /></figure>
//                     <div className="card-body">
//                         <h2 className="card-title">Telecom Enginner</h2>
//                         <p>I worked as telecom engineer for 14 years  </p>

//                     </div>
//                 </div>
//                 <div className="card w-full text-black bg-white ">
//                 <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
//                     <div className="card-body">
//                         <h2 className="card-title">Web Developer</h2>
//                         <p>I completed different types of projects under Programming Hero </p>

//                     </div>
//                 </div>

//             </div>
//         </section>
//     );
// };

// export default Projects;


import { useState } from "react";
import petProject from "../../assets/pet project.png";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import libraryProject from "../../assets/library management project.png"
import AOS from "aos";
AOS.init();
import "aos/dist/aos.css";

const Projects = () => {
    const [hovered, setHovered] = useState(false);

    return (
        <section id="projects">
            <div className="hero mx-auto text-center my-12">
                <h3 className="text-3xl uppercase mx-auto w-1/3 border-y-4 py-4 z-[0]">My Projects</h3>
            </div>

            <div className="grid md:grid-cols-2 grid-cols-1 gap-4 ml-4 mr-4">
                <div 
                    
                    className="card w-full text-black bg-white"
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                    style={{ position: "relative", overflow: "hidden" }}
                >
                    <div
                        style={{
                            width: "100%",
                            height: "350px", // Fixed height for thumbnail
                            overflow: "hidden",
                        }}
                    >
                        <img
                            src={petProject}
                            alt="Pet Project"
                            style={{
                                width: "100%",
                                height: "auto",
                                transform: hovered ? "translateY(-50%)" : "translateY(0)",
                                transition: "transform 0.5s ease",
                            }}

                        />
                    </div>
                    <div className="card-body ">
                        <h2 className="card-title text-3xl mx-auto">Pet Adoption Website</h2>
                        <p>A pet adoption website serves as a vital platform connecting prospective pet owners with animals in need of loving homes. Through intuitive user interfaces, visitors can browse a diverse range of animals, including dogs, cats, rabbits, and more, each accompanied by detailed profiles highlighting their personalities, needs, and backgrounds. These platforms often facilitate seamless adoption processes, providing information on adoption requirements, fees, and procedures. Additionally, they may offer resources on pet care, training tips, and community forums for new pet owners. Ultimately, pet adoption websites play a crucial role in promoting animal welfare, facilitating compassionate connections, and enriching lives on both ends of the adoption process.</p>
                    </div>
                    <div className="flex items-center mx-auto gap-2 ">
                        <div className="btn bg-[#0d47a1] mb-10 text-white hover:bg-blue-700"><a rel="noopener noreferrer"
                            href="https://tiny-smakager-4e350f.netlify.app/"
                            target="_blank">Live Site</a><span><FaExternalLinkAlt /></span></div>
                        <div className="btn bg-[#0d47a1] hover:bg-blue-700 mb-10 text-white"><a rel="noopener noreferrer"
                            href="https://github.com/SDATTA1986/pet-adoption-client-side"
                            target="_blank">Client Code</a><span className="text-xl"><FaCode /> </span></div>
                        <div className="btn bg-[#0d47a1] hover:bg-blue-700 mb-10 text-white"><a rel="noopener noreferrer"
                            href="https://github.com/programming-hero-web-course1/b8a12-server-side-SDATTA1986"
                            target="_blank">Server Code</a><span className="text-xl"><FaCode /> </span></div>
                    </div>
                </div>

                {/* Add other projects here */}


                <div 
                    // data-aos-offset="300"
                    // data-aos-easing="ease-in-sine"
                    className="card w-full text-black bg-white"
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                    style={{ position: "relative", overflow: "hidden" }}
                >
                    <div
                        style={{
                            width: "100%",
                            height: "350px", // Fixed height for thumbnail
                            overflow: "hidden",
                        }}
                    >
                        <img
                            src={libraryProject}
                            alt="Pet Project"
                            style={{
                                width: "100%",
                                height: "auto",
                                transform: hovered ? "translateY(-50%)" : "translateY(0)",
                                transition: "transform 0.5s ease",
                            }}
                        />
                    </div>
                    <div className="card-body ">
                        <h2 className="card-title text-3xl mx-auto">Library Management Website</h2>
                        <p>A library management website serves as a comprehensive digital solution for organizing, tracking, and accessing library resources efficiently. Users can browse catalogs, search for books, and check availability remotely, enhancing accessibility. Features like user accounts enable borrowing, renewals, and reservations, streamlining administrative tasks. Librarians can manage inventory, track lending history, and generate reports for analysis and decision-making. Integration with barcode systems and RFID technology ensures accurate inventory management. Additionally, these platforms often offer digital collections, e-books, and multimedia resources, catering to diverse user needs. Ultimately, library management websites promote effective resource utilization, foster learning, and support lifelong education.</p>
                    </div>
                    <div className="flex items-center mx-auto gap-2 ">
                        <div className="btn bg-[#0d47a1] mb-10 text-white hover:bg-blue-700"><a rel="noopener noreferrer"
                            href="https://sage-cocada-3c6974.netlify.app/"
                            target="_blank">Live Site</a><span><FaExternalLinkAlt /></span></div>
                        <div className="btn bg-[#0d47a1] hover:bg-blue-700 mb-10 text-white"><a rel="noopener noreferrer"
                            href="https://github.com/SDATTA1986/library-management-client-side"
                            target="_blank">Client Code</a><span className="text-xl"><FaCode /> </span></div>
                        <div className="btn bg-[#0d47a1] hover:bg-blue-700 mb-10 text-white"><a rel="noopener noreferrer"
                            href="https://github.com/SDATTA1986/library-management-server-side"
                            target="_blank">Server Code</a><span className="text-xl"><FaCode /> </span></div>
                    </div>
                </div>


            </div>
        </section>
    );
};

export default Projects;
