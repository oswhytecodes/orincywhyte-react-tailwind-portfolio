import React from "react";
import gridData from "../data";
import MovingImage from "/images/design.webp";
import { ButtonPrim } from "./ButtonPrim";
import { ButtonSec } from "./ButtonSec";

export const Grid = () => {
  let grid = gridData.gridData.grid;
  let gridEl = grid.map((el) => {
    // const imgUrl = new URL(el.img, import.meta.url).href;
    return (
      <div key={el.id} className="gridCom flex flex-wrap  justify-center">
        {/* image container */}
        <img
          className="w-96 h-96 object-cover"
          loading="lazy"
          src={el.img}
          alt={el.alt}
        />
        {/* text container */}
        <div
          style={{ backgroundColor: el.color }}
          className="w-96 h-96 flex flex-col justify-center items-center  "
        >
          <h2 className="uppercase text-xs text-whiteFC">{el.header}</h2>
          <p className="max-w-[13em] text-slate-500 mt-4 text-lg font-serif text-center">
            {el.text}{" "}
            <br />
          </p>
          <p className="text-xs mt-4 text-center px-16">
            <span className="font-bold">Tech Stack </span>- {el.stack}
          </p>
          <div className="flex mt-8 gap-2">
            <a
              href={el.live}
              target="_blank"
              aria-label="Visit the live version of this project"
            >
              {" "}
              <ButtonPrim />
            </a>
            <a
              href={el.code}
              target="_blank"
              aria-label="Visit the code I created to build this project"
            >
              <ButtonSec />
            </a>
          </div>
        </div>
      </div>
    );
  });
  return (
    <section id="projects" className="mt-12">
      {gridEl}
      <div className="md:flex justify-center bg-accent w-full m-auto md:mt-8 mt-2 md:py-16 py-10 md:px-6 px-12">
        <h1 className=" font-serif font-bold uppercase text-xl md:text-3xl md:pr-8 md:text-left text-center">
          my skills
        </h1>
        <div
          className="flex flex-wrap md:flex-row flex-col justify-center px-12 text-center 
         md:text-left  md:gap-8 gap-4 md:pt-0 pt-6 md:justify-between"
        >
          <ul className="Skills">
            <li>Html</li>
            <li>TypeScript</li>
            <li>Tailwind</li>
            <li>Figma</li>
          </ul>
          <ul className="Skills">
            <li>CSS</li>
            <li>ReactJS</li>
            <li>NodeJS</li>

            <li>Illustrator</li>
          </ul>
          <ul className="Skills">
            <li>Javascript</li>
            <li>Redux</li>
            <li>Git/Github</li>
            <li>Photoshop</li>
          </ul>
        </div>
      </div>
      {/* design comes in many forms */}

      <div className="md:px-12 px-4 py-10">
        <div className="flex  flex-col justify-between items-center">
          <h1 className="font-serif md:text-3xl text-xl font-semibold md:block text-center">
            Design comes in many forms
          </h1>
          <div>
            {" "}
            <img
              className="w-96 md:mt-4 mt-4"
              src={MovingImage}
              alt="Gif showing a variety of projects"
              loading="lazy"
            />
          </div>
        </div>

        <div className="flex flex-wrap md:justify-around justify-center gap-2 mt-4 md:py-8">
          <div className="flex items-center gap-2">
            <i className="fa-solid fa-star text-accent text-2xl"></i>
            <p className="font-poppins font-light  md:text-xl text-xl">
              Frontend Dev
            </p>
          </div>
          <div className="flex items-center gap-2">
            <i className="fa-solid fa-star text-accent text-2xl"></i>
            <p className="font-poppins font-light  md:text-xl text-xl">
              Graphic Designer
            </p>
          </div>

          <div className="flex items-center gap-2">
            <i className="fa-solid fa-star text-accent text-2xl"></i>
            <p className="font-poppins font-light  md:text-xl text-xl">
              Textile Art{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
