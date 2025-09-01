import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const ExperienceList = [
  {
    role: "Fullstack Developer",
    company: "Soft Futura",
    type: "Full Time",
    duration: "May 2025 – Aug 2025",
    location: "Jaipur, Rajasthan",
    desp: [
      "Developed responsive and user-friendly web applications using React.js, Tailwind CSS, and JavaScript.",
      "Built and integrated RESTful APIs using Node.js, Express.js, and handled data with MongoDB/MySQL.",
      "Implemented secure JWT authentication and role-based access control for multiple user types.",
      "Worked on API integration with Axios and created reusable UI components.",
      "Enhanced UI/UX by optimizing performance and reducing API response time.",
    ],
    link: "https://softfutura.com",
  },
  {
    role: "Frontend Developer (Intern)",
    company: "Vanillakart Company",
    type: "Internship",
    duration: "Sep 2024 – Jan 2025",
    location: "Jaipur, Rajasthan",
    desp: [
      "Undergone Summer Training focused on web development.",
      "Developed and styled my personal portfolio and other frontend projects.",
      "Improved UI design skills by working on real frontend layouts and components.",
    ],
    link: "https://vanillakart.com",
  },
];

export default function Experience() {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <>
      <div className="PrjtCont">
        <div className="PrjtProgress">
          <div className="PrjtHd">Experience</div>
          <motion.div style={{ scaleX }} className="ProgressBar"></motion.div>
        </div>

        {ExperienceList.map((e, i) => (
          <div key={i} className="Aprjt" data-aos="fade-up">
            {/* Role Heading */}
            <div className="PrjtName">{e.role}</div>

            {/* About Experience */}
            <div className="AbtPrjt">
              <div className="PrjtDesp">
                <p className="text-lg font-semibold">{e.company}</p>
                <p className="text-sm text-gray-400">
                  {e.type} • 📍 {e.location} • ⏳ {e.duration}
                </p>

                <ul className="list-disc list-inside mt-3 space-y-1 text-sm">
                  {e.desp.map((point, j) => (
                    <li key={j}>{point}</li>
                  ))}
                </ul>
              </div>

              {/* Button */}
              {e.link && (
                <div className="ChkPrjt mt-4">
                  <a
                    id="a2"
                    target="_blank"
                    rel="noreferrer"
                    href={e.link}
                  >
                    Visit Company
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
