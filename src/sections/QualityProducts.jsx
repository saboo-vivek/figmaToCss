import { useState } from "react";
import ProductCarousel from "../components/ProductCarousel";

const QualityProduct = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleIndexChange = (newIndex) => {
    setCurrentIndex(newIndex);
  };

  const productTitles = [
    "Client 1",
    "Flora Delight",
    "Blossom Bay",
    "Tropical Touch",
  ];

  const productLocations = [
    "Dubai, United Arab Emirates",
    "Amsterdam, Netherlands",
    "Kyoto, Japan",
    "Bali, Indonesia",
  ];

  return (
    <section className="bg-[#fef9f5] w-full min-h-screen relative pt-36 pb-20  overflow-hidden">
      {/* Heading */}
      <div className="w-full text-center mb-8">
        <h2 className="font-normal text-[56px] leading-[72px] tracking-[-1px] text-black font-['Work_Sans']">
          Quality Products
        </h2>
      </div>

      {/* Subtext */}
      <div className="w-full text-center mb-20">
        <p className="font-normal text-[24px] leading-[100%] text-black font-['Work_Sans'] max-w-[748px] mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      {/* Carousel */}
      <div className=" ">
        <div className=" relative w-full h-auto flex justify-center items-center mx-auto overflow-x-clip  py-10">
          <ProductCarousel onChange={handleIndexChange} />
        </div>
      </div>

      {/* Image Title */}
      <div className="mt-20 text-center">
        <h3 className="font-normal text-[36px] leading-[60px] tracking-[-1px] text-black font-['Work_Sans']">
          {productTitles[currentIndex]}
        </h3>
      </div>

      {/* Image Location */}
      <div className="mt-4 text-center">
        <p className="font-normal text-[24px] leading-[100%] text-[#7A7777] font-['Work_Sans']">
          {productLocations[currentIndex]}
        </p>
      </div>
    </section>
  );
};

export default QualityProduct;
