import Head from "next/head";

import Nav from "./Nav";
import Footer from "./Footer";
import GoTop from "./container/GoTop";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Andrea Piano's Portfolio</title>
        <meta
          name="description"
          content="Andrea Piano's portfolio - an Italian Front-end Developer.
          Developed by using ReactJS, NextJS 13 & Framer Motion."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="body">
        <Nav />
        {children}
        <Footer />
        <GoTop />
      </div>
    </>
  );
};

export default Layout;
