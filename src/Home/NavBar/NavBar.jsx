
import logo from '../../assets/s logo 3.jpeg'
import ExamplePdf from '../../assets/1.pdf'
import { FaDownload } from "react-icons/fa6";
const NavBar = () => {
    const navLinks = < >
   
   <ul className="flex space-x-6 items-center">
    <li>Home</li>
    <li>About Me</li>
    <li> Skills</li>
    <li> Education</li>
    <li> Experiences</li>
    <li> Projects</li>
    <li>Contact Me</li>
  </ul>
       

    </>
    return (
        <div>
            <div className="navbar  bg-base-100 max-w-screen-xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">

                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-xl font-semibold">
                            {navLinks}
                        </ul>
                    </div>
                    <img className='max-w-[150px] max-h-[150px]' src={logo} alt="" />
                </div>
                <div className="navbar-center  hidden lg:flex">
                    <ul className="menu menu-horizontal px-2   text-center items-center">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end flex  items-center gap-2 ">

                    <a href={ExamplePdf} download="Example-PDF-document" target="_blank" rel="noreferrer" className="btn bg-green-200">Download Resume<FaDownload /></a>

                </div>
            </div>
        </div>
    );
};

export default NavBar;