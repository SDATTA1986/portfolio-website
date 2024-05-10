

import { TypeAnimation } from 'react-type-animation';


import img from '../../assets/Self Image.jpeg'
// import Typewriter from 'typewriter-effect';
const Banner = () => {
    return (
        <div className="hero min-h-screen ">





            <div className="hero min-h-screen ">
                <div className="hero-content flex-col-reverse lg:flex-row-reverse gap-[150px]">
                    <img src={img} className="rounded-full shadow-2xl bg-white lg:h-[500px] lg:w-[500px] w-[400px] h-[400px] border-8 border-white" />


                    <div className='lg:w-[500px] sm:w-[500px] font-bold sm:mb-10 sm:pb-10'>
                        <p className='text-2xl'>Hi, I am <br /><span className='text-5xl'>SOURAV DATTA</span> </p>
                        <br />
                        <br />



                        <TypeAnimation
                            sequence={[
                                "Developing websites for your business ",
                                1000,
                                "Optimizing websites for your business ",
                                1000,

                            ]}
                            wrapper="span"
                            speed={25}
                            style={{ fontSize: "3em", display: "inline-block" }}
                            repeat={Infinity}
                        />

                        {/* <button className="btn btn-primary">Download Resume</button> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;





