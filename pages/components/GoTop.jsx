import React, { useState, useEffect } from "react";
import Image from "next/image";

import arrowUp from "../../public/assets/images/arrow-up.svg";

const GoTop = () => {
  const [thePosition, setThePosition] = useState(false);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 740) {
        setThePosition(true);
      } else {
        setThePosition(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    (thePosition && (
      <div className="go-top">
        <Image
          priority
          src={arrowUp}
          onClick={() => scrollToTop()}
          width="53"
          alt="Go top button"
        />
      </div>
    )) || <></>
  );
};

export default GoTop;
