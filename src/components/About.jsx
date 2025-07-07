import React from "react";

import about from "../assets/img/about_img.png";

const About = () => {
  return (
    <section id="about">
      <div className="about__inner">
        <h1 className="about__title">
          Hello,
          <br />
          I'm Bella
        </h1>
        <div className="about__text">
          <p className="text">
            I studied Police Administration, where I developed strong analytical
            and logical thinking skills. While exploring other interests, I
            became fascinated by front-end development—especially the structure
            and clarity of markup languages like HTML and CSS. What began as
            curiosity turned into passion. I enjoy building responsive,
            interactive interfaces and am currently focusing on strengthening my
            skills in HTML, CSS, JavaScript, and React. Although I don’t have UX
            experience yet, I’m eager to learn and grow into a developer who
            writes clean code and creates meaningful web experiences.
          </p>
        </div>
      </div>
      <div className="about__img">
        <img src={about} alt="about" />
      </div>
    </section>
  );
};

export default About;
