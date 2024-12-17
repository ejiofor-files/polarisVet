import React from "react";
import Accordion from "./Accordion";
import { motion } from "framer-motion";

const Faq = () => {
  return (
    <div className="container mx-auto overflow-hidden w-full py-10 px-6">
      <div className="flex items-center justify-between gap-6 flex-col md:flex-row ">
        <div className="flex flex-col">
          <h4 className="uppercase text-green-700 text-lg font-semibold mb-4">
            FAQ’s Demystified
          </h4>
          <h2 className="text-4xl font-semibold leading-normal sm:text-5xl mb-6">
            Frequently Asked Questions Answered
          </h2>
          <p>
            Uncover the secrets of SEO success with our FAQ section, where we
            demystify the world of search engine optimization.
          </p>
          <p className="pt-3">
            Have any other questions?{" "}
            <a href="#Contact" className="cursor-pointer font-bold">
              Contact Us
            </a>
          </p>
        </div>
        <motion.div
          className=" pt-16 w-5/6 "
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1.5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Accordion
            title="Why SEO is it important for business?"
            answer="It is essential for your business because it helps increase organic traffic, improve online presence, and boost your website's ranking in search results, leading to more potential customers finding your products or services."
          />
          <Accordion
            title="What sets your SEO agency apart from others?"
            answer="It is essential for your business because it helps increase organic traffic, improve online presence, and boost your website's ranking in search results, leading to more potential customers finding your products or services."
          />
          <Accordion
            title="What SEO services do you offer?"
            answer="Facilis fugiat hic ipsam iusto laudantium libero maiores minima molestiae mollitia repellat rerum sunt ullam voluptates? Perferendis, suscipit."
          />
          <Accordion
            title="How can SEO benefit my website specifically?"
            answer="It is essential for your business because it helps increase organic traffic, improve online presence, and boost your website's ranking in search results, leading to more potential customers finding your products or services."
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Faq;
