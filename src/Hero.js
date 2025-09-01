import React from 'react'
import { motion } from "framer-motion";
import { PiDownloadSimpleFill } from "react-icons/pi";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};
// const SliderVariants={
//   initial:{
//     x:0,
//   },
//   animate:{
//     x: "-200%",
//     transition:{
//       repeat: Infinity,
//       repeatType:"mirror",
//       duration: 2,
//     },
//   },
// };

export default function Hero() {
  return (
    <motion.div className="hero">

      <motion.div className="intro" variants={textVariants} initial="initial" animate="animate">
        <motion.h5 id="name" variants={textVariants}>Hii <img src="https://media.tenor.com/SNL9_xhZl9oAAAAi/waving-hand-joypixels.gif" width={'30px'} alt="" /></motion.h5>
        <motion.h5 id="name" variants={textVariants}>I'm Abhishek Bansal</motion.h5>
        <motion.h3 variants={textVariants} >Web Developer</motion.h3>
        <a href="https://drive.google.com/file/d/1JpCMUJles-pxV453sazQjhUrXM77MHT8/view?usp=drive_link" target='_blank' rel="noreferrer" download ><div id='dnld'>Download CV <PiDownloadSimpleFill size={"20px"} /></div> </a>
      </motion.div>
      {/* <motion.div className="imgcont" variants={textVariants} initial="initial" animate="animate"><img src="/Portfolio/mypic2.png" alt="mypic" /></motion.div> */}
      <motion.div class="sliding-text-container" >
        <span class="sliding-text"> <marquee behavior="" direction="left " scrollamount="15" >Abhishek Bansal - MERN Stack  Developer</marquee></span>
      </motion.div>
    </motion.div>
  )
}
