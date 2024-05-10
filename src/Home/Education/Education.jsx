import SectionTitle from "../../Shared/SectionTitle/SectionTitle";


const Education = () => {
    return (
        <section id="education">
            {/* <SectionTitle heading={"My Education"}></SectionTitle> */}

            <div className="hero mx-auto  text-center my-12">
                <h3 className="text-3xl uppercase mx-auto w-1/3 border-y-4 py-4 z-[0]">My Education</h3>
            </div>


            <ul className="timeline timeline-vertical">
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



        </section>
    );
};

export default Education;