import Link from "next/link";
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="pt-8 w-10/12 mx-auto max-w-4xl">
      <ul className="flex justify-between items-center text-white">
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
