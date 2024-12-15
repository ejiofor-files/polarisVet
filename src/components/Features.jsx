import React from "react";
import { features } from "../assets";
import { motion } from "framer-motion";

const Features = () => {
  return (
    <div
      className="mx-auto container overflow-hidden p-10 md:px-20 lg:px-24 max-w-full bg-green-100 "
      id="Features"
    >
      <div className="flex flex-col md:flex-row items-center  w-full justify-between gap-8 md:items-start md:gap-20">
        <div className=" w-full">
          <h5>Our Core features</h5>
          <h2 className="text-2xl  font-semibold sm:text-4xl">
            What Makes Us Different?
          </h2>
        </div>
        <p className="max-w-lg sm:my-10 text-gray-600">
          Our unique blend of experiences, perspectives, and aspirations sets us
          apart in an ever-evolving world.
        </p>
      </div>
      <motion.div
        className="w-full grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1  my-4 gap-8 py-6"
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        {features.map((item, index) => (
          <div key={index} className="">
            <img src={item.imgUrl} width={60} className="pb-4" />
            <h2 className="text-2xl font-semibold py-4">{item.title}</h2>
            <p className="text-gray-600 max-w-lg ">{item.text}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Features;
