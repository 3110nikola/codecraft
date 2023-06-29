import React from "react";
import { Navbar, Banner, ServiceFlex, Footer } from "../components";
import { servicesBanner } from "../assets";
import { services } from "../constants";
import { Helmet } from "react-helmet";

export default function Services() {
  return (
    <div>
      <Helmet>
        <title>Services | Codecraft</title>
      </Helmet>
      <Navbar />
      <Banner
        heading="Our Services"
        text='Our full-service creative and digital marketing agency, specializing in custom design and development for businesses that feel their branding strategy is "coasting" at best. Codecraft provides custom Web / Interactive, Marketing, Custom Graphic / Logo Design, Branding, Advertising, Media, Mobile Design and Strategic Planning to clients in high-tech B2B, B2C, consulting, security and non-profit. We have been nationally ranked as one of the best agencies.'
        image={servicesBanner}
      />
      <div className="flex flex-col gap-10 py-20">
        {services.map((service, index) => (
          <ServiceFlex
            index={index}
            key={`service-${index}`}
            heading={service.title}
            text={service.text}
            image={service.image}
            link={service.link}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}
