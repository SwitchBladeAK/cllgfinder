import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const Navbar = ({ item1, item2 }) => {
  const pathname = usePathname();
  
  return (
    <div className="bg-white shadow-md">
      <div className="bg-[#784bcc] text-xl w-full h-16 flex items-center justify-between px-4 md:px-8">
        <div className="flex items-center">
          <div className="relative w-20 md:w-32 h-12">
            <a href="/"><img
              src="https://res.cloudinary.com/dmcqcr9ek/image/upload/v1724591031/gez5aewlhod6r76utgyr.png"
              alt="Logo"
              className="object-contain h-full w-full"
            /></a>
          </div>
        </div>
        <div className="absolute left-1/2 transform -translate-x-1/2 flex gap-8 text-lg text-white">
          <Link
            href="/"
            className={`${
              pathname === "/" ? "font-bold border-b-2 border-white" : "hover:underline cursor-pointer"
            }`}
          >
            {item1}
          </Link>
          <Link
            href="/scholarships"
            className={`${
              pathname === "/scholarships" ? "font-bold border-b-2 border-white" : "hover:underline cursor-pointer"
            }`}
          >
            {item2}
          </Link>
        </div>

        <div className="flex items-center gap-4">
        </div>
      </div>
    </div>
  );
};

export default Navbar;
