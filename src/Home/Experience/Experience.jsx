import SectionTitle from "../../Shared/SectionTitle/SectionTitle";


const Experience = () => {
    return (
        <section id="experience">
            <SectionTitle heading={"My Experience"}></SectionTitle>
            <div className="grid grid-cols-2 gap-4">
                <div className="card w-full text-black bg-green-300 ">
                    <div className="card-body">
                        <h2 className="card-title">Telecom Enginner</h2>
                        <p>I worked as telecom engineer for 5 years  </p>

                    </div>
                </div>
                <div className="card w-full text-black bg-green-300 ">
                    <div className="card-body">
                        <h2 className="card-title">Web Developer</h2>
                        <p>I completed different types of projects under Programming Hero </p>

                    </div>
                </div>
                
            </div>
        </section>
    );
};

export default Experience;