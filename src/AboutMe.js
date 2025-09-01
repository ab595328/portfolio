import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

AOS.init();
export default function AboutMe() {
  return (
    <>
        <div id="AbtHd">About Me</div>
    <div className="AboutCont" >
    {/* style={{backgroundColor:theme==='day'?'white':'blue'}} */}
        <div className="Abtxt"  data-aos="fade-right">As a Full Stack Developer, I build scalable and user-friendly web applications from front to back. With expertise in the MERN stack (MongoDB,MySQL,Express.js, React.js, Node.js), I develop seamless integrations between interactive front-ends and efficient back-end systems. I focus on clean UI/UX, secure authentication, and optimized performance to deliver impactful solutions. Passionate about learning and collaboration, I aim to turn innovative ideas into powerful digital experiences.</div>
        <div className="Abtbox"  data-aos="fade-left"><img src="https://cdn.dribbble.com/users/4415359/screenshots/12483759/media/8262513d57658cc7c053ba9c68024438.gif" alt="" width={"100%"}/></div>
    </div>
    </>
  )
}
