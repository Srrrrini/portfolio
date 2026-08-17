import {
  About,
  Contact,
  Hero,
  Life,
  Research,
  Tech,
  Works,
  StarsCanvas,
} from "../components";

const Homepage = () => {
  return (
    <div className="relative z-0 bg-primary">
      <Hero />
      <About />
      <Life />
      <Research />
      <Works />
      <Tech />

      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
    </div>
  );
};

export default Homepage;
