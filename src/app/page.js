"use client";
import React from "react";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Project from "@/components/Project";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import BlkSection from "@/components/BlkSection";
import Skills from "@/components/Skills";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  return (
    <div>
      <ScrollToTopButton />
      <About />
      <Skills />
      <Project />
      <BlkSection />
      <Contact />
      <ToastContainer position="bottom-right" autoClose={3000} />
    </div>
  );
};

export default Home;