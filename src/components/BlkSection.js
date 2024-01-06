import React from "react";
import { motion } from "framer-motion";


const BlkSection = () => {
  return (
    <section className="mb-5 mt-20 flex flex-col items-center justify-center gap-6 bg-gray-global bg-bg-black bg-cover bg-fixed bg-center px-4 py-8 text-off-white brightness-[1.5] md:mt-24 md:p-10 lg:mt-[120px] lg:gap-9 lg:p-20 ">
      <motion.p
        className="text-center text-lg leading-8 tracking-wider blur-[0.5px] md:text-2xl md:leading-10 lg:text-[1.7rem]"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      >
       Des idées en tête ? 
       Contactez-moi pour transformer vos concepts en réalité !
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        
        
      </motion.div>
    </section>
  );
};

export default BlkSection;
