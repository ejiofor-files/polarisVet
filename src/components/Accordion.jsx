import React, { useState } from "react";
import { assets } from "../assets";

const Accordion = ({ title, answer }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="py-3 ">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex outline-none text-left text-1xl justify-between w-full font-medium text-black bg-gray-300 py-6 px-4"
      >
        <span>{title}</span>
        {accordionOpen ? (
          <img src={assets.arrowUp} width={30} />
        ) : (
          <img src={assets.arrowDown} width={30} />
        )}
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden my-3 text-md">{answer}</div>
      </div>
    </div>
  );
};

export default Accordion;
