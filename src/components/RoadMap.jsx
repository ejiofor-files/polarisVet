import React from "react";
import { roadMap } from "../assets";
import { motion } from "framer-motion";

const RoadMap = () => {
  return (
    <div className="container mx-auto overflow-hidden max-w-full py-16 px-12 bg-gradient-to-bl from-green-600 to-green-900">
      <div className="flex flex-col md:flex-row items-center  w-full justify-between gap-8 md:items-start md:gap-20">
        <div className=" w-full py-6">
          <h5 className="uppercase font-medium text-yellow-400">
            Map your Roadmap
          </h5>
          <h2 className="text-3xl  font-semibold sm:text-4xl">
            Our Proven Work Process
          </h2>
        </div>
        <p className="max-w-lg sm:my-10 text-white">
          Our Proven Work Process blends experience, precision, and innovation
          for consistently outstanding results.
        </p>
      </div>
      <motion.div
        className="flex justify-between items-start text-left flex-col md:flex-row md:items-center md:text-center gap-6 mt-10"
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        {roadMap.map((road, index) => (
          <div key={index}>
            <label className="text-3xl py-2 px-5 bg-orange-100 rounded-[50%] ">
              {road.id}
            </label>
            <h3 className="text-3xl font-semibold mt-8 mb-4">{road.title}</h3>
            <p className="text-white leading-normal">{road.text}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default RoadMap;
