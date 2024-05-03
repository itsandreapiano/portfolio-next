import { socialIcons } from "../../pages/api/datafetch/Data";

import { motion } from "framer-motion";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
        }}
        transition={{ duration: 1.5 }}
        className="footer"
      >
        <div className="copyright">
          <p>
            Copyright &copy; {new Date().getFullYear()} All rights reserved. Made by{" "}
            <Link href="/">
              <span>Andrea Piano</span>
            </Link>
          </p>
        </div>
        <div className="followMe">
          <h4>Follow Me</h4>
          <div className="stick"></div>
          <div className="social_icons">
            {socialIcons.map((socialIcon, index) => {
              return <div key={index}>{socialIcon}</div>;
            })}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Footer;
