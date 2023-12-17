import SectionTitle from "../../Shared/SectionTitle/SectionTitle";


const Education = () => {
    return (
        <section id="education">
            <SectionTitle heading={"My Education"}></SectionTitle>

            <ul className="timeline timeline-vertical">
                <li>
                    <div className="timeline-start ">2022</div>
                    <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-green-500"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    </div>
                    <div className="timeline-end timeline-box bg-green-200">
                        <p className="text-2xl  font-medium">M.Tech-Optics</p>
                        <p className="text-xl">University of Calcutta</p>
                    </div>
                    <hr className="bg-gray-400"/>
                </li>
                <li>
                    <hr className="bg-gray-400"/>
                    <div className="timeline-end ">2020</div>
                    <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-green-500"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    </div>
                    <div className="timeline-start timeline-box bg-green-200">
                        <p className="text-2xl  font-medium">B.tech-Electronics</p>
                        <p className="text-xl">University of Calcutta</p>
                    </div>
                    <hr className="bg-gray-400"/>
                </li>
                <li>
                    <hr className="bg-gray-400" />
                    <div className="timeline-start ">2016</div>
                    <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-green-500"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    </div>
                    <div className="timeline-end timeline-box bg-green-200">
                        <p className="text-2xl  font-medium">Higher Secondary</p>
                        <p className="text-xl">West Bengal Board</p>
                    </div>
                    <hr className="bg-gray-400"/>
                </li>
                <li>
                    <hr className="bg-gray-400"/>
                    <div className="timeline-end ">2014</div>
                    <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-green-500"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    </div>
                    <div className="timeline-start timeline-box bg-green-200">
                        <p className="text-2xl  font-medium">Secondary</p>
                        <p className="text-xl">West Bengal Board</p>
                    </div>
                    
                </li>
                
                
                
            </ul>



        </section>
    );
};

export default Education;