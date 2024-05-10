// import AboutMe from "./AboutMe/AboutMe";
// import Banner from "./Banner/Banner";

// import ContactMe from "./ContactMe/ContactMe";
// import Education from "./Education/Education";
// import Experience from "./Experience/Experience";
// import Footer from "./Footer/Footer";
// import NavBar from "./NavBar/NavBar";
// import Skills from "./Skills/Skills";
// import Lottie from 'react-lottie';
// import Data3 from "../../public/Animation.json";
// const Home = () => {
//     const defaultOption = {
//         loop: true,
//         autoplay: true, 
//         animationData: Data3,
//         rendererSettings: {
//           preserveAspectRatio: 'xMidYMid slice'
//         }
//       };
//     return (
//         <div>
//             <Lottie ClassName='h-[600px] w-[600px]' options={defaultOption}
//               height={400}
//               width={400}
//               />
//             <NavBar></NavBar>
//             <Banner></Banner>
//             <AboutMe></AboutMe>
//             <Skills></Skills>
//             <Experience></Experience>
//             <Education></Education>
//             <ContactMe></ContactMe>
//             <Footer></Footer>

//         </div>
//     );
// };

// export default Home;




// 



import { useState, useEffect } from "react";
import NavBar from "./NavBar/NavBar";
import Banner from "./Banner/Banner";
import AboutMe from "./AboutMe/AboutMe";
import Skills from "./Skills/Skills";
import Experience from "./Experience/Experience";
import Education from "./Education/Education";
import ContactMe from "./ContactMe/ContactMe";
import Footer from "./Footer/Footer";
import Lottie from 'react-lottie';
import AnimationData from "../../public/LoadingAnimation3.json";
import BackgroundParticles from "./BackgroundParticles/BackgroundParticles";


const Home = () => {
    const [showAnimation, setShowAnimation] = useState(true);

    useEffect(() => {
        // Hide animation after 3 seconds
        const timer = setTimeout(() => {
            setShowAnimation(false);
        }, 1850);

        return () => clearTimeout(timer);
    }, []);

    const defaultOptions = {
        loop: false,
        autoplay: true,
        animationData: AnimationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        },
        renderer: 'svg',
        animationSpeed: 2.5
    };

    

    // const defaultOptions = {
    //     loop: false,
    //     autoplay: true,
    //     animationData: AnimationData,
    //     rendererSettings: {
    //         preserveAspectRatio: 'xMidYMid slice'
    //     },
    //     renderer: 'svg',
    //     onComplete: () => {
    //         console.log("Hello");
    //         setShowAnimation(false); // Hide the animation when it completes
    //     }
    // };




    return (
        <div>
            {showAnimation && (
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100vh", // Full viewport height
                    }}
                >
                    <div style={{ marginBottom: "20px" }}>
                        <Lottie
                            options={defaultOptions}
                            height={400}
                            width={400}
                            style={{
                                height: "300px", // Adjust dimensions as needed
                                width: "300px", // Adjust dimensions as needed
                                margin: "auto", // Center-align the animation
                            }}
                        />
                    </div>
                   
                </div>
            )}
            {!showAnimation && (
                <>
                    {/* <BackgroundParticles></BackgroundParticles>
                    <NavBar />
                    
                    <Banner /> */}
 
<BackgroundParticles  />
<NavBar style={{ zIndex: 2 }} />
            <Banner style={{ zIndex: 2 }} />


                    <AboutMe />
                    <Skills />
                    <Experience />
                    <Education />
                    <ContactMe />
                    <Footer  />
                   
                </>
            )}
        </div>
    );
};

export default Home;





