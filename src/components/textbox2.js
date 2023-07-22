import React, { useEffect, useRef, useState } from "react";
import "./textbox2.css";

const Textbox2 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const headerRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    }, {});

    observer.observe(headerRef.current);
    observer.observe(contactRef.current);

    return () => {
      observer.unobserve(headerRef.current);
      observer.unobserve(contactRef.current);
    };
  }, []);

  return (
    <>
      <h1
        className={`footer-text ${isVisible ? "animate-text" : ""}`}
        ref={headerRef}
      >
        Let's work together.
      </h1>
      <h1
        className={`contact ${isVisible ? "animate-text" : ""}`}
        ref={contactRef}
      >
        <a href="#">Get in touch.</a>
      </h1>
    </>
  );
};

export default Textbox2;
