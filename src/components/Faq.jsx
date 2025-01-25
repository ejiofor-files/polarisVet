import React from "react";
import Accordion from "./Accordion";
import { motion } from "framer-motion";
import { HashLink } from "react-router-hash-link";

const Faq = () => {
  return (
    <div className="w-full max-w-[85rem] mx-auto overflow-hidden py-10 px-6 lg:px-8">
      <div className="flex items-center justify-between gap-6 flex-col md:flex-row">
        {/* FAQ Header */}
        <div className="flex flex-col">
          <h4 className="uppercase text-green-700 text-lg font-semibold mb-4">
            FAQ’s Demystified
          </h4>
          <h2 className="text-4xl font-semibold leading-normal sm:text-5xl mb-6">
            Frequently Asked Questions Answered
          </h2>
          <p>
            Your pet’s health and well-being are important to us. Explore our
            FAQ section to find answers to common questions about our services
            and care.
          </p>
          <p className="pt-3">
            Still have questions?{" "}
            <a
              href="#Contact"
              className="cursor-pointer font-bold text-green-700"
            >
              Contact Us
            </a>
          </p>
        </div>

        {/* Accordion Section */}
        <motion.div
          className="pt-16 w-full"
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1.5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Accordion
            title="What services do you provide for pets?"
            answer={
              <>
                We offer a wide range of services, including routine checkups,
                vaccinations, dental care, surgical procedures, emergency care,
                and more. Learn more about our{" "}
                <a
                  className="cursor-pointer font-bold text-green-700"
                  href="#Services"
                >
                  services
                </a>
                .
              </>
            }
          />
          <Accordion
            title="Do you handle emergencies?"
            answer="Yes, we provide 12-hour emergency services to ensure your pet gets the care they need during urgent situations."
          />
          <Accordion
            title="How can I schedule an appointment?"
            answer="Scheduling an appointment is easy! You can book online through our website or call our clinic during operating hours."
          />
          <Accordion
            title="Do you offer services for exotic pets?"
            answer={
              <>
                Yes, we provide care for a variety of pets, including cats,
                dogs, and some exotic animals. Please{" "}
                <HashLink
                  className="cursor-pointer font-bold text-green-700"
                  smooth
                  to="/#Services"
                >
                  contact us
                </HashLink>{" "}
                 to discuss your specific needs.
              </>
            }
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Faq;
