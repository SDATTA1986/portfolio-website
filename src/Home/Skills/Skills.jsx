import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import AOS from "aos";
AOS.init();
import "aos/dist/aos.css";
import mongologo from "../../assets/MongoDB-Emblem.jpg"
import expresslogo from "../../assets/expressjs_logo_icon_169185.png"
import reactlogo from "../../assets/react.png"
import nodelogo from "../../assets/nodejs.png"
import firebaselogo from "../../assets/firebase.png"
import jslogo from "../../assets/javascript.png"
import htmllogo from "../../assets/html.png"
import csslogo from "../../assets/css.png"
import tailwindlogo from "../../assets/tailwind.png"
const Skills = () => {
    return (
        <section id="skill">
            {/* <SectionTitle heading={"My Skills"}></SectionTitle> */}
            <div className="hero mx-auto  text-center my-12">
                <h3 className="text-3xl uppercase mx-auto w-1/3 border-y-4 py-4 z-[0]">My Skills</h3>
            </div>
            <div>
                <div className="mb-8 grid grid-cols-1 md:grid-cols-3 ml-8 gap-4" >



                    <div className="z-0 h-[200px] w-[350px] p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col items-center " data-aos="zoom-in" >
                        <img src={mongologo} className="w-[100px] h-[100px] " />
                        <a href="#">
                            <h5 className="mb-2 text-5xl font-semibold tracking-tight text-gray-900 dark:text-white text-center">MongoDB</h5>
                        </a>


                    </div>


                    <div className="z-0 h-[200px] w-[350px] p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col items-center" data-aos="zoom-in">
                        <img src={expresslogo} className="w-[100px] h-[100px] " />
                        <a href="#">
                            <h5 className="mb-2 text-5xl font-semibold tracking-tight text-gray-900 dark:text-white text-center">Express.Js</h5>
                        </a>


                    </div>


                    <div className="z-0 h-[200px] w-[350px] p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col items-center" data-aos="zoom-in">
                        <img src={reactlogo} className="w-[100px] h-[100px] " />
                        <a href="#">
                            <h5 className="mb-2 text-5xl font-semibold tracking-tight text-gray-900 dark:text-white text-center">React.Js</h5>
                        </a>


                    </div>

                    <div className="z-0 h-[200px] w-[350px] p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col items-center" data-aos="zoom-in">
                        <img src={nodelogo} className="w-[100px] h-[100px] " />
                        <a href="#">
                            <h5 className="mb-2 text-5xl font-semibold tracking-tight text-gray-900 dark:text-white text-center">Node.Js</h5>
                        </a>


                    </div>

                    <div className="z-0 h-[200px] w-[350px] p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col items-center" data-aos="zoom-in">
                        <img src={firebaselogo} className="w-[100px] h-[100px] " />
                        <a href="#">
                            <h5 className="mb-2 text-5xl font-semibold tracking-tight text-gray-900 dark:text-white text-center">Firebase</h5>
                        </a>


                    </div>

                    <div className="z-0 h-[200px] w-[350px] p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col items-center" data-aos="zoom-in">
                        <img src={jslogo} className="w-[100px] h-[100px] " />
                        <a href="#">
                            <h5 className="mb-2 text-5xl font-semibold tracking-tight text-gray-900 dark:text-white text-center">Javascript</h5>
                        </a>


                    </div>


                    <div className="z-0 h-[200px] w-[350px] p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col items-center" data-aos="zoom-in">
                        <img src={htmllogo} className="w-[100px] h-[100px] " />
                        <a href="#">
                            <h5 className="mb-2 text-5xl font-semibold tracking-tight text-gray-900 dark:text-white text-center">HTML</h5>
                        </a>


                    </div>


                    <div className="z-0 h-[200px] w-[350px] p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col items-center" data-aos="zoom-in">
                        <img src={csslogo} className="w-[100px] h-[100px] " />
                        <a href="#">
                            <h5 className="mb-2 text-5xl font-semibold tracking-tight text-gray-900 dark:text-white text-center">CSS</h5>
                        </a>


                    </div>


                    <div className="z-0 h-[200px] w-[350px] p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col items-center"data-aos="zoom-in">
                        <img src={tailwindlogo} className="w-[100px] h-[100px] " />
                        <a href="#">
                            <h5 className="mb-2 text-5xl font-semibold tracking-tight text-gray-900 dark:text-white text-center">Tailwind</h5>
                        </a>


                    </div>




                </div>
            </div>

        </section>
    );
};

export default Skills;