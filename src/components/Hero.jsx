import React from "react";
import Brands from "./Brands";
import { assets } from "../assets";
import { createPortal } from 'react-dom';



const Hero = () => {
  const [showModal, setShowModal] = React.useState(false);
  console.log(document.getElementById('modal-root'));

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "70571834-6a2c-43c4-9401-3e3c5cf64e71");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

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
                  
                  <>
                    <button
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
                      onClick={() => setShowModal(true)}
                    >
                      Book an Appointment
                    </button>
                    {showModal && createPortal(
                      <div className="fixed z-50 inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="bg-white p-6 rounded-lg w-full max-w-md">
                          <div className="w-full flex justify-end"><button
                            className="mt-4 text-red-500 hover:underline"
                            onClick={() => setShowModal(false)}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><rect width="32" height="32" fill="none"/><path fill="currentColor" d="M16 2C8.2 2 2 8.2 2 16s6.2 14 14 14s14-6.2 14-14S23.8 2 16 2m0 26C9.4 28 4 22.6 4 16S9.4 4 16 4s12 5.4 12 12s-5.4 12-12 12"/><path fill="currentColor" d="M21.4 23L16 17.6L10.6 23L9 21.4l5.4-5.4L9 10.6L10.6 9l5.4 5.4L21.4 9l1.6 1.6l-5.4 5.4l5.4 5.4z"/></svg>
                          </button></div>
                          <h2 className="text-2xl mb-4">Book an Appointment</h2>
                          <form onSubmit={onSubmit}>
                            <label className="block mb-2">Your Name</label>
                            <input
                              type="text"
                              name="name"
                              placeholder="Enter your name"
                              required
                              className="block w-full bg-[#ebecfe] p-3 border-0 outline-0 mt-1 resize-none rounded"
                            />
                            
                            <label className="block mb-2 mt-4">Phone Number</label>
                            <input
                              type="tel"
                              name="phone"
                              placeholder="Enter your phone number"
                              required
                              className="block w-full bg-[#ebecfe] p-3 border-0 outline-0 mt-1 resize-none rounded"
                            />
                            
                            <label className="block mb-2 mt-4">Email</label>
                            <input
                              type="email"
                              name="email"
                              placeholder="Enter your email address"
                              required
                              className="block w-full bg-[#ebecfe] p-3 border-0 outline-0 mt-1 resize-none rounded"
                            />
                            
                            <label className="block mb-2 mt-4">Appointment Date</label>
                            <input
                              type="date"
                              name="date"
                              required
                              className="block w-full bg-[#ebecfe] p-3 border-0 outline-0 mt-1 resize-none rounded"
                            />
                            
                            <button
                              type="submit"
                              className="bg-[#000f38] flex items-center justify-center text-white rounded-xl mt-6 font-semibold text-lg p-4 w-full"
                            >
                              Submit
                            </button>
                          </form>
                          
                        </div>
                      </div>,
                      document.getElementById('modal-root')
                    )}
                  </>
            </div>
          </div>
        </div>
      </div>

      <Brands />
    </div>
  );
};

export default Hero;
