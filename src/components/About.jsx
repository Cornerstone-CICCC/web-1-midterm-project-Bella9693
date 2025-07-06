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
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum
            aut ducimus ipsum quo aliquam, veritatis ipsa quos ullam?
            Necessitatibus odio hic voluptate sed illo amet cum praesentium iure
            dicta laboriosam sequi, officia earum commodi. Laboriosam omnis
            aspernatur voluptate officia magni aperiam exercitationem obcaecati
            vero sequi, cupiditate impedit ut! Illum officia recusandae saepe
            beatae minus rem?
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
