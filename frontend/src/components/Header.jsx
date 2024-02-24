import React, { useState } from "react";
import "../styles.css";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";

function Header() {
  const [resNav, setResNav] = useState(false);

  function handleClick() {
    setResNav(!resNav);
  }
  return (
    <>
      <header>
        <div className="logo">
          <img src={require("./logo.png")} alt="" />
        </div>
        <div className="headerElements">
          <li>
            <a href="#home">HOME</a>
          </li>
          <li>
            <a href="#about">ABOUT</a>
          </li>

          <li>
            <a href="#experience">EXPERIENCE</a>
          </li>
          <li>
            <a href="#skills">SKILLS</a>
          </li>
          <li>
            <a href="#projects">PROJECTS</a>
          </li>
          <li>
            <a href="#contact">CONTACT</a>
          </li>
          <li>|</li>
          <li>
            <a href="/Blog">BLOG</a>
          </li>
          <div className="menu-icon">
            <a href="#JavaScript" onClick={handleClick}>
              <MenuOpenIcon style={{ fontSize: "5rem" }} />
            </a>
          </div>
        </div>
      </header>
      <div className={resNav ? "headerElementsResp" : "resp"}>
        <div className="li1">
          <li>
            <a href="#home">HOME</a>
          </li>
          <li>
            <a href="#about">ABOUT</a>
          </li>
          <li>
            <a href="#experience">EXPERIENCE</a>
          </li>
          <li>
            <a href="#skills">SKILLS</a>
          </li>
        </div>
        <div className="li2">
          <li>
            <a href="#projects">PROJECTS</a>
          </li>
          <li>
            <a href="#contact">CONTACT</a>
          </li>
          <li>
            <a href="/Blog">BLOG</a>
          </li>
        </div>
      </div>
    </>
  );
}

export default Header;
