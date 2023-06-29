import React from "react";

const ServiceSlide = ({ image, heading, text }) => {
  return (
    <div
      className={`max-w-7xl mx-auto gap-10 py-20 px-10 md:flex-row-reverse flex flex-col items-center`}
    >
      <div className="basis-1/2">
        <img className="w-full" src={image} />
      </div>
      <div className="basis-1/2">
        <h1 className="text-3xl">{heading}</h1>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default ServiceSlide;
