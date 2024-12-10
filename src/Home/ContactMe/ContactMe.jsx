
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
// import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import Swal from 'sweetalert2';
// import GoogleMap from '../GoogleMap/GoogleMap';
import { MdOutlineMailOutline } from "react-icons/md"
import { FaPhoneAlt } from "react-icons/fa";
const ContactMe = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(`${import.meta.env.VITE_SERVICE_ID}`, `${import.meta.env.VITE_TEMPLATE_ID}`, form.current, `${import.meta.env.VITE_PUBLIC_KEY}`)
            .then((result) => {
                console.log(result);
                if (result.text === "OK") {
                    form.current.reset();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "You have successfully sent message",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }

            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        // <section id="contact">
        //     {/* <SectionTitle heading={"Contact Me"}></SectionTitle> */}

        //     <div className="hero mx-auto  text-center my-12">
        //         <h3 className="text-3xl uppercase mx-auto w-1/3 border-y-4 py-4 z-[0]">Contact Me</h3>
        //     </div>

        //     <div className="hero min-h-screen ">
        //         <div className="hero-content flex-col lg:flex-row gap-4 justify-between mr-10">
        //             <div >
        //                 {/* <h1 className="text-5xl font-bold">GET IN TOUCH</h1>
        //                 <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p> */}
        //                 <GoogleMap></GoogleMap>
        //             </div>
        //             <div className="card shrink-0 sm:w-[350px] md:w-1/2 shadow-2xl bg-base-100">
        //             <h1 className="text-black text-4xl text-center font-bold">GET IN TOUCH</h1>
        //                 <form ref={form} className="card-body" onSubmit={sendEmail}>
        //                     <div className="form-control">
        //                         <label className="label">
        //                             <span className="label-text">Your Name</span>
        //                         </label>
        //                         <input type="text" name="user_name" placeholder="Your Name" className="input input-bordered" required />
        //                     </div>
        //                     <div className="form-control">
        //                         <label className="label">
        //                             <span className="label-text"> Your Email</span>
        //                         </label>
        //                         <input type="email" name="user_email" placeholder=" Your email" className="input input-bordered" required />
        //                     </div>
        //                     <div className="form-control">
        //                         <label className="label">
        //                             <span className="label-text">Your Message</span>
        //                         </label>
        //                         <textarea name="message" type="text"  placeholder="Your Message" className=" textarea textarea-bordered" required />
        //                     </div>
        //                     <div className="form-control mt-6">
        //                         <input type="submit" value="Send Message" className="btn btn-active btn-ghost text-black"/>
        //                     </div>
        //                 </form>
        //             </div>
        //         </div>
        //     </div>
        // </section>



        <section id="contact">
                <div className="hero mx-auto  text-center my-12">
             <h3 className="text-3xl uppercase mx-auto w-1/3 border-y-4 py-4 z-[0]">Contact Me</h3>
           </div>

            <div className=" min-h-screen ">
                <div className="hero-content flex-col lg:flex-row justify-around">
                    <div className="text-center lg:text-left max-w-1/2 ">
                        {/* <h1 className="text-5xl font-bold"></h1> */}
                        <p className=" text-2xl pb-3"><span ><MdOutlineMailOutline className='inline-block mr-4' /></span>Email:  contact@souravthenewhorizon.com</p>
                        <p className="text-2xl"><span><FaPhoneAlt className='inline-block mr-4'/></span>Phone:  +917980391716</p>
                    </div>
                    <div className="sm:divider md:divider-horizontal bg-white sm:w-[1px] md:w-[1px]"></div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form ref={form} className="card-body" onSubmit={sendEmail}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Name</span>
                                </label>
                                <input type="text" name="user_name" placeholder="Your Name" className="input input-bordered text-black" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text"> Your Email</span>
                                </label>
                                <input type="email" name="user_email" placeholder=" Your email" className="input input-bordered text-black" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Message</span>
                                </label>
                                <textarea name="message" type="text"  placeholder="Your Message" className=" textarea textarea-bordered text-black" required />
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" value="Send Message" className="btn btn-active bg-[#0d47a1] text-white"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactMe;