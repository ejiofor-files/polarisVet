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
        <div className=" flex justify-start bg-gray-200 rounded-md my-4">
          <input
            type="text"
            placeholder="Enter your Website URL"
            className=" text- px-10 rounded-md py-3 flex-1 outline-none"
          />
          <button className="bg-gradient-to-r from-pink-400 to-gray-100 text-black font-semibold rounded-lg px-2 py-3 sm:px-10">
            Get Result
          </button>
        </div>
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
            className="w-[700px] object-contain"
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
