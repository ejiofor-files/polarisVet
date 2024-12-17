import React, { useState } from "react";
import { assets, testimonialData } from "../assets";
import { motion } from "framer-motion";

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const previous = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const length = testimonialData.length;
  const next = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  return (
    <div
      className="container overflow-hidden max-w-full py-14 px-6 bg-gradient-to-br  from-green-100 to-green-700"
      id="Testimonials"
    >
      <div className="flex justify-center items-center flex-col text-center">
        <h5 className="uppercase text-green-800 text-lg font-semibold">
          Our client's testimonials
        </h5>
        <h2 className="capitalize font-bold text-4xl sm:text-5xl mb-3">
          Client stories of AgenShark
        </h2>
        <p className="text-gray-700 text-lg">
          Dive into the success stories of AgenShark's clients—where digital
          dreams become reality.
        </p>
      </div>

      <motion.div
        className="flex justify-center items-center gap-4 mt-6 overflow-hidden transition-transform duration-500 ease-in-out"
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        {testimonialData.map(
          (testimonial, index) =>
            index === current && (
              <div key={index} className="border rounded-lg md:w-1/2 mt-8">
                <img
                  src={testimonial.rating}
                  alt="rating"
                  className=" px-2"
                  width={100}
                />
                <p className="text-[20px] leading-normal font-semibold mb-3 py-6 px-3 ">
                  {testimonial.text}
                </p>
                <hr className="py-4" />
                <div className="flex items-center gap-3 px-1 pb-3">
                  <img
                    src={testimonial.authorImg}
                    alt={testimonial.title}
                    width={45}
                    className="rounded-full"
                  />
                  <h3 className="text-[15px] font-semibold">
                    {testimonial.title},{" "}
                    <span className="font-medium text-white">
                      {testimonial.position}
                    </span>
                  </h3>
                </div>
              </div>
            )
        )}
      </motion.div>
      <div className="flex justify-center items-center mt-6 gap-8">
        <img
          src={assets.backIcon}
          width={45}
          alt="icon"
          className="bg-green-700 px-3 py-3 rounded-full cursor-pointer"
          onClick={previous}
        />
        <img
          src={assets.nextIcon}
          width={45}
          alt="icon"
          className="bg-green-700 px-3 py-3 rounded-full cursor-pointer"
          onClick={next}
        />
      </div>
    </div>
  );
};

export default Testimonials;
