// const Navbar = () => {
//   return (
//     <nav className="absolute top-[10px] left-[10px] right-[10px] z-10">
//       <div className="bg-white flex items-center justify-between px-6 py-4 shadow-md">
//         {/* Left nav links */}
//         <ul className="flex gap-8 text-sm font-medium text-black">
//           <li className="cursor-pointer hover:text-gray-600">About</li>
//           <li className="cursor-pointer hover:text-gray-600">News</li>
//           <li className="cursor-pointer hover:text-gray-600">Services</li>
//           <li className="cursor-pointer hover:text-gray-600">Our Team</li>
//           <li className="cursor-pointer hover:text-gray-600">Make Enquiry</li>
//         </ul>

//         {/* Right: Contact us button */}
//         <button className="border border-black px-5 py-[10px] text-sm flex items-center gap-2 hover:bg-black hover:text-white transition rounded-none">
//           Contact us
//           <span className="inline-block">→</span>
//         </button>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import { useState } from "react";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ["About", "News", "Services", "Our Team", "Make Enquiry"];

  return (
    <nav className="absolute top-[10px] left-[10px] right-[10px] z-10 ">
      <div className="bg-white flex items-center justify-between px-8 py-4 shadow-md">
        {/* 👇 Mobile Contact Us Button - left side */}
        <button className="flex md:hidden border border-black px-4 py-2 text-sm items-center gap-2 hover:bg-black hover:text-white transition rounded-none">
          Contact us
          <span className="inline-block">→</span>
        </button>

        {/* 👇 Desktop Nav */}
        <ul className="hidden md:flex gap-8 text-sm font-medium text-black">
          {navItems.map((item, i) => (
            <li key={i} className="cursor-pointer hover:text-gray-600 transition">
              {item}
            </li>
          ))}
        </ul>

        {/* 👇 Hamburger Menu Button - right on mobile */}
        <button
          className="text-2xl md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
        </button>

        {/* 👇 Desktop Contact Us Button - right side */}
        <button className="hidden md:flex border border-black px-5 py-[10px] text-sm items-center gap-2 hover:bg-black hover:text-white transition rounded-none">
          Contact us
          <span className="inline-block">→</span>
        </button>
      </div>

      {/* 👇 Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md mt-1 px-6 py-4">
          <ul className="flex flex-col gap-4 text-sm font-medium text-black">
            {navItems.map((item, i) => (
              <li key={i} className="cursor-pointer hover:text-gray-600 transition">
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;


