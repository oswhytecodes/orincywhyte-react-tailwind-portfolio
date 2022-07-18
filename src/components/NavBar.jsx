import React from "react";
import { Link } from "react-router-dom";
import { fallDown as Menu } from "react-burger-menu";
import Logo from "../favicon.png";

export const NavBar = () => {
  const handleClick = () => {};
  return (
    <header className="md:hidden sticky top-0">
      <div className="bg-accent p-4">
        <div className="BURGER flex justify-between items-center md:hidden">
          <Link to="/">
            {" "}
            <img className="w-[50px]" src={Logo} alt="Logo" />{" "}
          </Link>
          <i onClick={handleClick} className="fa-solid fa-bars text-2xl"></i>
        </div>
      </div>
      <Menu noOverlay width={"100%"} height={"100%"}>
        <div className="mt-0  bg-[#fff] h-screen">
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
      </Menu>
    </header>
  );
};
