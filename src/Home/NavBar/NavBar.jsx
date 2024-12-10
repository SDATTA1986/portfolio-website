
import logo from '../../assets/SOURAV_LOGO_modified.png'

const NavBar = () => {
    const navLinks = < >

        <ul className="lg:flex items-center text-2xl">
            <li className='font-bold text-2xl'><a href="/">Home</a></li>
            <li className='font-bold text-2xl'><a href='#about'>About Me</a></li>
            <li className='font-bold text-2xl'><a href='#skill'>Skills</a></li>
            <li className='font-bold text-2xl'><a href='#projects'>Projects</a></li>
            <li className='font-bold text-2xl'><a href='#experience'>Experiences</a></li>
            <li className='font-bold text-2xl' href="achievement"><a>Achievements</a></li>
            <li className='font-bold text-2xl'><a href='#contact'>Contact Me</a></li>
        </ul>


    </>
    return (
        <div >
            <div className="navbar   text-white max-w-screen-xl mx-auto ">




                <div className="navbar-start ">



                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle lg:hidden">
                            <svg  xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#0d47a1] rounded-box w-52 text-3xl">
                            {navLinks}
                        </ul>
                    </div>


                    <img className='max-w-[180px] max-h-[180px] hidden md:block lg:block z-10' src={logo}  alt=""  />
                </div>
                <div className="navbar-center  hidden lg:flex">
                    <ul className="menu menu-horizontal px-4   text-center items-center ">
                        {navLinks}
                    </ul>
                </div>
                {/* <div className="navbar-end flex  items-center gap-2 ">

                    <a href={ExamplePdf} download="Example-PDF-document" target="_blank" rel="noreferrer" className="btn bg-green-200">Download Resume<FaDownload /></a>

                </div> */}


                <div className="navbar-end flex items-center  md:hidden">
                    <img className='max-w-[180px] max-h-[180px] lg:ml-0 z-10' src={logo} alt="" />
                </div>


            </div>
        </div>
    );
};

export default NavBar;




