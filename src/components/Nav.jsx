import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
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
      {/* move the menu function here */}

      {/* className="Navbar py-4 px-8 w-full z-1000  bg-accent drop-shadow-lg" */}

      {/* menu - open/close */}
      <nav
        className={`
          md:flex h-[82px] md:justify-between md:items-center 
          lowercase m-auto md:py-4 md:px-20 z-1000 bg-accent 
          drop-shadow-lg`}
        onClick={() => setNavBarOpen(false)}
      >
        {/* mobile nav */}
        <div className={`${navBarOpen ? "Burger" : "Close"}  relative flex pt-2 px-8  md:hidden cursor-pointer justify-between items-center `}>
        {/* <div className=" relative flex pt-2 px-8  md:hidden cursor-pointer justify-between items-center "> */}
          <Link to="/">
            {" "}
            <img className="w-[50px]" src={Logo} alt="Logo" />{" "}
          </Link>
          <i
            onClick={handleClick}
            className="hover:animate-pulse fa-solid fa-bars text-2xl"
          ></i>
        </div>

        <i
          onClick={() => setNavBarOpen(false)}
          className="cursor-pointer self-end transition -translate-x-8 pb-10 translate-y-6 justify-self-start md:hidden flex  fa-solid fa-x text-2xl"
        ></i>
        {/* about */}

        <HashLink
          to="/portfolio#about"
          smooth
          onClick={() => setNavBarOpen(false)}
        >
          <li className="md:hover:text-[#f2f2f2]  hover:scale-110 hover:text-accent md:text-lg text-xl hover:animate-pulse transition">
            About
          </li>
        </HashLink>
        {/* projects */}
        <HashLink
          to="/portfolio#projects"
          smooth
          onClick={() => setNavBarOpen(false)}
        >
          <li className="md:hover:text-[#f2f2f2] hover:scale-110 hover:text-accent md:text-lg text-xl  hover:animate-pulse transition">
            Projects
          </li>
          {/* logo */}
        </HashLink>

        <HashLink className="md:flex hidden" to="/">
          {" "}
          <img
            className="md:w-[50px] md:hover:animate-bounce"
            src={Logo}
            alt="Logo"
          />{" "}
        </HashLink>
        {/* resume */}
        <a
          href="https://drive.google.com/file/d/1jDrCvf-rdzifUX_sHMk_Hu5tZWEowyVO/view?usp=sharing"
          target="_blank"
        >
          <li className="md:hover:text-[#f2f2f2] hover:scale-110 hover:text-accent md:text-lg text-xl hover:animate-pulse transition">
            Resume
          </li>
        </a>
        {/* contact */}
        <HashLink
          to="/portfolio#contact"
          smooth
          onClick={() => setNavBarOpen(false)}
        >
          {" "}
          <li className="md:hover:text-[#f2f2f2] hover:scale-110 hover:text-accent md:text-lg text-xl hover:animate-pulse transition-all">
            Contact
          </li>
        </HashLink>

        {/* socials - hide at desktop  */}
        <div className="md:hidden flex text-2xl gap-4">
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
