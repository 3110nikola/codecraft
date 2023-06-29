import React from "react";
import {
  Navbar,
  Banner,
  Marketing,
  ContactForm,
  Footer,
  StarsCanvas,
} from "../components";
import { blogBanner } from "../assets";
import { Helmet } from "react-helmet";

function Blog() {
  return (
    <div>
      <Helmet>
        <title>Blog | Codecraft</title>
      </Helmet>
      <Navbar />
      <Banner
        heading="Codecraft Blog"
        text="It’s hard to stay up to date on the best practices in web design and digital marketing, but if you want to be the best inbound marketing agency (and we do!), you make it a priority."
        image={blogBanner}
      />
      <Marketing />
      <div className="relative z-0">
        <StarsCanvas />
        <ContactForm />
        <Footer />
      </div>
    </div>
  );
}

export default Blog;
