import React from 'react'
import Projectlist from './ProjectList'
import { FaGithub } from "react-icons/fa";
import { RxExternalLink } from "react-icons/rx";
import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
// import {Link} from 
export default function Projects({ theme }) {
    const ref = useRef();
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"],
    });
    const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });// color:"white" 

    return (
        <>
            <div className="PrjtCont">
                <div className="PrjtProgress">
                    <div className="PrjtHd">Projects</div>
                    <motion.div style={{ scaleX }} className="ProgressBar"></motion.div>
                </div>

                {

                    Projectlist.map((e) => {

                        return (
                            <div className="Aprjt" data-aos="fade-up">
                                <div className="PrjtName">{e.name}</div>
                                <div className="PrjtImage">
                                    <img src={e.img} alt={e.name} width="100%" /></div>
                                <div className="AbtPrjt">
                                    <div className="PrjtDesp">{e.desp}</div>
                                    <div className="ChkPrjt">
                                        <a id="a1" target='_blank' rel="noreferrer" href={e.gitlnk}><FaGithub size={"40px"} /></a>
                                        <a id="a2" target='_blank' rel="noreferrer" href={e.link}>Check live <RxExternalLink /></a>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}
