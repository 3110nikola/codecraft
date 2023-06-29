import React from "react";
import { Navbar, ContactForm, Banner, Footer } from "../components";
import { StarsCanvas } from "../components";
import { contactBanner } from "../assets";
import { Helmet } from "react-helmet";

function Contact() {
  return (
    <div>
      <Helmet>
        <title>Contact Us | Codecraft</title>
      </Helmet>
      <div className="relative z-0">
        <StarsCanvas />
        <Navbar />
        <Banner
          heading="Let's Talk"
          text="If you are looking at our work, reading this copy, we are already starting to connect. And isn’t that what a good client-agency relationship should do? Become apart of the team."
          image={contactBanner}
        />
        {/* <div className='relative z-0'>
            <ContactForm />
            <StarsCanvas />
          </div> */}
        <ContactForm />
        <Footer />
      </div>
    </div>
  );
}

export default Contact;
