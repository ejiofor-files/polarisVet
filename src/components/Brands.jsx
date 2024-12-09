import React from "react";
import { brandImages } from "../assets";
import { motion } from "framer-motion";

const Brands = () => {
  return (
    <div className="container overflow-hidden bg-gradient-to-bl from-green-800 to-green-900 mx-auto flex max-w-full py-6">
      <div className="flex items-center justify-between ">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex flex-shrink-0"
        >
          <ul className="flex items-start justify-between  gap-8 ">
            {brandImages.map((brand, index) => (
              <li key={index} className="px-8">
                <img src={brand.img} alt="/" />
              </li>
            ))}
          </ul>
        </motion.div>
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex flex-shrink-0"
        >
          <ul className="flex items-start justify-between  gap-8 ">
            {brandImages.map((brand, index) => (
              <li key={index} className="px-8">
                <img src={brand.img} alt="/" />
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default Brands;
