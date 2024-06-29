import Link from "next/link";
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="absolute top-custom w-full mx-auto">
      <ul className="flex justify-between items-center text-white w-10/12 max-w-4xl mx-auto">
        <li className="font-menu transform transition-transform hover:scale-110 text-sm sm:text-xl duration-500">
          <Link href="/" className="hover:opacity-50 duration-500">
            HOME
          </Link>
        </li>
        <li className="font-menu transform transition-transform hover:scale-110 text-sm sm:text-xl duration-500">
          <Link href="/about" className="hover:opacity-50 duration-500">
            ABOUT
          </Link>
        </li>
        <li className="font-menu transform transition-transform hover:scale-110 text-sm sm:text-xl duration-500">
          <Link href="/skills" className="hover:opacity-50 duration-500">
            SKILLS
          </Link>
        </li>
        <li className="font-menu transform transition-transform hover:scale-110 text-sm sm:text-xl duration-500">
          <Link href="/contact" className="hover:opacity-50 duration-500">
            CONTACT
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
