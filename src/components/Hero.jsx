import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`lg:absolute pt-[120px] lg:pt-0 inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#ffda05]" />
          <div className="w-1 sm:h-80 h-40 yellow-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Stunning Web <span className="text-[#ffda05]"> Designs</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            An award-winning firm focused on helping clients
            <br className="sm:block hidden" />
            maximize value from their digital marketing
          </p>
        </div>
      </div>
      <ComputersCanvas />
      <div className="pt-[120px] lg:pt-0 lg:absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#brands">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
