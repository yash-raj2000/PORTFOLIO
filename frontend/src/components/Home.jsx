import React from "react";

function Home() {
  const openResume = () => {
    window.open(
      "https://drive.google.com/file/d/13Zuv9iJY65pWBZOVKEaH4myf0u2Jy1PK/view?usp=sharing",
      "_blank"
    );
  };

  return (
    <div className="section">
      <div className="left">
        <p>Hii, my name is</p>
        <span className="name">Yashraj Singh</span>
        <p>Frontend Web Developer</p>

        <button className="home-btn" onClick={openResume}>
          <span style={{ fontSize: "1rem" }}>RESUME</span>
        </button>
      </div>
      <div className="right" style={{ float: "right" }}>
        <img src={require("./pic.png")} alt="" />
      </div>
    </div>
  );
}

export default Home;
