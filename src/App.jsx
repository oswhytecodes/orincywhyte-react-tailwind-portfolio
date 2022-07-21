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
    <section className="Home w-screen h-screen flex flex-col justify-between px-6 py-8">
      <div className="flex justify-between">
        <HashLink to="/portfolio#about">
          <li className="hover:text-accent text-xl hover:animate-pulse transition">
            about
          </li>
        </HashLink>
        <HashLink to="/portfolio#projects">
          <li className="hover:text-accent text-xl hover:animate-pulse transition ">
            projects
          </li>
        </HashLink>
      </div>
      <div className="flex flex-col justify-center items-center">
        <Link to="/portfolio">
          <i className="fa-solid fa-circle-down text-3xl hover:animate-pulse transition hover:text-accent text-accent/80 animate-bounce"></i>
        </Link>
        <h1 className="font-serif font-bold sm:text-6xl text-4xl mt-6">
          Orincy Whyte
        </h1>
        <h2 className="font-poppins font-light text-2xl mt-2">
          Developer | Designer
        </h2>
      </div>
      <div className="flex justify-between">
        <a href="https://drive.google.com/file/d/1jDrCvf-rdzifUX_sHMk_Hu5tZWEowyVO/view?usp=sharing">
          <li className="hover:text-accent text-xl hover:animate-pulse transition">
            resume
          </li>
        </a>

        <HashLink to="/portfolio#contact">
          <li className="hover:text-accent text-xl hover:animate-pulse transition">
            contact
          </li>
        </HashLink>
      </div>
    </section>
  );
};

export default App;
