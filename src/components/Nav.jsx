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
      <nav
        className="Navbar md:py-4 py-2 px-8  w-full z-1000  bg-accent 
        drop-shadow-lg"
      >
        {/* className="Navbar py-4 px-8 w-full z-1000  bg-accent drop-shadow-lg" */}

        {/* menu - open/close */}
        <div
          className={`${navBarOpen ? "Burger" : "Close"} 
          hidden md:flex md:h-[60px]  justify-between items-center 
          lowercase m-auto w-[30rem]`}
          onClick={() => setNavBarOpen(false)}
        >
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
            <p className="md:hover:text-[#f2f2f2] list-none font-bold  hover:scale-110 hover:text-accent md:text-lg text-xl hover:animate-pulse transition">
              About
            </p>
          </HashLink>
          {/* projects */}
          <HashLink
            to="/portfolio#projects"
            smooth
            onClick={() => setNavBarOpen(false)}
          >
            <p className="md:hover:text-[#f2f2f2] list-none font-bold hover:scale-110 hover:text-accent md:text-lg text-xl  hover:animate-pulse transition">
              Projects
            </p>
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
            href="https://drive.google.com/file/d/1Yc3BprZVNJT9SIMwwnTYuzJj45FYFKHR/view?usp=sharing"
            target="_blank"
          >
            <p className="md:hover:text-[#f2f2f2] list-none font-bold hover:scale-110 hover:text-accent md:text-lg text-xl hover:animate-pulse transition">
              Resume
            </p>
          </a>
          {/* contact */}
          <HashLink
            to="/portfolio#contact"
            smooth
            onClick={() => setNavBarOpen(false)}
          >
            {" "}
            <p className="md:hover:text-[#f2f2f2] list-none font-bold hover:scale-110 hover:text-accent md:text-lg text-xl hover:animate-pulse transition-all">
              Contact
            </p>
          </HashLink>

          {/* socials - hide at desktop  */}
          <div className="md:hidden flex text-2xl gap-4">
            <a href="https://github.com/oswhytecodes">
              {" "}
              <i className="fa-brands fa-github hover:scale-110 transition hover:text-accent"></i>
            </a>
            <a href="https://www.linkedin.com/in/orincywhyte/">
              {" "}
              <i className="fa-brands fa-linkedin-in hover:scale-110 transition hover:text-accent"></i>
            </a>
            <a href="https://www.instagram.com/oswhytecodes/">
              {" "}
              <i className="fa-brands fa-instagram hover:scale-110 transition hover:text-accent"></i>
            </a>
            <a href="https://www.youtube.com/channel/UC_3pNhSyYoZk3Z201kZvgsg">
              {" "}
              <i className="fa-brands fa-youtube hover:scale-110 transition hover:text-accent"></i>
            </a>
          </div>
        </div>

        {/* mobile nav */}
        <div className="relative flex md:hidden cursor-pointer justify-between items-center ">
          <Link to="/">
            {" "}
            <img className="w-[50px]" src={Logo} alt="Logo" />{" "}
          </Link>

          <i
            onClick={handleClick}
            className="hover:animate-pulse fa-solid fa-bars text-2xl"
          ></i>
        </div>
      </nav>
    </header>
  );
};
