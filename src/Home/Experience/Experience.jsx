import SectionTitle from "../../Shared/SectionTitle/SectionTitle";


const Experience = () => {
    return (
        <section id="experience">
            {/* <SectionTitle heading={"My Experience"}></SectionTitle> */}
            <div className="hero mx-auto  text-center my-12">
                <h3 className="text-3xl uppercase mx-auto w-1/3 border-y-4 py-4 z-[0]">My Experience</h3>
            </div>

            <div className="grid md:grid-cols-2 grid-cols-1 gap-4 ml-4 mr-4">
                <div className="card w-full text-black bg-white ">
                    <div className="card-body">
                        <h2 className="card-title">Telecom Enginner</h2>
                        <p>I worked as telecom engineer for 14 years  </p>

                    </div>
                </div>
                <div className="card w-full text-black bg-white ">
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