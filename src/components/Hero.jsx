import React from "react";
import Brands from "./Brands";
import { assets } from "../assets";

const Hero = () => {
  return (
    <div
      className="relative bg-black flex flex-col justify-center items-center h-[calc(100vh+120px)]"
      id="Header"
    >
      
      <div className="absolute inset-0">
        <img
          className="object-cover w-full h-full opacity-50"
          src={assets.hero}
          alt="Veterinary care background"
        />
      </div>

      <div className="relative h-screen flex flex-col justify-center items-center">
        <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
          <div className="max-w-xl mx-auto text-center">
            <h1 className="tracking-tighter text-white">
              <span className="font-sans font-normal text-7xl">Caring for</span>
              <br />
              <span className="font-serif italic font-normal text-8xl">
                Your Pets
              </span>
            </h1>
            <p className="mt-5 font-sans text-base font-normal text-white text-opacity-70">
              Dedicated to ensuring the health, happiness, and well-being of your furry friends.  
              Our team is here to provide the best veterinary care they deserve.
            </p>
            <div className="flex items-center justify-center mt-8 space-x-3 sm:space-x-4">
              <a
                href="#"
                title=""
                className="
                  inline-flex
                  items-center
                  justify-center
                  px-5
                  py-2
                  font-sans
                  text-base
                  font-semibold
                  leading-6
                  transition-all
                  duration-200
                  border-2 border-transparent
                  rounded-full
                  sm:leading-8
                  bg-white
                  sm:text-lg
                  text-black
                  hover:bg-opacity-90
                  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-secondary
                "
                role="button"
              >
                Book an Appointment
              </a>
            </div>
          </div>
        </div>
      </div>

      <Brands />
    </div>
  );
};

export default Hero;
