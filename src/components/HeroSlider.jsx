import { useEffect, useState } from "react";
import Slide1 from "../assets/hero/slide1.jpg";
import Slide2 from "../assets/hero/slide2.jpg";
import Slide3 from "../assets/hero/slide4.jpg";

const slides = [
  {
    image: Slide1,
    title: "From Our Farms",
    subtitle: "To Your Hands",
  },
  {
    image: Slide2,
    title: "Freshly Grown",
    subtitle: "Lovingly Delivered",
  },
  {
    image: Slide3,
    title: "Nature’s Best",
    subtitle: "For Your Table",
  },
];

const HeroSlider = () => {
  const [index, setIndex] = useState(0);
  const [resetKey, setResetKey] = useState(0);

  const nextIndex = (index + 1) % slides.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(nextIndex);
      setResetKey((prev) => prev + 1);
    }, 5000); // 5s
    return () => clearInterval(timer);
  }, [index]);

  const current = slides[index];
  const nextSlide = slides[nextIndex];

  return (
    <div className="w-full h-screen relative overflow-hidden font-sans">

      {/* Previous Slide as Static Background */}
  <div className="absolute inset-0 z-0">
    <img
      src={slides[(index - 1 + slides.length) % slides.length].image}
      alt="Previous"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Animated Reveal Image */}
  <div key={resetKey} className="absolute inset-0 z-10 overflow-hidden">
    <img
      src={slides[index].image}
      alt="Current"
      className="w-full h-full object-cover reveal-image"
    />
  </div>

  {/* Text Overlay */}
  <div className="absolute top-[293px] left-[25px] md:top-[350px] md:left-[135px] text-white space-y-4 z-20">
    <p className="text-sm opacity-70">Welcome To TenTwenty Farms</p>
    <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
      {slides[index].title}
      <br />
      {slides[index].subtitle}
    </h1>
  </div>

      {/* Thumbnail */}
      {/* Mobile */}
      <div key={`thumb-mobile-${resetKey}`} className="absolute top-[632px] left-[25px] w-[115px] h-[115px] border-[0.5px] border-white/20 bg-transparent md:hidden z-20">
        {/* Trace border */}
        <div className="border-trace">
          <div className="border-top"></div>
          <div className="border-right"></div>
          <div className="border-bottom"></div>
          <div className="border-left"></div>
        </div>
        <button
          onClick={() => {
            setIndex(nextIndex);
            setResetKey((prev) => prev + 1);
          }}
          className="absolute top-[18.33px] left-[18.33px] w-[77.5px] h-[77.5px] overflow-hidden relative"
        >
          <img src={nextSlide.image} alt="Next Slide" className="w-full h-full object-cover" />
          <span className="absolute inset-0 flex items-center justify-center text-white text-base font-normal leading-[1.1] tracking-normal">
            Next
          </span>
        </button>
      </div>

      {/* Desktop */}
      <div key={`thumb-desktop-${resetKey}`} className="absolute top-[695px] left-[135px] w-[138px] h-[138px] border-[0.5px] border-white/50 bg-transparent hidden md:block z-20">
        <div className="border-trace">
          <div className="border-top"></div>
          <div className="border-right"></div>
          <div className="border-bottom"></div>
          <div className="border-left"></div>
        </div>
        <button
          onClick={() => {
            setIndex(nextIndex);
            setResetKey((prev) => prev + 1);
          }}
          className="absolute top-[22px] left-[22px] w-[93px] h-[93px] overflow-hidden relative"
        >
          <img src={nextSlide.image} alt="Next Slide" className="w-full h-full object-cover" />
          <span className="absolute inset-0 flex items-center justify-center text-white text-base font-normal leading-[1.1] tracking-normal">
            Next
          </span>
        </button>
      </div>

      {/* Slide Counter */}
      {/* Mobile */}
      <div className="absolute top-[682px] left-[181px] w-[167px] h-[15px] text-white text-sm flex items-center gap-[17px] md:hidden z-20">
        <span>{String(index + 1).padStart(2, "0")}</span>
        <div className="h-px bg-white opacity-50 flex-1"></div>
        <span>{String(slides.length).padStart(2, "0")}</span>
      </div>

      {/* Desktop */}
      <div className="hidden md:flex absolute top-[755px] left-[306px] w-[174px] h-[18px] text-white text-sm items-center gap-[17px] z-20">
        <span>{String(index + 1).padStart(2, "0")}</span>
        <div className="h-px bg-white opacity-50 flex-1"></div>
        <span>{String(slides.length).padStart(2, "0")}</span>
      </div>
    </div>
  );
};

export default HeroSlider;
