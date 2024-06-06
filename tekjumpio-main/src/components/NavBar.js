import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
const routes = require("../utils/routes.json");

const NavBar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [dir, setDir] = useState(1);
  const handleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };
  const location = useLocation()

  const handleNavScroll = () => {
    var lastScrollTop = 0;
    window.addEventListener(
      "scroll",
      function () {
        var st = window.pageYOffset || document.documentElement.scrollTop;
        if (st > lastScrollTop) {
          // down
          setDir(-1);
        } else {
          // up
          setDir(1);
        }
        lastScrollTop = st <= 0 ? 0 : st;
      },
      false
    );
  }

  useEffect(() => {
    handleNavScroll()
    setMobileMenu(false)
  }, [location]);

  return (
    <nav
      className="bg-gray-900 w-full fixed z-40 px-4 transition-all ease-in-out duration-500"
      style={
        !mobileMenu
          ? dir === 1
            ? { minHeight: "7%" }
            : { minHeight: "7%", transform: "translateY(-70vh)" }
          : {}
      }
    >

      <div className="max-w-full px-10 mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex space-x-4">
            <div>
              <Link
                to="/"
                className="flex items-center py-5 text-gray-100 transition ease-linear duration-300"
              >
                <span className="font-bold bg-gradient-to-br from-indigo-400 to-red-500 bg-clip-text text-transparent text-2xl">TJ</span>
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-1">
              {routes.map((page) => {
                if (page.navbar) {
                  return (
                    <NavLink
                      to={page.to}
                      className="py-5 px-3 text-gray-300 hover:text-white hover:underline transition ease-linear duration-300"
                      activeClassName="underline"
                      key={page.to}
                    >
                      {page.name}
                    </NavLink>
                  );
                } else {
                  return null;
                }
              })}
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            <NavLink
              to="/register"
              className="py-2 px-10 multiGradient animate-animateGradient text-gray-100 rounded transition duration-300 text-center font-bold"
            >
              Register
            </NavLink>
          </div>
          <button
            className="flex flex-col items-center justify-center relative w-8 h-8 md:hidden"
            onClick={handleMobileMenu}
          >
            <span className={`top-5 block absolute w-full h-0.5 left-0 border-none outline-none rounded bg-gray-300 transition-all duration-300 transform ${mobileMenu ? "rotate-45 top-5" : ""}`}></span>
            <span className={`top-3 block absolute w-full h-0.5 left-0 border-none outline-none rounded bg-gray-300 transition-all duration-300 transform ${mobileMenu ? "-rotate-45 top-5" : ""}`}></span>
          </button>
        </div>


      </div>

      {/* MOBILE */}
      <div
        className="flex flex-col p-8 pt-0 md:hidden transition-all duration-300 overflow-hidden"
        style={
          mobileMenu
            ? { opacity: 1, height: "5%" }
            : { height: "0px", opacity: 0, padding: "0rem" }
        }
      >

        {routes.map((page) => {
          if (page.navbar) {
            return (
              <NavLink
                to={page.to}
                className="p-2 my-1 text-gray-300 rounded hover:bg-gray-600 hover:underline transition ease-linear duration-100 after-arrow"
                activeClassName="underline"
                key={page.to}
              >
                {page.name}
              </NavLink>
            );
          } else {
            return null;
          }
        })}
        <NavLink
          to="/register"
          className="py-2 px-3  text-gray-100 multiGradient animate-animateGradient rounded transition duration-300 text-center font-bold"
        >
          Register
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
