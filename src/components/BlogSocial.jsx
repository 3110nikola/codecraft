import React from "react";
import { CiFacebook, CiLinkedin } from "react-icons/ci";
import { SlSocialGoogle } from "react-icons/sl";

export default function BlogSocial({ title }) {
  const location = window.location.href;

  return (
    <div className="mx-auto">
      <h1 className="text-center text-xl md:hidden my-5">Share:</h1>
      <div className="md:sticky flex md:flex-col items-center gap-5 top-36 self-start">
        <a
          href={`http://www.facebook.com/sharer.php?u=${location}`}
          target="_blank"
        >
          <CiFacebook
            className="hover:text-yellow-400 duration-300"
            size={50}
          />
        </a>
        <a
          href={`http://www.linkedin.com/shareArticle?mini=true&url=${location}`}
          target="_blank"
        >
          <CiLinkedin
            className="hover:text-yellow-400 duration-300"
            size={50}
          />
        </a>
        <a href={`mailto:?subject=${title}&body=${location}`} target="_blank">
          <SlSocialGoogle
            className="hover:text-yellow-400 duration-300"
            size={45}
          />
        </a>
      </div>
    </div>
  );
}
