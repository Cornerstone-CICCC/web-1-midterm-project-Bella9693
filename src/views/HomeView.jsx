import React from "react";
import Header from "../components/Header";
import Pro from "../components/Pro";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Main from "../components/Main";
import About from "../components/About";
import Skills from "../components/Skills";
import Home from "../components/Home";
import Career from "../components/Career";

const HomeView = () => {
  return (
    <>
      <Header />
      <Main>
        <Home />
        <About />
        <Pro />
        <Skills />
        <Career />
        <Contact />
      </Main>
      <Footer />
    </>
  );
};

export default HomeView;
