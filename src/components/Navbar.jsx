import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { shitalLogo, logo, menu, close } from "../assets";

const Navbar = () => {
  // const 
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);


  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary `}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          {/* <img src={shitalLogo} alt="logo" className="w-9 h-9 object-contain" /> */}
          <p className="text-white text-[18px] font-bold cursor-pointer flex ">
            Srinivas Chowdary Ramineni &nbsp;
            {/* <span className="sm:block hidden"> | Mechanical Engineer</span> */}
          </p>
        </Link>
        <ul className="list-none hidden sm:flex  gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
          
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              
            >
              <p><Link
                to={`/${link.id}`}
                onClick={() => {
                  setToggle(false);
                  setActive(link.title);
                  window.scrollTo(0, 0);
                }}
              >
                {link.title}
              </Link>
              </p>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? menu : close}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`/${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
