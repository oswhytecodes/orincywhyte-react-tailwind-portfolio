import "./index.css";
import { Portfolio } from "./components/Portfolio";
import { Routes, Route, Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="portfolio" element={<Portfolio />}></Route>
      </Routes>
    </div>
  );
}

const Home = () => {
  return (
    <section className="Home w-screen h-screen flex flex-col justify-between p-4">
      <div className="flex justify-between">
        <HashLink to="/portfolio#about">
          <li className="hover:text-accent transition">about</li>
        </HashLink>
        <HashLink to="/portfolio#projects">
          <li className="hover:text-accent transition ">projects</li>
        </HashLink>
      </div>
      <div className="flex flex-col justify-center items-center">
        <Link to="/portfolio">
          <i className="fa-solid fa-circle-down text-3xl transition hover:text-accent text-accent/80 animate-bounce"></i>
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
          <li className="hover:text-accent transition">resume</li>
        </a>

        <HashLink to="/portfolio#footer">
          <li className="hover:text-accent transition">contact</li>
        </HashLink>
      </div>
    </section>
  );
};

export default App;
