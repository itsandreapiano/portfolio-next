import React from "react";
import avatar from "../../../public/assets/images/me.png";
// import "./Home.scss";
import { motion } from "framer-motion";
import Image from "next/image";

const Home = () => {
  const moveVariants = {
    animation: {
      y: [0, -15],
      transition: {
        yoyo: Infinity,
        duration: 2,
        delay: 1,
      },
    },
  };

  return (
    <motion.div
      className="container "
      id="home"
      initial={{ y: -15, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 2,
        delay: 0.5,
      }}
    >
      <div className="profile">
        <Image src={avatar} alt="Andrea Piano's picture" />
      </div>
      <div className="profile_text">
        <h3 className="name">
          Hi, I'm <span className="gradient-heading">Andrea Piano</span>{" "}
        </h3>
        <span className="job">An Italian Front-end Developer</span>

        <section className="text-box">
          <span className="text">Don't worry,</span>
          <span className="text">this portfolio is</span>
          <span className="text third-line"> "politically corReact".</span>
        </section>

        <motion.a
          href="#contact"
          whileHover={{ scale: 1.1 }}
          variants={moveVariants}
          animate="animation"
        >
          Hire me
        </motion.a>
        <div className="uiDesign" href="#skills">
          #uiDesign
        </div>
        <div className="reactJS">#reactJS</div>
        <div className="nextJS" href="#skills">
          #nextJS
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
