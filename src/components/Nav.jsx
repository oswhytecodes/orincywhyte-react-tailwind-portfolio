import React from "react";
import { Link } from "react-router-dom";
import { fallDown as Menu } from 'react-burger-menu'
import Logo from "../favicon.png";

export const Nav = () => {
  const handleClick = () => {
    console.log("hey");
  };
  return (
    <header  className="sticky top-0 left-0">
      <nav className="py-4 px-8  w-full  z-50  bg-accent drop-shadow-lg">
        <div className="hidden md:flex justify-between items-center lowercase m-auto w-[30rem]">
          <a href="#about"><li className="hover:text-[#f2f2f2] hover:animate-pulse transition" >About</li></a>
          <a href="#projects"><li className="hover:text-[#f2f2f2] hover:animate-pulse transition">Projects</li></a>
          <Link to="/">
            {" "}
            <img className="w-[50px] hover:animate-bounce" src={Logo} alt="Logo" />{" "}
          </Link>
         <a href="https://drive.google.com/file/d/1jDrCvf-rdzifUX_sHMk_Hu5tZWEowyVO/view?usp=sharing"><li className="hover:text-[#f2f2f2] hover:animate-pulse transition">Resume</li></a> 
         <a href="#footer"> <li className="hover:text-[#f2f2f2] hover:animate-pulse transition">Contact</li></a>
        </div>


        <div className="flex justify-between items-center md:hidden">
          <Link to="/">
            {" "}
            <img className="w-[50px]" src={Logo} alt="Logo" />{" "}
          </Link>
          <i onClick={handleClick} className="fa-solid fa-bars text-2xl"></i>
        </div>
      </nav>

      {/* <Menu noOverlay width={"100%"}>
        <div className="mt-0 pt-0 ml-0 bg-[#fff] h-screen ">
          <div className="text-right pr-6 pt-4">
            <i onClick={handleClick} className="fa-solid fa-x text-2xl"></i>
          </div>
          <div className="flex flex-col pt-28 justify-center items-center font-serif text-2xl gap-10">
            <a className="menu-item" href="">
              About
            </a>
            <a className="menu-item" href="">
              Projects
            </a>
            <a className="menu-item" href="">
              Resume
            </a>
            <a className="menu-item" href="">
              Contact
            </a>
          </div>
        </div>
      </Menu> */}
    </header>
  );
};
