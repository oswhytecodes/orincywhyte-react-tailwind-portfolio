import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { fallDown as Menu } from "react-burger-menu";
import Logo from "../favicon.png";

export const Nav = () => {
  const [navBarOpen, setNavBarOpen] = useState(false);
  // const [toggle, setToggle ] = useState('')
  // click toggle
  const handleClick = () => {
    setNavBarOpen((prev) => !prev);
    console.log();
  };

  return (
    <header className="sticky top-0 left-0">
      {/* navbar */}
      <nav
        className="py-4 px-8 w-full  z-50  bg-accent 
      drop-shadow-lg"
      >
        {/* <div className="Burger hidden md:flex justify-between items-center lowercase m-auto w-[30rem]"> */}
        <div
          className={`${navBarOpen ? "Burger" : "Close"} 
          hidden md:flex justify-between items-center 
          lowercase m-auto w-[30rem]`}
          // onClick={() => setNavBarOpen(false)}
        >
          <i
            onClick={() => setNavBarOpen(false)}
            className="cursor-pointer self-end transition -translate-x-8 pb-10 translate-y-6 justify-self-start md:hidden flex  fa-solid fa-x text-2xl"
          ></i>
          {/* about */}

          <a href="#about" onClick={() => setNavBarOpen(false)}>
            <li className="md:hover:text-[#f2f2f2]  hover:scale-110 hover:text-accent text-xl hover:animate-pulse transition">
              About
            </li>
          </a>
          {/* projects */}
          <a href="#projects" onClick={() => setNavBarOpen(false)}>
            <li className="md:hover:text-[#f2f2f2] hover:scale-110 hover:text-accent text-xl  hover:animate-pulse transition">
              Projects
            </li>
            {/* logo */}
          </a>
          <Link className="md:flex hidden" to="/">
            {" "}
            <img
              className="md:w-[50px] md:hover:animate-bounce"
              src={Logo}
              alt="Logo"
            />{" "}
          </Link>
          {/* resume */}
          <a
            href="https://drive.google.com/file/d/1jDrCvf-rdzifUX_sHMk_Hu5tZWEowyVO/view?usp=sharing"
            target="_blank"
          >
            <li className="md:hover:text-[#f2f2f2] hover:scale-110 hover:text-accent text-xl hover:animate-pulse transition">
              Resume
            </li>
          </a>
          {/* contact */}
          <a href="#footer" onClick={() => setNavBarOpen(false)}>
            {" "}
            <li className="md:hover:text-[#f2f2f2] hover:scale-110 hover:text-accent text-xl hover:animate-pulse transition">
              Contact
            </li>
          </a>
        </div>

        {/* mobile nav */}
        <div className="Mobile relative flex md:hidden cursor-pointer justify-between items-center ">
          <Link to="/">
            {" "}
            <img className="w-[50px]" src={Logo} alt="Logo" />{" "}
          </Link>

          <i
            onClick={handleClick}
            className="NavMenu hover:animate-pulse fa-solid fa-bars text-2xl"
          ></i>
        </div>
      </nav>
    </header>
  );
};
