import React from "react";
import {
  ServiceBanner,
  Navbar,
  Footer,
  GeneralInformation,
} from "../components";
import { Helmet } from "react-helmet";

export default function GraphicDesign() {
  return (
    <div>
      <Helmet>
        <title>Graphic Design | Codecraft</title>
      </Helmet>
      <Navbar />
      <ServiceBanner
        heading={"Codecraft Graphic Design Services"}
        text={
          "With the digital landscape constantly evolving, a strong website brand is essential. We'll guide you through the process. Discover the art of website branding with our expert services. Craft an unforgettable online identity that resonates with your audience and sets you apart from the competition."
        }
      />
      <div className="max-w-4xl px-5 py-20 mx-auto flex flex-col gap-5 my-20">
        <p>
          Are you memorable? The differentiator between you and the competitor
          is your design and you stand out in an over populated marketplace. Our
          expert team of designers will craft the difference that gives you the
          validity and momentum your company needs to standout in the
          marketplace.
        </p>
        <h1 className="text-2xl">
          Just a few custom graphic design specialties we offer
        </h1>
        <ul className="ml-5 list-disc marker:text-yellow-400 text-lg">
          <li>Logo Design</li>
          <li>Brochure Design</li>
          <li>Package Design</li>
          <li>Graphic Standards Manuals</li>
          <li>Collateral Development</li>
          <li>Annual Reports</li>
          <li>Point-of-Purchase Displays</li>
          <li>Multimedia Presentations</li>
          <li>Trade Show Display Design</li>
          <li>Print Production</li>
          <li>Print Requisition Systems</li>
          <li>Way Finding Systems</li>
          <li>Product Marketing</li>
          <li>Point of Sale</li>
          <li>Packaging</li>
          <li>Copywriting</li>
          <li>Sales & General Presentations</li>
        </ul>
      </div>
      <GeneralInformation />
      <Footer />
    </div>
  );
}
