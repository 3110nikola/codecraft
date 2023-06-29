import React from "react";
import { Banner, Navbar, Footer, Autoincrement } from "../components";
import {
  aboutBanner,
  founded,
  employees,
  location,
  builtOver500,
  aboutImage,
  ccMedia,
  ccMarketing,
  ccMobile,
  bgYellow,
  forbes,
} from "../assets";
import { autoincrements } from "../constants";
import { Helmet } from "react-helmet";

export default function About() {
  return (
    <div>
      <Helmet>
        <title>About | Codecraft</title>
      </Helmet>
      <Navbar />
      <Banner
        heading="We Build Websites That Deliver Real Business Results"
        text="Our mission is to enable high-growth companies to realize the true potential of their most important digital asset"
        image={aboutBanner}
      />
      <div className="mx-auto max-w-7xl px-5 my-20">
        <h1 className="text-3xl text-center">
          Our clients see on average 40% of their total revenue originating from
          their website after working with us
        </h1>
        <div className="grid md:grid-cols-3 gap-10 py-20">
          {autoincrements.map((increment, index) => (
            <Autoincrement
              key={`increment-${index}`}
              max={increment.max}
              title={increment.title}
              plus={increment.plus}
              percent={increment.percent}
              x={increment.x}
            />
          ))}
        </div>
      </div>
      <section className="flex md:flex-row flex-col gap-10 max-w-7xl mx-auto px-5 items-center">
        <div className="basis-1/2 grid grid-cols-2 gap-5">
          <div className="p-2 md:p-10 flex-col flex items-center">
            <img src={founded} className="w-20" />
            <h1 className="text-4xl">2011</h1>
            <p className="text-secondary text-center">Founded in 2011</p>
          </div>
          <div className="p-2 md:p-10 flex-col flex items-center">
            <img src={employees} className="w-20" />
            <h1 className="text-4xl">92+</h1>
            <p className="text-secondary text-center">Employees</p>
          </div>
          <div className="p-2 md:p-10 flex-col flex items-center">
            <img src={location} className="w-20" />
            <h1 className="text-4xl">03</h1>
            <p className="text-secondary text-center">
              Located in Silicon Valley, Austin & Long Beach
            </p>
          </div>
          <div className="p-2 md:p-10 flex-col flex items-center">
            <img src={builtOver500} className="w-20" />
            <h1 className="text-4xl">500+</h1>
            <p className="text-secondary text-center">
              Built over 500 websites
            </p>
          </div>
        </div>
        <div className="basis-1/2">
          <img src={aboutImage} className="w-full" />
        </div>
      </section>
      <section
        className="bg-center bg-cover px-5 md:px-20 py-20 text-tertiary"
        style={{ backgroundImage: `url(${bgYellow})` }}
      >
        <div className="max-w-7xl mx-auto justify-between flex flex-col md:flex-row gap-10 md:gap-40">
          <div className="flex flex-col gap-5 text-center md:text-left">
            <h1 className="text-4xl">
              One <br /> Company. <br /> Many <br /> Divisions.
            </h1>
            <h2 className="text-xl">
              Ranked the No.1 web <br /> design firm by Clutch. co <br /> in
              Silicon Valley
            </h2>
          </div>
          <div className="flex flex-col gap-10 text-center md:text-left">
            <div className="flex flex-col md:flex-row gap-5 items-center">
              <img src={ccMedia} className="w-40" />
              <div>
                <h2 className="text-3xl">CODECRAFT MEDIA</h2>
                <p className="text-lg">
                  Full-service digital agency which builds amazing web
                  experiences for VC Funded Start Ups to Fortune 500 Companies
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-5 items-center">
              <img src={ccMobile} className="w-40" />
              <div>
                <h2 className="text-3xl">CODECRAFT MOBILE</h2>
                <p className="text-lg">
                  We are focused on building amazing products for our clients.
                  We develop on iOS and Android, as well as web apps that run on
                  your browser.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-5 items-center">
              <img src={ccMarketing} className="w-40" />
              <div>
                <h2 className="text-3xl">CODECRAFT MARKETING</h2>
                <p className="text-lg">
                  End-to-end digital marketing division focused on driving more
                  users, leads and sales.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col md:flex-row justify-center gap-10 px-10 md:px-20 xl:px-96 py-10 items-center">
        <div className="basis-1/3 md:-mt-28">
          <img
            src={forbes}
            className="md:w-full w-1/3 min-w-[200px] max-w-[300px] mx-auto invert"
          />
        </div>
        <blockquote
          before='"'
          className="flex py-20 flex-col relative gap-5 basis-2/3 before:content-[attr(before)] before:text-9xl before:absolute before:text-yellow-400 before:top-0"
        >
          <p>
            “Understanding who is coming to your site, why they are there, what
            they want to know about your product, and how they are getting to
            your site are instrumental to weaving a compelling company story
            that will urge site visitors to take action.”
          </p>
          <h3 className="text-secondary tracking-wider text-xs">
            CODECRAFT CEO
          </h3>
        </blockquote>
      </section>
      <Footer />
    </div>
  );
}
