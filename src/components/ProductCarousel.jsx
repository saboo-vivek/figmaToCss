import { useRef, useState } from "react";
import product1 from "../assets/products/product1.jpg";
import product2 from "../assets/products/product2.jpg";
import product3 from "../assets/products/product3.jpg";
import product4 from "../assets/products/product4.jpg";
const images = [
  {
    image: product1,
    title: "Client 1",
    location: "Dubai, United Arab Emirates",
  },
  {
    image: product2,
    title: "Client 2",
    location: "Abu Dhabi, United Arab Emirates",
  },
  { image: product3, title: "Client 3", location: "Riyadh, Saudi Arabia" },
  { image: product4, title: "Client 4", location: "Doha, Qatar" },
];
const ProductCarousel = ({ onChange }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const startX = useRef(null);
  const handleDragStart = (e) => {
    startX.current = e.touches ? e.touches[0].clientX : e.clientX;
  };
  const handleDragEnd = (e) => {
    const endX = e.changedTouches ? e.changedTouches[0].clientX : e.clientX;
    const diff = endX - startX.current;
    if (Math.abs(diff) > 50) {
      diff > 0 ? goToPrev() : goToNext();
    }
  };
  const goToNext = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
    onChange?.(newIndex);
  };
  const goToPrev = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
    onChange?.(newIndex);
  };
  const getImageByOffset = (offset) => {
    return images[(currentIndex + offset + images.length) % images.length];
  };
  return (
    <div className="w-full  flex items-center justify-center relative px-4">
      
      {/* Flex Container with large fixed width */}
      <div className="flex items-center justify-center gap-[100px]">
        
        {/* Left Image */}
        <img
          src={getImageByOffset(-1).image}
          alt="left"
          className="w-[435px] h-[619px] object-cover flex-shrink-0 hidden md:block"
          style={{
            transform: "rotate(-15deg)",
            transformOrigin: "bottom right",
          }}
          draggable={false}
        />
        {/* Center Image */}
        <img
          src={getImageByOffset(0).image}
          alt="center"
          className="w-[435px] h-[619px] object-cover flex-shrink-0 z-10"
          onMouseDown={handleDragStart}
          onMouseUp={handleDragEnd}
          onTouchStart={handleDragStart}
          onTouchEnd={handleDragEnd}
          draggable={false}
        />
        {/* Right Image */}
        <img
          src={getImageByOffset(1).image}
          alt="right"
          className="w-[435px] h-[619px] object-cover flex-shrink-0 hidden md:block"
          style={{ transform: "rotate(15deg)", transformOrigin: "bottom left" }}
          draggable={false}
        />
      </div>
    </div>
  );
};
export default ProductCarousel;
