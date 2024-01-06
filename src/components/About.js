/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";


const About = () => {
  return (
    <section
      data-section
      id="about"
      className=" m-auto -my-20 px-5 pb-12 pt-6 md:px-6 md:py-14 lg:-my-24 lg:max-w-[1160px] lg:px-12 lg:py-24 text-pink-global"
    >
      <div className="my-24 md:flex md:gap-8 lg:my-32 lg:gap-12">
        <motion.img
          src="/images/img-about.webp"
          alt="ordinateur de développeur avec un projet réalisé"
          className="m-auto h-[500px] rounded-[3px] object-cover md:m-0"
          initial={{ opacity: 0, y: 150 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        />
        <div className="content-about">
          <motion.h1
            className="pb-3 pt-12 font-kaushan text-[2.3rem] md:pb-3 md:pt-3 md:text-[2rem] lg:text-[2.5rem]"
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            À propos de moi <br />
            
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <p className="pt-3 text-sm leading-6 text-gray-light lg:text-[0.95rem]">
              Forte d&apos;une expérience de <span className="inline-block pt-1 leading-4 text-gray-dark  "> 9 ans en marketing digital,</span> j&apos;ai acquis une expertise dans la conception de stratégies impactantes et la gestion de campagnes performantes.
            </p>
            <p className="pt-3 text-sm leading-6 text-gray-light lg:text-[0.95rem]">
              Fascinée par le développement Front-End, je me suis formée et j&apos;ai plongé dans l&apos;univers offert par
              {" "}
              <span className="inline-block pt-1 leading-4 text-gray-dark shadow-[inset_0px_-6px_0px] shadow-pink-ultra-light">
                React,
              </span>{" "}
              <span className="inline-block pt-1 leading-4 text-gray-dark shadow-[inset_0px_-6px_0px] shadow-pink-ultra-light">
                Sass
              </span>
              ,{" "}
              <span className="inline-block pt-1 leading-4 text-gray-dark shadow-[inset_0px_-6px_0px] shadow-pink-ultra-light">
                Node.js
              </span>{" "}
              et{" "}
              <span className="inline-block pt-1 leading-4 text-gray-dark shadow-[inset_0px_-6px_0px] shadow-pink-ultra-light">
                Redux
              </span>{" "}
              pour créer des applications web performantes. </p>
            <p className="pt-3 text-sm leading-6 text-gray-light lg:text-[0.95rem]">
              Ma curiosité et ma creativité m&aposinspirent à concevoir des interfaces utilisateurs uniques et captivantes.
            </p>
            <p className="pt-3 text-sm leading-6 text-gray-light lg:text-[0.95rem]">

              Cette <span className="inline-block pt-1 leading-4 text-gray-dark  "> double compétence </span> me permet de combiner vision stratégique et savoir-faire technique, dans chacun de mes projets.

            </p>

            <p className="pt-3  text-sm leading-6 text-gray-light lg:text-[0.95rem]">
              N&apos;hésitez pas à explorer mon portfolio pour découvrir mon
              univers. Je reste toujours motivée à participer à de nouveaux projets, à apprendre de nouvelles technologies et à travailler avec des esprits créatifs.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <a
              href="#contact"
              className="mt-9 inline-block pl-[2px] text-[0.9rem] font-medium uppercase leading-[0.875rem] tracking-widest shadow-[inset_0px_-6px_0px] shadow-pink-light transition-all duration-[400ms] ease-out hover:shadow-[inset_0px_-15px_0px] hover:shadow-pink-light "
            >
              Me contacter
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
