import {
  Brands,
  Work,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Marketing,
  Footer,
} from "../components";

const Home = () => {
  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
      <Brands />
      <Work />
      <Tech />
      <Marketing />
      <Feedbacks />
      <Footer />
    </div>
  );
};

export default Home;
