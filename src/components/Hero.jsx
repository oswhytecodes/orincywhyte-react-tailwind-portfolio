import React from "react";
import { HashLink } from "react-router-hash-link";
import HeroImage from "/images/orincy.jpeg";

export const Hero = () => {
  return (
    <section id="about" className="mt-8">
      <div className="flex flex-wrap gap-4 md:gap-8 lg:justify-between justify-center md:px-16 px-6">
        <img className="w-96 object-cover" src={HeroImage} alt="Orincy Whyte" />

        <div className="flex flex-col items-center">
          <h1 className="font-serif ">
            Frontend Developer & Graphic Designer
          </h1>
          <p className="my-6 max-w-[24em] leading-6 tracking-wide font-poppins font-light">
            A Frontend Engineer based in the US, ready to get my feet wet in the
            tech industry. I am a quick learner, creative and constantly
            building. My strongest skills involve me designing, creating and
            building responsive layouts and graphics. I am skilled in layout
            design, using Abode Creative Cloud and Figma. I am proficient in
            HTML and CSS along with JavaScript and Git. I am an experienced and
            professional Graphic Designer with a demonstrated history of working
            in the graphic design industry. Consider me when searching for a
            creative developer.
          </p>
          <HashLink to="#projects">
            {" "}
            <button className="cursor uppercase font-poppins hover:bg-accent/50  bg-accent  py-2 px-6 w-36 text-center">
              PROJECTS
            </button>
          </HashLink>
        </div>
      </div>
      <div>
        <div className="bg-accent mt-8 p-8 md:p-20">
          <p className="font-serif text-2xl">
            “the artist is nothing without the gift, but the gift is nothing
            without the work”
          </p>
          <p className="font-serif md:text-3xl text-xl pt-2 text-gray-200 text-right">
            - Emile Zola
          </p>
        </div>
      </div>
    </section>
  );
};
