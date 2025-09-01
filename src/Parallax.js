import { useRef } from "react";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Parallax({ type }) {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const ytxt = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  // Different background gradient based on type
  const getBackground = () => {
    if (type === "Projects")
      return "linear-gradient(180deg, rgb(30, 30, 79), rgb(19, 19, 44))";
    if (type === "Skills")
      return "linear-gradient(180deg, rgb(30, 30, 79), rgb(78, 78, 173))";
    if (type === "Experience")
      return "linear-gradient(180deg, rgb(30, 30, 79), rgb(150, 100, 200))"; // thoda purple touch
    return "linear-gradient(180deg, rgb(30, 30, 79), rgb(50, 50, 100))";
  };

  // Different planet/sun icon based on type
  const getImage = () => {
    if (type === "Projects") return "/planets.png";
    if (type === "Skills") return "/sun.png";
    if (type === "Experience") return "/moon.png"; // maan lo tum ek moon image add karoge public folder me
    return "/planets.png";
  };

  return (
    <motion.div
      className="parallax"
      ref={ref}
      style={{ background: getBackground() }}
    >
      <motion.h1 style={{ y: ytxt, color: "white" }}>
        {type === "Projects"
          ? "Projects"
          : type === "Skills"
          ? "Skills"
          : "Experience"}
      </motion.h1>

      <motion.div className="mountains"></motion.div>
      <motion.div
        className="planets"
        style={{ y: yBg, backgroundImage: `url(${getImage()})` }}
      ></motion.div>
      <motion.div className="stars" style={{ x: yBg }}></motion.div>
    </motion.div>
  );
}
