import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { brands } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const BrandCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full yellow-blue-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const Brands = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Trusted by the best brands</p>
        <h2 className={styles.sectionHeadText}>
          Some of the worlds best companies have chosen to work with CODECRAFT
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Google X Samsung partnered (for the first time) on a co-marketing
        campaign for the Samsung Flip and Fold 3 devices.
      </motion.p>

      <div className="mt-20 flex flex-wrap justify-center gap-10">
        {brands.map((brand, index) => (
          <BrandCard key={brand.title} index={index} {...brand} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Brands, "brands");
