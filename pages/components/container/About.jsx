import React from "react";
// import "./About.scss";

import { motion } from "framer-motion";
import { bios } from "../../api/datafetch/Data";
import avatar from "../../../public/assets/images/me.png";
import Image from "next/image";

const About = () => {
  return (
    <div className="container " id="about">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-9, 0], opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="title"
      >
        <span>Who Am I?</span>
        <h1>About Me</h1>
      </motion.div>

      <div className="about_container">
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [-225, 0], opacity: 1 }}
          transition={{ duration: 1 }}
          className="about_left"
        >
          <motion.div
            whileHover={{ y: -48, x: -55 }}
            transition={{ duration: 0.3 }}
            className="motion-div-desktop"
          >
            <Image src={avatar} alt="Andrea Piano's picture" />
          </motion.div>
          <div className="div-mobile">
            <Image src={avatar} alt="Andrea Piano's picture" />
          </div>
        </motion.div>
        <motion.div
          className="about_right"
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [225, 0], opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <p>
            Hey there! <br />
            I'm a technical professional focused on building business systems, enterprise workflows, and data-driven applications. <br />
            I enjoy developing valuable solutions that improve operational processes, support decision-making, and combine technical problem solving with creativity and strategic thinking. <br />
            <br />
            My background started in software development and gradually evolved toward enterprise technologies, FP&A solutions, and operational systems. <br />
            Alongside enterprise applications, I also love building independent software projects and experimenting with AI-powered tools and integrations. <br />
            <br />
            High performance? It's a must. The more creative? The better. <br />
            <br />
          </p>
          {bios.map((bio) => {
            return (
              <div className="bio" key={bio.id}>
                <span className="bioKey">
                  {bio.icon}
                  {bio.key}
                </span>
                <span className="bioValue">{bio.value}</span>
              </div>
            );
          })}
          <motion.a
            href="../../../assets/CV-Andrea-Piano.pdf"
            download="CV-Andrea-Piano"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            Download Resume
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
