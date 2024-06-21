import Link from "next/link";
import React from "react";

const Header: React.FC = () => {
  return (
    <div className="pt-8 w-11/12 mx-auto">
      <ul className="flex justify-around items-center text-white">
        <li className="font-merriweather transform transition-transform hover:scale-110 text-sm sm:text-xl md:text-2xl">
          <Link href="/" className="hover:opacity-50">
            HOME
          </Link>
        </li>
        <li className="font-merriweather transform transition-transform hover:scale-110 text-sm sm:text-xl md:text-2xl">
          <Link href="/about" className="hover:opacity-50">
            ABOUT
          </Link>
        </li>
        <li className="font-merriweather transform transition-transform hover:scale-110 text-sm sm:text-xl md:text-2xl">
          <Link href="/skills" className="hover:opacity-50">
            SKILLS
          </Link>
        </li>
        <li className="font-merriweather transform transition-transform hover:scale-110 text-sm sm:text-xl md:text-2xl">
          <Link href="/contact" className="hover:opacity-50">
            CONTACT
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
