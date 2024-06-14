import React from "react";

const Header: React.FC = () => {
  return (
    <div className="pt-8 w-11/12 mx-auto">
      <ul className="flex justify-around items-center text-white">
        <li className="font-merriweather">ABOUT</li>
        <li className="font-merriweather">SKILLS</li>
        <li className="font-merriweather">CONTACT</li>
      </ul>
    </div>
  );
};

export default Header;
