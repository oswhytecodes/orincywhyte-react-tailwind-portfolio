import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Logo from "../favicon.png";

export const NavBar = () => {
  const [navBarOpen, setNavBarOpen] = useState(false);
  const [toggle, setToggle] = useState(true);
  const handleClick = () => {
    setNavBarOpen((prev) => !prev);
  };
  return (
    <header
      className="md:px-32 py-2 px-6 bg-accent 
      sticky z-5000 h-[76px] transition"
    >
      <nav
        title="Menu"
        className={`${navBarOpen ? "Burger" : "Close"}
        flex justify-between items-center w-full
        
        `}
      >
        <img
          className={`${navBarOpen ? "hidden" : "block"} w-[60px] md:hidden 
          flex`}
          src={Logo}
          alt="Logo"
        />

        {/* burger and X icons */}
        {navBarOpen ? (
          <i
            onClick={handleClick}
            className="absolute right-8 top-6 fa-solid fa-x text-2xl
            md:hidden cursor-pointer"
          ></i>
        ) : (
          <i
            onClick={handleClick}
            className="fa-solid fa-bars text-2xl
            md:hidden absolute right-8 cursor-pointer"
          ></i>
        )}
        {/* the end | burger and X icons */}

        <li
          className={`${navBarOpen ? "block" && "pt-28" : "hidden"}   md:block`}
        >
          about
        </li>
        <li className={`${navBarOpen ? "block" : "hidden"} md:block`}>
          {" "}
          projects
        </li>
        <img className="w-[60px] hidden md:block" src={Logo} alt="" />
        <li className={`${navBarOpen ? "block" : "hidden"} md:block`}>
          {" "}
          resume
        </li>
        <li className={`${navBarOpen ? "block" : "hidden"} md:block`}>
          {" "}
          contact
        </li>

        <div
          className={` ${navBarOpen ? "block" : "hidden"}
          flex text-2xl gap-4`}
        >
          <a href="https://github.com/oswhytecodes">
            {" "}
            <li>
              {" "}
              <i className="fa-brands fa-github hover:scale-110 transition hover:text-accent"></i>
            </li>
          </a>
          <a href="https://www.linkedin.com/in/orincywhyte/">
            {" "}
            <li>
              {" "}
              <i className="fa-brands fa-linkedin-in hover:scale-110 transition hover:text-accent"></i>
            </li>
          </a>
          <a href="https://www.instagram.com/oswhytecodes/">
            {" "}
            <li>
              {" "}
              <i className="fa-brands fa-instagram hover:scale-110 transition hover:text-accent"></i>
            </li>
          </a>
          <a href="https://www.youtube.com/channel/UC_3pNhSyYoZk3Z201kZvgsg">
            {" "}
            <li>
              {" "}
              <i className="fa-brands fa-youtube hover:scale-110 transition hover:text-accent"></i>
            </li>
          </a>
        </div>
      </nav>
    </header>
  );
};
