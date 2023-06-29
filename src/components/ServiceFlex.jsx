import React from "react";
import { BallCanvas } from "./canvas";

const ServiceFlex = ({ heading, text, image, link }) => {
  return (
    <div className="flex md:flex-row flex-col-reverse gap-10 md:gap-0 mx-auto max-w-7xl items-center px-5 w-full md:w-fit bg-blue-400/20 p-10 rounded-2xl">
      <div className="flex flex-col gap-4 text-justify">
        <h1 className="text-3xl">{heading}</h1>
        <p className="md:text-lg">{text}</p>
        <a
          className="bg-yellow-400 text-primary p-5 rounded-xl self-start hover:scale-105 duration-500"
          href={link}
        >
          READ MORE
        </a>
      </div>
      <div className="animate-bounce md:self-end">
        <BallCanvas icon={image} />
      </div>
    </div>
  );
};

export default ServiceFlex;
