import React from "react";
import { bgYellow } from "../assets";

const GeneralInformation = () => {
  return (
    <div
      className="bg-center bg-cover mb-20"
      style={{ backgroundImage: `url(${bgYellow})` }}
    >
      <div className="mx-auto max-w-4xl py-20 px-5 text-primary flex flex-col items-center gap-5">
        <h1 className="text-center text-3xl">General Information</h1>
        <p className="text-center">
          Get the conversation started and please don’t hesitate to reach out
          with any question you may be pondering. We will get back in touch with
          you in a timely fashion.
        </p>
        <a
          href="/contact"
          className="bg-primary p-2 rounded-2xl text-yellow-400 hover:bg-tertiary duration-300"
        >
          CONTACT US
        </a>
      </div>
    </div>
  );
};

export default GeneralInformation;
