import React from "react";
import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <footer id="contact" className="flex flex-col gap-4 bg-accent p-8">
      <h2 className="font-serif text-2xl">Let's work together</h2>
      <a href="mailto:orincywhyte@gmail.com" target="_blank">orincywhyte@gmail.com</a>
      <a href="https://www.orincywhyte.com/links" target="_blank">orincywhyte.com</a>
      <div className="flex text-2xl gap-4">
        <a href="https://github.com/oswhytecodes">
          {" "}
          <li>
            {" "}
            <i className="fa-brands fa-github"></i>
          </li>
        </a>
        <a href="https://www.linkedin.com/in/orincywhyte/">
          {" "}
          <li>
            {" "}
            <i className="fa-brands fa-linkedin-in"></i>
          </li>
        </a>
        <a href="https://www.instagram.com/oswhytecodes/">
          {" "}
          <li>
            {" "}
            <i className="fa-brands fa-instagram"></i>
          </li>
        </a>
        <a href="https://www.youtube.com/channel/UC_3pNhSyYoZk3Z201kZvgsg">
          {" "} 
          <li>
            {" "}
            <i className="fa-brands fa-youtube"></i>
          </li>
        </a>
      </div>
    </footer>
  );
};
