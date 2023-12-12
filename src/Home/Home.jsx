import AboutMe from "./AboutMe/AboutMe";
import Banner from "./Banner/Banner";
import NavBar from "./NavBar/NavBar";
import Skills from "./Skills/Skills";

const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <Skills></Skills>
        </div>
    );
};

export default Home;