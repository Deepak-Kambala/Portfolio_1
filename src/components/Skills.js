import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// Import your skill logos
import numpy from "../assets/img/numpy.png"; // replace with actual logos
import pandas from "../assets/img/pandas.png";
import matplotlib from "../assets/img/matplotlib.png";
import scikit from "../assets/img/scikit.webp";
import html from "../assets/img/html.webp";
import css from "../assets/img/css.jpg";
import js from "../assets/img/js.png";
import react from "../assets/img/react.jpg";
import node from "../assets/img/node.png";
import express from "../assets/img/express.png";
import mongodb from "../assets/img/mongo.webp";
import flutter from "../assets/img/flutter.jpg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const skills = [
    { name: "Numpy", logo: numpy },
    { name: "Pandas", logo: pandas },
    { name: "Matplotlib", logo: matplotlib },
    { name: "Scikit-learn", logo: scikit }, 
    { name: "HTML", logo: html },
    { name: "CSS", logo: css },
    { name: "JavaScript", logo: js },
    { name: "React.js", logo: react },
    { name: "Node.js", logo: node },
    { name: "Express.js", logo: express },
    { name: "MongoDB", logo: mongodb },
    { name: "Flutter", logo: flutter },
  ];

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                Here’s a glimpse into the technologies and tools I’ve mastered throughout my journey as a developer.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                {skills.map((skill, index) => (
                  <div className="skill-card" key={index}>
                    <div className="skill-logo">
                      <img src={skill.logo} alt={skill.name} />
                    </div>
                    <h5 className="skill-name">{skill.name}</h5>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="background" />
    </section>
  );
};
