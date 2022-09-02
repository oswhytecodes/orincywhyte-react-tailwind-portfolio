import "./index.css";
import { Portfolio } from "./components/Portfolio";
import { Routes, Route, Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Hero } from "./components/Hero";
import { Grid } from "./components/Grid";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>

        <Route path="/portfolio" element={<Portfolio />}></Route>
        <Route path="#about" element={<Hero />}></Route>
        <Route path="#projects" element={<Grid />}></Route>
        <Route path="#contact" element={<Footer />}></Route>
      </Routes>
    </div>
  );
}

const Home = () => {
  return (
    <section className="Home w-screen h-screen flex flex-col md:pb-8 pb-[6em] justify-between px-6 pt-8">
      <ul className="flex justify-between">
        <li className="hover:text-accent text-xl hover:animate-pulse transition">
          <HashLink
            aria-label="Click to visit About section"
            to="/portfolio#about"
          >
            about
          </HashLink>
        </li>

        <li className="hover:text-accent text-xl hover:animate-pulse transition ">
          <HashLink
            aria-label="Click to visit Project Section"
            to="/portfolio#projects"
          >
            projects
          </HashLink>
        </li>
      </ul>
      <div className="flex flex-col justify-center items-center">
        <Link to="/portfolio" aria-label="Click to visit the Portofio page">
          <i className="fa-solid fa-circle-down text-3xl hover:animate-pulse transition hover:text-accent text-accent/80 animate-bounce"></i>
        </Link>
        <h1 className="font-serif font-bold sm:text-6xl text-4xl mt-6">
          Orincy Whyte
        </h1>
        <h2 className="font-poppins font-light text-2xl mt-2">
          Developer | Designer
        </h2>
      </div>
      <ul className="flex justify-between">
        <li className="hover:text-accent text-xl hover:animate-pulse transition">
          <a
            href="https://drive.google.com/file/d/1Yc3BprZVNJT9SIMwwnTYuzJj45FYFKHR/view?usp=sharing"
            aria-label="Click to open Resume in Google Drive"
          >
            resume
          </a>
        </li>

        <li className="hover:text-accent  text-xl hover:animate-pulse transition">
          <HashLink
            aria-label="Click to visit Contact Section"
            to="/portfolio#contact"
          >
            contact
          </HashLink>
        </li>
      </ul>
    </section>
  );
};

export default App;
