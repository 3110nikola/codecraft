import React from "react";

export const Project = ({ logo, description, image }) => {
  return (
    <div className="group flex flex-col gap-10 items-center p-10 duration-200 hover:py-20 md:h-[500px] bg-yellow-400 rounded-2xl text-primary">
      <img src={logo} className="w-40" />
      <p className="text-center">{description}</p>
      <img src={image} className="w-" />
    </div>
  );
};
