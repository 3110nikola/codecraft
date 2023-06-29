import React from "react";
import { bgYellow } from "../assets";

const ServiceBanner = ({ heading, text }) => {
  return (
    <div
      className="bg-center bg-cover py-20 animate-appear"
      style={{ backgroundImage: `url(${bgYellow})` }}
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-10 text-center px-5 md:px-20 text-primary">
        <img src="/logo.png" className="w-72" />
        <h1 className="text-3xl uppercase">{heading}</h1>
        <p className="text-xl">{text}</p>
        <h1 className="text-3xl">We’ll show you how.</h1>
      </div>
    </div>
  );
};

export default ServiceBanner;
