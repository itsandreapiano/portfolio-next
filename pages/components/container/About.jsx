import React from "react";
// import "./About.scss";

import { motion } from "framer-motion";
import { bios } from "../../Data";
import avatar from "../../../public/assets/images/me.png";
import Image from "next/image";

const About = () => {
  return (
    <div className="container " id="about">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-5, 0], opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="title"
      >
        <span>Who Am I?</span>
        <h1>About Me</h1>
      </motion.div>

      <div className="about_container">
        <motion.div
          exitBeforeEnter
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [-225, 0], opacity: 1 }}
          transition={{ duration: 1 }}
          className="about_left"
        >
          <motion.div
            whileHover={{ y: -48, x: -55 }}
            transition={{ duration: 0.3 }}
            className="motion-div"
          >
            <Image src={avatar} />
          </motion.div>
        </motion.div>
        <motion.div
          className="about_right"
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [225, 0], opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <p>
            Heya!
            <br />
            I'm a Front-end Developer and ReactJS lover.
            <br />
            I have a passion for developing unique WebApps which improve
            people's lives, by creating & translating Figma mockups into
            reusable components.
            <br />
            Next.js is my favourite working environment so far, in which I love
            having fun with Data Fetching, React Hooks, custom CSS and UI
            Libraries/Frameworks.
            <br /> <br />
            High performance? It's a must. The more creative? The better.
            <br />
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
            download="../../../assets/CV-Andrea-Piano.pdf"
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
