import React from "react";
import { Navbar, Footer, Banner, Project } from "../components";
import { customersBanner } from "../assets";
import { projects } from "../constants";
import { Helmet } from "react-helmet";

export default function Customers() {
  return (
    <div>
      <Helmet>
        <title>Customers | Codecraft</title>
      </Helmet>
      <Navbar />
      <Banner
        heading="Our Work"
        text="Check out some of our projects. Here's a few of our awesome works samples."
        image={customersBanner}
      />
      <div className="mx-auto max-w-7xl grid sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-20 px-5 -mt-20 mb-40">
        {projects.map((project, index) => (
          <Project
            key={`project-${index}`}
            logo={project.logo}
            description={project.description}
            image={project.image}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}
