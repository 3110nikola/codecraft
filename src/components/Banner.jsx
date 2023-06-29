import React from "react";
import { bannerBg } from "../assets";

export default function Banner({ heading, text, image }) {
  return (
    <div
      className="bg-cover bg-center"
      style={{ backgroundImage: `url(${bannerBg})` }}
    >
      <div className="flex gap-20 flex-col md:flex-row max-w-7xl mx-auto py-36 px-5 items-center animate-appear">
        <div className="basis-1/2 flex flex-col gap-2 p-5">
          <h1 className="text-3xl md:text-7xl">{heading}</h1>
          <p className="text-lg">{text}</p>
        </div>
        <div className="basis-1/2">
          <img className="w-full rounded-3xl" src={image} />
        </div>
      </div>
    </div>
  );
}
