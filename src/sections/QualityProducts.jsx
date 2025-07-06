import { useState } from "react";
import { motion } from "framer-motion";
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
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false, amount: 0.1  }}
      className="bg-[#fef9f5] w-full min-h-screen relative pt-36 pb-20 overflow-hidden"
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.1  }}
        className="w-full text-center mb-8"
      >
        <h2 className="font-normal text-[56px] leading-[72px] tracking-[-1px] text-black font-['Work_Sans']">
          Quality Products
        </h2>
      </motion.div>

      {/* Subtext */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: false, amount: 0.1  }}
        className="w-full text-center mb-20"
      >
        <p className="font-normal text-[24px] leading-[100%] text-black font-['Work_Sans'] max-w-[748px] mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </motion.div>

      {/* Carousel */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        viewport={{ once: false, amount: 0.1  }}
        className="relative max-w-[1300px] h-auto flex justify-center items-center mx-auto overflow-x-clip py-10"
      >
        <ProductCarousel onChange={handleIndexChange} />
      </motion.div>

      {/* Image Title */}
      <motion.div
        key={productTitles[currentIndex]} // trigger reanimation on index change
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mt-20 text-center"
      >
        <h3 className="font-normal text-[36px] leading-[60px] tracking-[-1px] text-black font-['Work_Sans']">
          {productTitles[currentIndex]}
        </h3>
      </motion.div>

      {/* Image Location */}
      <motion.div
        key={productLocations[currentIndex]}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-4 text-center"
      >
        <p className="font-normal text-[24px] leading-[100%] text-[#7A7777] font-['Work_Sans']">
          {productLocations[currentIndex]}
        </p>
      </motion.div>
    </motion.section>
  );
};

export default QualityProduct;
