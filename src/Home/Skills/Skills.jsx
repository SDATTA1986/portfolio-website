import SectionTitle from "../../Shared/SectionTitle/SectionTitle";


const Skills = () => {
    return (
        <section id="skill">
            <SectionTitle heading={"My Skills"}></SectionTitle>
            <div>
                <div className="mb-8">
                    <div className="flex justify-between w-1/2 mx-auto mb-4">
                        <p>ReactJS</p>
                        <p>80%</p>
                    </div>
                    <div className="flex flex-col items-center ">
                        <progress className="progress progress-success w-1/2 " value="80" max="100"></progress>
                    </div>
                </div>
                <div className="mb-8">
                    <div className="flex justify-between w-1/2 mx-auto mb-4">
                        <p>Mongo DB</p>
                        <p>70%</p>
                    </div>
                    <div className="flex flex-col items-center ">
                        <progress className="progress progress-success w-1/2 " value="70" max="100"></progress>
                    </div>
                </div>
                <div className="mb-8">
                    <div className="flex justify-between w-1/2 mx-auto mb-4">
                        <p>Next JS</p>
                        <p>50%</p>
                    </div>
                    <div className="flex flex-col items-center ">
                        <progress className="progress progress-success w-1/2 " value="50" max="100"></progress>
                    </div>
                </div>

            </div>

        </section>
    );
};

export default Skills;