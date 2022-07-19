import React from "react";
import { HashLink } from "react-router-hash-link";
import HeroImage from "/images/orincy.jpeg";

export const Hero = () => {
  return (
    <section id="about" className="mt-8">
      <div className="w-full flex flex-wrap gap-4 md:gap-8 lg:justify-between justify-center md:px-16 px-6">
        <img className="w-96 object-cover" src={HeroImage} alt="Orincy Whyte" />

        <div className="w-96 md:pt-8 pt-4 text-center">
          <h1 className="font-serif sm:text-3xl text-2xl">
            Frontend Developer & Graphic Designer
          </h1>
          <p className="my-6 leading-6 tracking-wide font-poppins font-light">
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
            <button className="cursor uppercase font-poppins text-[#010200]
             hover:bg-accent/90 hover:animate-pulse bg-accent/20
             border-accent  border-2 py-2 px-6 w-36 text-center">
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
