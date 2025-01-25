import React, { useState } from "react";
import { assets, testimonialData } from "../assets";
import { motion } from "framer-motion";

const Testimonials = () => {
 

  return (

<div id="Testimonials" className="overflow-hidden bg-green-900">
      <div className="relative max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* Heading */}
        <div className="max-w-2xl w-3/4 lg:w-1/2 mb-6 sm:mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-white font-semibold">
            Trusted by Pet Owners Across the Community
          </h2>
        </div>

        {/* Testimonials */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonialData.map((testimonial, index) => (
            <div key={index} className="flex h-auto">
              <div className="flex flex-col bg-white rounded-xl">
                <div className="flex-auto p-4 md:p-6">
                  <p className="text-base italic md:text-lg text-green-900">
                    "{testimonial.text}"
                  </p>
                </div>
                <div className="p-4 bg-gray-100 rounded-b-xl md:px-7">
                  <div className="flex items-center gap-x-3">
                    <div className="shrink-0">
                      
                    </div>
                    <div className="grow">
                      <p className="text-sm sm:text-base font-semibold text-green-900">
                        {testimonial.name}
                      </p>
                      <p className="text-xs text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-20 grid gap-6 grid-cols-2 sm:gap-12 lg:grid-cols-3 lg:gap-8">
          <div className="lg:col-start-2">
            <h4 className="text-lg sm:text-xl font-semibold text-white">
              Pets Cared For
            </h4>
            <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-white">
              1,000+
            </p>
            <p className="mt-1 text-gray-400">and counting</p>
          </div>
         
          <div className="lg:col-start-3">
            <h4 className="text-lg sm:text-xl font-semibold text-white">
              Happy Clients
            </h4>
            <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-white">
              90%
            </p>
            <p className="mt-1 text-gray-400">satisfaction rate</p>
          </div>
        </div>

        {/* Decorative SVG */}
        <div
          className="absolute bottom-0 end-0 transform lg:translate-x-32"
          aria-hidden="true"
        >
          <svg
            className="w-40 translate-y-[-120px] translate-x-[100px] lg:translate-y-[-70px] lg:translate-x-[0px] h-auto sm:w-72"
            width="1115"
            height="636"
            viewBox="0 0 1115 636"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.990203 279.321C-1.11035 287.334 3.68307 295.534 11.6966 297.634L142.285 331.865C150.298 333.965 158.497 329.172 160.598 321.158C162.699 313.145 157.905 304.946 149.892 302.845L33.8132 272.418L64.2403 156.339C66.3409 148.326 61.5475 140.127 53.5339 138.026C45.5204 135.926 37.3213 140.719 35.2207 148.733L0.990203 279.321ZM424.31 252.289C431.581 256.26 440.694 253.585 444.664 246.314C448.635 239.044 445.961 229.931 438.69 225.96L424.31 252.289ZM23.0706 296.074C72.7581 267.025 123.056 230.059 187.043 212.864C249.583 196.057 325.63 198.393 424.31 252.289L438.69 225.96C333.77 168.656 249.817 164.929 179.257 183.892C110.144 202.465 54.2419 243.099 7.92943 270.175L23.0706 296.074Z"
              fill="currentColor"
              className="fill-orange-500"
            />
          </svg>
        </div>
      </div>
    </div>

  );
};

export default Testimonials;
