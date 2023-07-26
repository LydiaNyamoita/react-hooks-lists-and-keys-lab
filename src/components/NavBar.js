import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return <nav>{/* display an <a> tag for each link here */}
  <a href="#home"key={links.index}>{links[0]}</a>
  <a href="#projects"key={links.index}>{links[2]}</a>
  <a href="#about"key={links.index}>{links[1]}</a>
  </nav>;
}

export default NavBar;
