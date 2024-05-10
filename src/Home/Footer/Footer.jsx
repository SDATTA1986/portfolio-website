
import { FaTwitter,FaFacebookF,FaYoutube, FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
const Footer = () => {
    return (
        <div className="mt-20">
            <footer className=" footer footer-center p-5 flex flex-row-reverse justify-around text-white bg-black rounded">
              
                <nav>
                    <div className="grid grid-flow-col gap-4 text-2xl">
                    <a
                    rel="noopener noreferrer"
                    href="https://facebook.com/"
                    target="_blank"
                  >
                    <FaFacebookF className="text-2xl hover:scale-150"></FaFacebookF>
                  </a>
                  <a
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTwitter className="text-2xl hover:scale-150"></FaTwitter>
                  </a>

                  <a
                    rel="noopener noreferrer"
                    href="https://youtube.com/"
                    target="_blank"
                  >
                    <FaYoutube className="text-2xl hover:scale-150"></FaYoutube>
                  </a>
                  <a
                    rel="noopener noreferrer"
                    href="https://www.instagram.com/"
                    target="_blank"
                  >
                    <FaInstagramSquare className="text-2xl hover:scale-150"></FaInstagramSquare>
                  </a>
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






