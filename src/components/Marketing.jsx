import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { blogInfo } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { Link } from "react-router-dom";

const BlogCard = ({ index, name, description, image, link }) => {
  return (
    <Link to={link}>
      <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
        <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
        >
          <div className="relative w-full h-[230px]">
            <img
              src={image}
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>

          <div className="mt-5">
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
            <p className="mt-2 text-secondary text-[14px]">{description}</p>
          </div>
        </Tilt>
      </motion.div>
    </Link>
  );
};

const Marketing = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>
          Successful Marketing Strategies We Love
        </p>
        <h2 className={`${styles.sectionHeadText}`}>Check it out</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          From expert strategies to industry best practices, we are here to
          empower you with the knowledge and tools to elevate your marketing
          efforts. Our team of experienced marketers and industry professionals
          share valuable tips, case studies, and innovative ideas to help you
          navigate the dynamic marketing landscape successfully.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {blogInfo.map((item, index) => (
          <BlogCard key={`blog-${index}`} index={index} {...item} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Marketing, "");
