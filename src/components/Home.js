import React from "react";
import SnowBg01 from "../assets/Snowbg-01.jpg";
import PlaneBg from "../assets/PlaneBg.jpg";
import blackBg from "../assets/blackBgLines.jpg"
const styles = {
  bgImg: {
    backgroundImage: "url(../assets/Snowbg-01.jpg)",
  },

  centerFit: {
    /* Full height */
    height: "100vh",
    backgroundImage: `url(${blackBg})`,
    /* Center and scale the image nicely */
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    // postion: "absolute"
  },
  container: {
    // marginTop: "5rem",
    display: "flex",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  textHeading: { 
    fontWeight: "bold",
    // fontSize: "4rem",
    // backgroundColor: '#292b2c', 
    // padding: "0 20px",
  },
  textDescription: {
    // fontSize: "2rem",
    // backgroundColor: '#292b2c'
    // , 
    padding: "5px 20px",
  }
};

function Home() {
  return (
    <>
      <div className="bgImg" style={styles.centerFit}>
        <div
          className="container-lg text-center text-white flex"
          style={styles.container}
        >
          <div className="text-4xl py-1 mx-3 md:text-7xl" 
          style={styles.textHeading}
          >Hi, I'm Pranay👋</div>
          <div className="text-xl md:text-3xl" style={styles.textDescription}>A Full stack developer</div>
        </div>
      </div>
    </>
  );
}

export default Home;
