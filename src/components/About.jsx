import React from "react";
import { aboutUs, assets } from "../assets";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="overflow-hidden max-w-full py-6" id="About">
      <div className="flex flex-col md:flex-row  justify-between gap-8">
        <img
          src={assets.about}
          alt="/"
          className="w-[100%] sm:w-[70%] object-fill relative"
        />

        <div className="flex flex-col items-start px-4 mt-6 gap-8">
          <div className="flex flex-col">
            <h4 className="uppercase text-green-700 text-lg font-semibold mb-4">
              Why choose us?
            </h4>
            <h2 className="text-3xl font-semibold leading-normal sm:text-4xl mb-6">
              Our Tailored Strategies for Your Success
            </h2>
            <p>
              Crafting precision in every detail, our tailored strategies pave
              the way for your unparalleled success in the digital landscape.
            </p>
          </div>

          {aboutUs.map((about, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-6 mt-1"
              initial={{ opacity: 0, y: 100 }}
              transition={{ duration: 1.5 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <img
                src={about.imgTag}
                width={60}
                className="bg-green-200 p-2 rounded-full"
                alt="/"
              />
              <div className="flex flex-col">
                <h3 className="font-semibold text-2xl text-black">
                  {about.title}
                </h3>
                <p className="text-gray-700">{about.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
