import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillYoutube,
  AiFillTwitterSquare,
  AiFillLinkedin,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { navFooterLinks } from "../constants";
import { services } from "../constants";

const Footer = () => {
  return (
    <div className="flex flex-col gap-5 items-center">
      <div className="flex gap-2">
        <Link to="#">
          <AiFillFacebook className="hover:text-yellow-400" size={40} />
        </Link>
        <Link to="#">
          <AiFillInstagram className="hover:text-yellow-400" size={40} />
        </Link>
        <Link to="#">
          <AiFillYoutube className="hover:text-yellow-400" size={40} />
        </Link>
        <Link to="#">
          <AiFillTwitterSquare className="hover:text-yellow-400" size={40} />
        </Link>
        <Link to="#">
          <AiFillLinkedin className="hover:text-yellow-400" size={40} />
        </Link>
      </div>
      <div className="flex gap-5 flex-col md:flex-row">
        <div className="flex flex-col basis-1/3 text-center">
          <h1 className="text-xl font-bold">Quick Links</h1>
          {navFooterLinks.map((link, index) => (
            <Link
              key={`footer-${index}`}
              className="hover:underline"
              to={link.href}
            >
              {link.title}
            </Link>
          ))}
        </div>
        <div className="flex flex-col basis-1/3 text-center">
          <h1 className="text-xl font-bold">Our Services</h1>
          {services.map((service, index) => (
            <Link key={`footer-service-${index}`} className="hover:underline" to={service.link}>
              {service.title}
            </Link>
          ))}
        </div>
        <div className="flex flex-col basis-1/3 text-center">
          <h1 className="text-xl font-bold">Address</h1>
          <p>Codecraft Web Design Firm</p>
          <p>8000 Avalon Blvd, Ste 100, Alpharetta, GA 30009</p>
          <p>Dallas, 5550 Granite Parkway, Ste 245 Plano, TX 75024</p>
          <p>(678) 548-17845</p>
        </div>
      </div>
      <p className="p-5 text-yellow-400">&copy; Codecraft 2023</p>
    </div>
  );
};

export default Footer;
