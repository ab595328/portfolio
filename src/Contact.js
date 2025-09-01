import React, {useRef, useState} from 'react'
import { FaLinkedin } from "react-icons/fa";
// import { FaSquareXTwitter } from "react-icons/fa6";
import {motion} from "framer-motion";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// const variants={
//     initial:{
//         y:500,
//         opacity:0,
//     },
//     animate:{
//         y:0,
//         opacity:1,
//         transition:{
//             duration:0.5,
//             strggerChildren: 0.1,
//             },
//     },
// };
const variants = {
    initial: {
      y: 400,
      opacity: 0,
    },
    animate: {
      y: -10,
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1, // Corrected property name and added comma
      },
    },
  };
export default function Contact() {
    const form=useRef();
 const [error, seterror]=useState(false);
//  const [success, setsuccess]=useState(false);
 const [sending, sendstat]= useState(false)
    const sendEmail = (e) => {
        e.preventDefault();
    sendstat(true);
        emailjs.sendForm('service_8um1dng', 'template_as22rga', form.current, 'chjt0J7b5KcyurEHM')
          .then((result) => {
            // setsuccess(true); 
            form.current.reset();
            sendstat(false);
            EmailSent();
        }, (error) => {
            seterror(true);
          });
          
      };
      const EmailSent = () => toast.success('Mail sent, Thank you ', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        // transition: Bounce,
        });
    return (
        <>
        <motion.div className="contact" variants={variants} initial="initial" whileInView="animate">
            <motion.div className="textCont"variants={variants}>
                <motion.h2 variants={variants}>Get in touch</motion.h2>
                <motion.div className="contitm" variants={variants}>
                    <motion.div className="head">Mail</motion.div>
                    <span>ab595328@gmail.com</span>
                </motion.div>
                <motion.div className="contitm" variants={variants}>
                    <motion.div className="head">Phone</motion.div>
                    <span>+91 7727854157</span>
                </motion.div>
                <motion.div className="contlnks" variants={variants}>
                    <motion.div className="head">Connect on</motion.div>
                    <a href="https://www.linkedin.com/in/abhishek-bansal-baa949237/"><FaLinkedin size={"30px"} /></a>

                    <a href="https://www.instagram.com/mr.abhi_007b?igsh=cXFvNHF4cHhsZGNq"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/600px-Instagram_icon.png" width={"30px"} alt="" /></a>
                </motion.div>
            </motion.div>

            <div className="formCont">
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" required placeholder="Name" name='name'/>
                    <input type="email" required placeholder="Email" name='email'/>
                    <textarea rows="5" placeholder="Message" name='message'/>
                    <button disabled={sending===true?true:false}>Send mail</button>
                    {error && `Error`}
                    {/* {success && } */}
                     <ToastContainer />
                    {/* {setsuccess(false)} */}
                </form>
            </div>
        </motion.div>
        </>
    )
}
