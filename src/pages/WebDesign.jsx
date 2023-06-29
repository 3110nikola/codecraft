import React from "react";
import {
  ServiceBanner,
  Navbar,
  ServiceSlide,
  Footer,
  GeneralInformation,
} from "../components";
import { designSlides } from "../constants";
import Flickity from "react-flickity-component";
import { Helmet } from "react-helmet";

export default function WebDesign() {
  const flickityOptions = {
    initialIndex: 0,
  };

  return (
    <div>
      <Helmet>
        <title>Web Design / Interactive</title>
      </Helmet>
      <Navbar />
      <ServiceBanner
        heading="Codecraft Web Design Services"
        text="Your website is more than just an online placeholder for your brand; it’s a powerful marketing tool. With the right web design, your site engages, informs, and calls visitors to action, all while staying true to your brand promise."
      />
      <div className="flex flex-col gap-5 px-5 py-20 text-center max-w-7xl mx-auto">
        <h1 className="text-3xl">Web Design & Development Services</h1>
        <p>
          What does your website do for you? Does it engage visitors? Does it
          tell your story and demonstrate your brand’s value? Does it add value?
          Whether you need to improve sales or reputation, revitalize an aging
          website or build a new one from scratch, Codecraft comprehensive web
          design and development services to help you better connect with your
          customers.
        </p>
        <div className="border-2">
          <div className="flex flex-col md:flex-row gap-10 justify-center py-5 text-center mx-auto max-w-4xl whitespace-nowrap">
            <h1 className="text-lg basis-1/3">
              Engage <span className="text-yellow-400">your</span> visitors.
            </h1>
            <h1 className="text-lg basis-1/3">
              Tell <span className="text-yellow-400">your</span> story.
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
          {designSlides.map((slide, index) => (
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
