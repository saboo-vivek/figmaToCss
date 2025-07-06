import HeroSlider from "../components/HeroSlider";
import Navbar from "../components/Navbar";

const Hero = () => {
  return (
    <div className="relative">
      <HeroSlider />
      <Navbar /> {/* Placed inside the Hero */}
    </div>
  );
};

export default Hero;
