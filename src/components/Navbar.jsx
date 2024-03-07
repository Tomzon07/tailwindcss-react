import React, { useEffect, useState } from "react";
import logo from "../assets/Icon.svg";
import { FaXmark } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link, animateScroll as scroll } from "react-scroll";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
      window.addEventListener("scroll", handleScroll);
    };
    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  });
  const navItems = [
    { link: "Home", path: "home" },
    { link: "Services", path: "services" },
    { link: "About", path: "about" },
    { link: "Product", path: "product" },
    { link: "Testimonal", path: "testimonal" },
    { link: "FAQ", path: "faq" },
  ];
  return (
    <header className="w-full bg-white md:bg-transparent fixed top-0 left-0 right-0">
      <nav
        className={`py-4 lg:px-14 px-4${
          isSticky
            ? "sticky top-0 left-0 right-0 border-b bg-white duration-300 "
            : "transition-all duration-300"
        }`}
      >
        <div className="flex justify-between items-center text-base gap-8">
          <a
            href="/"
            className="text-2xl font-semibold flex items-center space-x-3"
          >
            <img
              alt="img"
              src={logo}
              className="w-10 inline-block items-center"
            />
            <span className="text-[#263238]">NEXCENT</span>
          </a>
          {/* nav items for large devices*/}
          <ul className=" md:flex space-x-12 hidden">
            {navItems.map(({ link, path }) => (
              <Link
                key={path}
                spy={true}
                offset={-100}
                className="cursor-pointer block text-base text-grey900 hover:text-BrandPrimary first:font-medium"
                smooth={true}
                to={path}
              >
                {link}
              </Link>
            ))}
          </ul>
          {/* btn for large devices */}
          <div className="hidden lg:flex items-center gap-6">

            <button className="text-BrandPrimary">Login</button>
            <button className="lg: bg-BrandPrimary px-2 py-1 rounded-sm text-white">
             Sign up
              <span>
                {/* <FaLongArrowAltRight /> */}
              </span>
            </button>
          </div>
        </div>
        {/* Menu btn for only mobile devices */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="float-end text-NeutralDGrey mt-[-1.5rem] ml-1 focus:outline-none focus:text-grey-500"
          >
            {isMenuOpen ? (
              <FaXmark className="h-6 w-6  " />
            ) : (
              <FaBars className="h-6 w-6  " />
            )}
          </button>
        </div>
        {/* Nav items for mobile devices */}
        <div
          className={`space-y-4 px-4 mt-16 py-7 bg-BrandPrimary ${
            isMenuOpen ? "block fixed top-0 left-0 right-0" : "hidden"
          }`}
        >
          {navItems.map(({ link, path }) => (
            <Link
              key={path}
              spy={true}
              offset={-100}
              className="cursor-pointer block text-base text-white hover:text-black first:font-medium"
              smooth={true}
              to={path}
            >
              {link}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
