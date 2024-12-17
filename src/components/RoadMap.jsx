import React from "react";
import { assets, roadMap } from "../assets";
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
        <p className="max-w-lg sm:my-6 text-white">
          Our Proven Work Process blends experience, precision, and innovation
          for consistently outstanding results.
        </p>
      </div>
      <motion.div
        className="mt-4 flex items-center justify-between flex-col gap-4 md:flex-row"
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="w-[450px] md:px-4 px-14">
          <ul>
            {roadMap.map((item, index) => (
              <li
                key={index}
                className="relative flex items-baseline gap-6 pb-5"
              >
                <div className="before:absolute before:left-[5.5px] before:h-full before:w-[1px] before:bg-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    className="bi bi-circle-fill fill-gray-400"
                    viewBox="0 0 16 16"
                  >
                    <circle cx="8" cy="8" r="8" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl text-gray-300 font-bold">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-white text-md">{item.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <img
            src={assets.roadmapImg}
            alt=""
            className="object-fill w-[650px] rounded-xl  md:block"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default RoadMap;
