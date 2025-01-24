import React from "react";
import { assets } from "../assets";

const Contact = () => {
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
      className="w-full max-w-[85rem] mx-auto overflow-hidden py-10 px-6 lg:px-8 flex justify-center flex-col md:flex-row items-start md:items-center"
      id="Contact"
    >
      <div className="text-[#676767] basis-[48%] ">
        <h3 className="flex items-center mb-[20px] text-[25px] text-[#000f38] font-semibold">
          Send us a message{" "}
          <img
            src={assets.msg}
            width={35}
            className="ml-[10px]"
            alt="message"
          />
        </h3>
        <p className=" ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          sequi pariatur aspernatur, architecto ad hic aperiam, mollitia ex
          laborum impedit quod iste suscipit nisi qui iusto. Exercitationem
          officiis quas beatae sed veritatis aliquam commodi tempore modi
          provident!
        </p>
        <ul>
          <li className="flex items-center my-[20px]">
            <img
              src={assets.mailIcon}
              alt="mail"
              className="w-[25px] mr-[10px]"
            />
            Contact@ofosh
          </li>
          <li className="flex items-center my-[20px]">
            <img
              src={assets.phone}
              alt="phone"
              className="w-[25px] mr-[10px]"
            />{" "}
            +2 123-456-7890
          </li>
          <li className="flex items-center my-[20px]">
            <img
              src={assets.locationIcon}
              alt="location"
              className="w-[25px] mr-[10px]"
            />
            Block 203 Algeria Road Manhattan, USA
          </li>
        </ul>
      </div>
      <div className=" w-full md:w-1/2">
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
            className="block w-full bg-[#ebecfe] p-[15px] border-0 outline-0 mt-[5px] resize-none"
          />
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            required
            className="block w-full bg-[#ebecfe] p-[15px] border-0 outline-0 mt-[5px] resize-none"
          />
          <label>Write your messages here</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter your Message"
            required
            className="block w-[100%] bg-[#ebecfe] p-[15px] border-0 outline-0 mt-[5px] resize-none"
          />
          <button className="bg-[#000f38] flex items-center text-white rounded-xl mt-[20px] font-semibold text-1xl p-[20px]">
            Submit Now{" "}
            <img
              src={assets.whiteArrow}
              alt=""
              className="w-[35px] ml-[10px]"
            />
          </button>
        </form>
        <span className="my-[20px]">{result}</span>
      </div>
    </div>
  );
};

export default Contact;
