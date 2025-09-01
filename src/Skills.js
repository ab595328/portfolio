import { React, useRef } from 'react'
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaBootstrap, FaGithub } from "react-icons/fa6";
import { SiExpress, SiMongodb } from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";
import { motion, useScroll, useSpring } from "framer-motion";
export default function Skills() {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });// color:"white" 

  return (
    <div className="SklsCont">
          <div id="stars"></div>
    <div id="stars2"></div>
    <div id="stars3"></div>
      <div className="PrjtProgress sklhd">
        <div className="PrjtHd">Skills</div>
        <motion.div style={{ scaleX }} className="ProgressBar"></motion.div>
      </div>
      <div className="Skills">
        <div className="html skl"><FaHtml5 size={"100px"} style={{ color: "orange" }} />
          <span>HTML</span>
        </div>
        <div className="css skl"><FaCss3Alt size={"100px"} style={{ color: "#264de4" }} />
          <span>CSS</span>
        </div>
        <div className="js skl"><RiJavascriptFill size={"100px"} style={{ color: "#f0db4f" }} />
          <span>Javascript</span>
        </div>
        {/* <div className="btsp skl"><FaBootstrap size={"100px"} style={{ color: "#6e10ea" }} />
          <span>Bootstrap</span>
        </div> */}
        <div className="mysql skl"><img src="https://pngimg.com/d/mysql_PNG22.png" width="50%" alt="" />
          <span>MYSQL</span>
        </div>
        <div className="express skl"><SiExpress size={"100px"} style={{ color: "#21263a" }} />
          <span>Express.js</span>
        </div>
        <div className="react skl"><FaReact size={"100px"} style={{ color: "#04d8f9" }} />
          <span>React.js</span>
        </div>
        <div className="node skl"><FaNodeJs size={"100px"} style={{ color: "#45ce05" }} />
          <span>Node.js</span>
        </div>
        <div className="express skl"><SiMongodb size={"100px"} style={{ color: "#049024" }} />
          <span>MongoDB</span>
        </div>
        {/* <div className="sql skl">< size={"100px"}/></div> */}

        {/* <div className="api skl">< size={"100px"}/></div> */}
        <div className="git skl"><FaGithub size={"100px"} style={{ color: "#424242" }} />
          <span>Github</span>
        </div>
        {/* <div className="cnva skl"><img src="/canvalogo.png" width="40%" alt="" />
          <span>Canva</span>
        </div> */}

      </div>
    </div>
  )
}
