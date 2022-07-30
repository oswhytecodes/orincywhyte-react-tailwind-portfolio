import React from "react";
import { Link } from "react-router-dom";
import { Nav } from "./Nav";
import { NavBar } from "./NavBar";
import { Hero } from "./Hero";
import { Grid } from "./Grid";
import { Footer } from "./Footer";

export const Portfolio = () => {
  return (
    <section className="Portfolio">
      <NavBar />
      <Hero />
      <Grid />
      <Footer />
    </section>
  );
};
