import React from "react";

function Projects() {
  return (
    <div className="project">
      <div className="Projects-container">
        <div className="p-title">
          <h2>PROJECTS</h2>
        </div>
        {/* 1st project */}
        <div className="pro-cont" style={{ marginBottom: "4rem" }}>
          <div className="p-left">
            <h2 className="h3">AMAZON CLONE</h2>
            <p className="p-desc">
              A clone of amazon’s website to gain hands on experience of React,
              Material UI and to know prerequisite for frontend development.
            </p>
            <ul className="ul">
              <li className="li">HTMLS</li>
              <li className="li">CSS</li>
              <li className="li">BOOTSTRAP</li>
              <li className="li">JavaScript</li>
              <li className="li">React</li>
              <li className="li">Material UI</li>
            </ul>
            {/* <button className="btn-p">VIEW PROJECT</button> */}
          </div>
          <div className="p-right">
            <img className="img" src={require("./amaz.png")} alt="" />
          </div>
        </div>
        {/* 2nd project */}
        <div className="pro-cont" style={{ marginBottom: "4rem" }}>
          <div className="p-left">
            <h2 className="h3">NOTES KEEPER</h2>
            <p className="p-desc">
              A notes app for the one’s who needed aid in note taking. Writing
              neatly and legibly so that notes are easily used.With edit and
              delete functionality.
            </p>
            <ul className="ul">
              <li className="li">HTMLS</li>
              <li className="li">CSS</li>
              <li className="li">Material UI</li>
              <li className="li">React</li>
              <li className="li">Express.js</li>
              <li className="li">PostgreSQL</li>
            </ul>
            {/* <button className="btn-p">VIEW PROJECT</button> */}
          </div>
          <div className="p-right">
            <img className="img" src={require("./note-app.png")} alt="" />
          </div>
        </div>
        {/* 3rd project */}
        <div className="pro-cont" style={{ marginBottom: "4rem" }}>
          <div className="p-left">
            <h2 className="h3">NEWZ TODAY</h2>
            <p className="p-desc">
              This app is a news website developed using News Api. A place where
              you get current affairs from all the spheres like Entertainment,
              Business, Science and Technology etc.
            </p>
            <ul className="ul">
              <li className="li">HTMLS</li>
              <li className="li">CSS</li>
              <li className="li">JavaScript</li>
              <li className="li">React</li>
              <li className="li">Material UI</li>
            </ul>
            {/* <button className="btn-p">VIEW PROJECT</button> */}
          </div>
          <div className="p-right">
            <img className="img" src={require("./newz.png")} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
