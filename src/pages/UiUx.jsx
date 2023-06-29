import React from "react";
import {
  ServiceBanner,
  Navbar,
  ServiceSlide,
  Footer,
  GeneralInformation,
} from "../components";
import { uiUxSlides } from "../constants";
import Flickity from "react-flickity-component";
import { Helmet } from "react-helmet";

export default function WebDesign() {
  const flickityOptions = {
    initialIndex: 0,
  };

  return (
    <div>
      <Helmet>
        <title>UI/UX | Codecraft</title>
      </Helmet>
      <Navbar />
      <ServiceBanner
        heading="Codecraft UI / UX Design Agency"
        text="User Experience design, also known as UX design, is the heart of your website. Your users expect a simple, clear, and attractive website, no matter what industry you’re in. We’ll show you how to build an exceptional web presence through our time-tested research, strategy, and design methodologies."
      />
      <div className="flex flex-col gap-5 px-5 py-20 text-center max-w-7xl mx-auto">
        <div className="border-2">
          <div className="flex flex-col md:flex-row gap-10 justify-center py-5 text-center mx-auto max-w-4xl whitespace-nowrap">
            <h1 className="text-lg basis-1/3">
              Audit <span className="text-yellow-400">your</span> UI/UX.
            </h1>
            <h1 className="text-lg basis-1/3">
              Improve <span className="text-yellow-400">your</span> User
              Experience.
            </h1>
            <h1 className="text-lg basis-1/3">
              Demonstrate <span className="text-yellow-400">your</span> value.
            </h1>
          </div>
        </div>
        <Flickity
          className={
            "carousel overflow-hidden relative outline-none cursor-grab"
          } // default ''
          elementType={"div"}
          options={flickityOptions}
          disableImagesLoaded={false}
          reloadOnUpdate
          static
        >
          {uiUxSlides.map((slide, index) => (
            <ServiceSlide
              key={`slide-${index}`}
              heading={slide.heading}
              text={slide.text}
              image={slide.image}
            />
          ))}
        </Flickity>
      </div>
      <GeneralInformation />
      <Footer />
    </div>
  );
}
