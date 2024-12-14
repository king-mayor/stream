import React, { useEffect, useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
const ScrollToTop = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
  });
  const handleToggle = () => {
    window.scrollTo({
      top: 0,
      behaviour: "smooth",
    });
  };
  return (
    <div className="">
      <div
        className="text-5xl cursor-pointer fixed bottom-5 right-5 text-white"
        onClick={handleToggle}
      >
        {show && <FaArrowCircleUp />}
      </div>
    </div>
  );
};

export default ScrollToTop;
