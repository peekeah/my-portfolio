import React from "react";
import ParticlesBg from "./ParticlesBg";
const styles = {
  centerFit: {
    height: "calc(100vh - 3.5rem)",
  },
  container: {
    display: "flex",
    height: "85%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  textHeading: {
    fontWeight: "bold",
    color: "black",
  },
  textDescription: {
    padding: "5px 20px",
    color: "black",
  },
  resume: {
    color: "var(--secondary)",
    backgroundColor: "var(--primary)",
    padding: "5px 20px",
    borderRadius: "5px",

  },
};

function Home() {
  return (
    <div className="bg" style={styles.centerFit}>
      <div
        className="container-lg text-center text-white flex"
        style={styles.container}
      >
        <div
          className="text-4xl py-1 mx-3 md:text-7xl"
          style={styles.textHeading}
        >
          Hi, I'm Pranay👋
        </div>
        <div className="text-xl md:text-3xl" style={styles.textDescription}>
          A Full stack developer
        </div>
        <button className="resume opacity-80 hover:opacity-100" style={styles.resume}>
          <a
            href="https://drive.google.com/file/d/1_uVGUedTUGAU2YQXbGV9vGz7WbjUPf5g/view?usp=sharing"
            target="_blank"
          >
            Resume
          </a>
        </button>
      </div>
      <ParticlesBg />
    </div>
  );
}

export default Home;
