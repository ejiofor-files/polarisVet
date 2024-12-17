import React from "react";
import Navbar from "./Navbar";
import { assets } from "../assets";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div
      className="container min-h-screen  bg-cover bg-center flex items-center pt-24 max-w-full overflow-hidden bg-gradient-to-r from-pink-300 to-white"
      id="Header"
    >
      <Navbar />

      <motion.div
        className="container overflow-x-hidden px-6 md:px-20 mt-0 lg:px-32 "
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="flex gap-2 items-center text-1xl sm:text-2xl font-normal">
          Skyrocket your website <img src={assets.rocket} alt="rocket" />
        </p>
        <h2 className="text-black font-bold text-4xl md:text-[82px] inline-block sm:text-5xl py-4 leading-normal max-w-2xl">
          Find the best solution together.
        </h2>
        <p className="max-w-2xl">
          Unleash the full potential of your website and elevate its online
          presence with our comprehensive SEO solutions.
        </p>
      </motion.div>
      <motion.div
        className="hidden md:block relative"
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="flex pt-10 ">
          {/* <img width={20} src={assets.bannerKit1} alt="/" /> */}
          <img
            className="w-[800px] h-[450px] object-fit"
            src={assets.hero}
            alt="banner"
          />
          {/* <img width={20} src={assets.bannerKit2} alt="/" /> */}
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
