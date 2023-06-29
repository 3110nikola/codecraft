import React from "react";
import {
  ServiceBanner,
  Navbar,
  Footer,
  GeneralInformation,
} from "../components";
import { Helmet } from "react-helmet";

export default function MobileDesign() {
  return (
    <div>
      <Helmet>
        <title>Mobile Design | Codecraft</title>
      </Helmet>
      <Navbar />
      <ServiceBanner
        heading={"Responsive Websites"}
        text={
          "With tablets and smartphones on the rise, nearly half of all internet users access online content from their mobile devices. Want to elevate your online presence and captivate users on any device?"
        }
      />
      <div className="max-w-4xl px-5 py-20 mx-auto flex flex-col gap-5 my-20">
        <p>
          If your website is not optimized to be viewed on mobile devices, then
          you may be losing customers. We design web sites that can be viewed on
          desktops as well as mobile devices, or we can take it a step further,
          and design a dedicated mobile site that your customers can be
          automatically directed to while on-the-go. To make the website
          compatible and adapt itself to devices with different resolutions and
          sizes, the responsive design will play an integral part in developing
          any web application or site.
        </p>
        <h1 className="text-2xl">What is responsive design?</h1>
        <p>
          When a website is designed and developed, the display qualities is
          rendered to a full screen monitor of a PC, which when viewed on a
          screen of different size or resolution needs readjustment by the user.
          To reduce the consequences of losing visitors or prospective clients
          and developers have devised a method by using the CSS that will
          automatically adjust webpage layouts for optimal content display for
          any screen size or resolution.
        </p>
        <h1 className="text-2xl">
          Responsiveness for better business performance
        </h1>
        <p>
          Experts predict mobile browsing will overtake desktop browsing over
          the next few years. Online businesses are now looking forward to
          adapting new strategies to render users a feature-rich experience
          using a responsive design. And since responsive design makes website
          compatible with devices of almost all sizes, enterprises can attract
          customers without any technical hindrances.
        </p>
        <h1 className="text-2xl">Responsive design for SEO</h1>
        <p>
          One single site to maintain means that SEO analysts have to build a
          single set of links, avoiding extra server load, site speed and
          maintenance issues. Since search engines does not optimize for search
          based on devices, the onus is on the SEO to redirect customers to the
          site to meet their device needs.
        </p>
      </div>
      <GeneralInformation />
      <Footer />
    </div>
  );
}
