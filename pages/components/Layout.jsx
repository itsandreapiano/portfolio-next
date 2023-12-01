import Head from "next/head";

import Nav from "./Nav";
import Footer from "./Footer";
import GoTop from "./GoTop";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Andrea Piano's Portfolio</title>
        <meta
          name="description"
          content="Andrea Piano's portfolio - a passionate Data & Software Engineer.
          Developed by using NextJS 13, ReactJS & Framer Motion."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;650&display=swap"
          rel="stylesheet"
        ></link>
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
