import React from "react";
import {
  ServiceBanner,
  Navbar,
  Footer,
  GeneralInformation,
} from "../components";
import { Helmet } from "react-helmet";

export default function Branding() {
  return (
    <div>
      <Helmet>
        <title>Branding / Company Identity | Codecraft</title>
      </Helmet>
      <Navbar />
      <ServiceBanner
        heading={"Codecraft Branding Agency"}
        text={
          "Quality. Strength. Ability. Boldness. Trust. What does your brand say about you? Want to make it better?"
        }
      />
      <div className="max-w-4xl px-5 py-20 mx-auto flex flex-col gap-5 my-20">
        <p>
          When the time comes for a customer to decide on a brand will you be
          their first choice? Your brand needs to tell your story to the
          customer both consciously and subconsciously conveying the qualities
          that make you the best choice. The Creative Momentum is a group of
          brand specialists and we know that your brand is more than just a
          logo.
        </p>
        <ul className="ml-5 list-disc marker:text-yellow-400 text-lg">
          <li>Brand Evaluation</li>
          <li>Name Development</li>
          <li>Logo Design / Corporate Identity</li>
          <li>Brand Guidelines</li>
          <li>Taglines</li>
          <li>Company & Product Naming</li>
          <li>Content Strategy</li>
          <li>Copywriting</li>
          <li>Product Marketing</li>
        </ul>
      </div>
      <GeneralInformation />
      <Footer />
    </div>
  );
}
