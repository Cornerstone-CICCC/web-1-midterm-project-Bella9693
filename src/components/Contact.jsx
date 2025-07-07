import React from "react";

import envelope from "../assets/img/envelope-solid.svg";
import github from "../assets/img/github-brands.svg";
import linkedin from "../assets/img/linkedin-brands.svg";

const Contact = () => {
  return (
    <section id="contact">
      <div className="contact__inner">
        <h2 className="contact__title">Contact</h2>
        <div className="contact__intro">
          <p>
            Open to new opportunities! Feel free to connect and collaborate.
          </p>
        </div>
        <div className="contact__img">
          <ul>
            <li>
              <div>
                <img src={envelope} alt="mail" />
              </div>
            </li>
            <li>
              <div>
                <img src={github} alt="github" />
              </div>
            </li>
            <li>
              <div>
                <img src={linkedin} alt="linkedin" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;
