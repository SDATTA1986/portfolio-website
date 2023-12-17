
import { FaTwitter,FaFacebookF,FaYoutube } from "react-icons/fa";
const Footer = () => {
    return (
        <div className="mt-20">
            <footer className="footer footer-center p-5 flex flex-row-reverse justify-around text-white bg-black rounded">
              
                <nav>
                    <div className="grid grid-flow-col gap-4 text-2xl">
                        <a><FaFacebookF></FaFacebookF></a>
                        <a><FaTwitter></FaTwitter></a>

                        <a><FaYoutube></FaYoutube></a>
                    </div>
                </nav>
                <aside>
                    <p>Copyright &copy; 2023 - All right reserved </p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;