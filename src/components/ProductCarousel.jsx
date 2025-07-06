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
  const [showCursor, setShowCursor] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

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
            transform: "rotate(-15deg) translateY(10px)",
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
          onMouseEnter={() => setShowCursor(true)}
          onMouseLeave={() => setShowCursor(false)}
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            setCursorPos({
              x: e.clientX - rect.left,
              y: e.clientY - rect.top,
            });
          }}
          style={{ cursor: "none" }} // hide default cursor
        />
        {showCursor && (
          <div
            className="absolute pointer-events-none z-20"
            style={{
              top: `calc(50% - 309.5px)`, // Half height of image to align
              left: `calc(50% - 217.5px)`, // Half width of image to align
              transform: `translate(${cursorPos.x - 40}px, ${
                cursorPos.y - 40
              }px)`,
            }}
          >
            <div className="w-16 h-16 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white text-[12px] font-medium select-none">
              Drag
            </div>
          </div>
        )}

        {/* Right Image */}
        <img
          src={getImageByOffset(1).image}
          alt="right"
          className="w-[435px] h-[619px] object-cover flex-shrink-0 hidden md:block"
          style={{
            transform: "rotate(15deg) translateY(10px)",
            transformOrigin: "bottom left",
          }}
          draggable={false}
        />
      </div>
    </div>
  );
};
export default ProductCarousel;
