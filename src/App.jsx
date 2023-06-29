import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Home,
  Services,
  Customers,
  About,
  Contact,
  Blog,
  BrandCredibility,
  GenerateLeads,
  CustomerFocused,
  WebDesign,
  UiUx,
  MobileDesign,
  Branding,
  GraphicDesign,
} from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/interactive" element={<WebDesign />} />
        <Route path="/services/ui-ux" element={<UiUx />} />
        <Route path="/services/mobile" element={<MobileDesign />} />
        <Route path="/services/branding" element={<Branding />} />
        <Route path="/services/design" element={<GraphicDesign />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/brand-credibility" element={<BrandCredibility />} />
        <Route path="/blog/generate-leads" element={<GenerateLeads />} />
        <Route path="/blog/customer-focused" element={<CustomerFocused />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
