import React from "react";

function Skills() {
  return (
    <div className="container skills-container col-lg-6 mt-5 gap-3">
      <div className="progress-container d-flex">
        <div className="col-3">HTML</div>
        <div className="progress col-9">
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: "70%" }}
            aria-valuenow="70"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
      <div className="progress-container d-flex">
        <div className="col-3">CSS</div>
        <div className="progress col-9">
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: "60%" }}
            aria-valuenow="60"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
      <div className="progress-container d-flex">
        <div className="col-3">JavaScript</div>
        <div className="progress col-9">
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: "75%" }}
            aria-valuenow="75"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
      <div className="progress-container d-flex">
        <div className="col-3">Bootstrap</div>
        <div className="progress col-9">
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: "90%" }}
            aria-valuenow="90"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
      <div className="progress-container d-flex">
        <div className="col-3">React</div>
        <div className="progress col-9">
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: "80%" }}
            aria-valuenow="80"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
      <div className="progress-container d-flex">
        <div className="col-3">NodeJS</div>
        <div className="progress col-9">
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: "80%" }}
            aria-valuenow="80"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
      <div className="progress-container d-flex">
        <div className="col-3">Express</div>
        <div className="progress col-9">
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: "80%" }}
            aria-valuenow="80"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
      <div className="progress-container d-flex">
        <div className="col-3">MongoDB</div>
        <div className="progress col-9">
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: "90%" }}
            aria-valuenow="90"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
      <div className="progress-container d-flex">
        <div className="col-3">MySQL</div>
        <div className="progress col-9">
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: "60%" }}
            aria-valuenow="80"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
