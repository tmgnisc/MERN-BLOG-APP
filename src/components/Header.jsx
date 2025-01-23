import React, { useState } from "react";
import { images } from "../constants";
import { IoIosMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

const navItemsInfo = [
  { name: "Home" },
  { name: "Articles" },
  { name: "Pages" },
  { name: "Pricing" },
  { name: "Faq" },
];

const NavItem = ({ name }) => {
  return (
    <li className="relative group">
      <a
        href="/"
        className="px-4 py-2 text-base lg:text-sm font-medium text-dark-white lg:text-dark-soft hover:text-blue-500"
      >
        {name}
      </a>
      <span className="absolute transition-all duration-500 font-bold right-0 top-0 group-hover:right-[90%] opacity-0 group-hover:opacity-100 text-blue-500">
        {">"}
      </span>
    </li>
  );
};

const Header = () => {
  const [navIsVisible, setNavIsVisible] = useState(false);

  const toggleNavVisibility = () => {
    setNavIsVisible((prev) => !prev);
  };

  return (
    <section>
      <header className="container mx-auto px-5 flex justify-between py-4 items-center">
        {/* Logo Section */}
        <div>
          <img className="w-16" src={images.Logo} alt="Logo" />
        </div>

        {/* Menu Icon */}
        <div className="z-50 lg:hidden">
          {navIsVisible ? (
            <IoMdClose
              className="w-6 h-6 cursor-pointer"
              onClick={toggleNavVisibility}
              aria-label="Close Menu"
            />
          ) : (
            <IoIosMenu
              className="w-6 h-6 cursor-pointer"
              onClick={toggleNavVisibility}
              aria-label="Open Menu"
            />
          )}
        </div>

        {/* Navigation Menu */}
        <div
          className={`${
            navIsVisible ? "right-0 bg-dark-hard" : "-right-full"
          } lg:right-0 lg:bg-transparent transition-all duration-300 z-40 flex flex-col w-full lg:w-auto justify-center lg:justify-end lg:flex-row fixed top-0 bottom-0 lg:static gap-x-9 items-center`}
        >
          <ul className="flex flex-col lg:flex-row gap-x-5 gap-y-4 lg:gap-y-0 font-semibold">
            {navItemsInfo.map((item) => (
              <NavItem key={item.name} name={item.name} />
            ))}
          </ul>
          <button className="border-2 border-blue-500 px-6 py-2 rounded-full text-blue-500 font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300">
            Sign in
          </button>
        </div>
      </header>
    </section>
  );
};

export default Header;
