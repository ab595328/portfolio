import React from 'react'
import { useState } from 'react'
import { IoMdClose } from "react-icons/io";
import { MdOutlineSegment } from "react-icons/md";
import {motion} from "framer-motion";
import { GoSun } from "react-icons/go";
import { PiMoonStarsFill } from "react-icons/pi";
const variants={
    open:{
        transition:{
            staggerChildren:0.1,
        },
    },
    closed:{
        transition:{
            staggerChildren:0.05,
            staggerDirection:-1,

        },
    },
}

const itemVariants={
    open:{
        y:0,
        opacitiy:1,
    },
    closed:{
        y:50,
        opacitiy:0,
    },
};

export default function Navbar({theme, themfunc}) {
const [open, Setoggle] =useState(false);
    return (
        <nav class="navbar bg-body-tertiary">
            <motion.div class="container-fluid">
                <button className='tgglbtn' onClick={()=>{Setoggle(!open)}}>{open===true?<IoMdClose size={"100%"}/>:<MdOutlineSegment size={"90%"}/>}</button>
                <motion.div className={open===true?"slidebar":"clslidebar"} variants={variants}>
                    <ul>
                        <li><motion.a href="#Homepage" variants={itemVariants}>Home</motion.a></li>
                        <li><motion.a href="#Projects" variants={itemVariants}>Projects</motion.a></li>
                        <li><motion.a href="#Skills" variants={itemVariants}>Skills</motion.a></li>
                        <li><motion.a href="#Contact" variants={itemVariants}>Contact</motion.a></li>
                        <li><motion.a href="#Experience" variants={itemVariants}>Experience</motion.a></li>
                    </ul>
                </motion.div>
                <div className="theme" onClick={()=>{themfunc(theme==='day'?'nit':'day')}}>{theme==='day'?<GoSun size={"100%"}/>:<PiMoonStarsFill size={"100%"}/>}</div>
                {/* <motion.a class="navbar-brand" to="#">Navbar</motion.a> */}
            </motion.div>
        </nav>
    )
}
