import React from "react";
import HeroImage from "/images/orincy.jpeg";

export const Hero = () => {
  return (
    <section id="about" className="mt-4 grid gap-4">
      <div className="flex flex-wrap lg:justify-between gap-6 justify-center p-4">
        <img className="w-96 object-cover" src={HeroImage} alt="Orincy Whyte" />
        <div className="h-full flex flex-col justify-center items-baseline ">
          <h1 className="font-serif text-2xl">
            Frontend Developer | Graphic Designer
          </h1>
          <p className="m-auto mt-6 max-w-[24em] leading-8 font-poppins font-light">
            A Front-End Engineer based in the US, ready to get my feet wet in
            the tech industry. I am a quick learner, creative and constantly
            building. My strongest skills involve me creating and building
            design layouts and graphics. I am skilled in layout design using
            Abode Creative Cloud and Figma. I am proficient in HTML and CSS
            along with JavaScript and ReactJs. I am an experienced and
            professional Graphic Designer with a demonstrated history of working
            in the graphic design industry. Consider me when searching for a
            creative developer.
          </p>
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
