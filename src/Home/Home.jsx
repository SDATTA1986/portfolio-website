import AboutMe from "./AboutMe/AboutMe";
import Banner from "./Banner/Banner";
import ContactMe from "./ContactMe/ContactMe";
import Education from "./Education/Education";
import Experience from "./Experience/Experience";
import Footer from "./Footer/Footer";
import NavBar from "./NavBar/NavBar";
import Skills from "./Skills/Skills";

const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <Skills></Skills>
            <Experience></Experience>
            <Education></Education>
            <ContactMe></ContactMe>
            <Footer></Footer>
        </div>
    );
};

export default Home;