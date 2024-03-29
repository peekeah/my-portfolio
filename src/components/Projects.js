import React from "react";
import { projects } from "../Constants";

import "./Projects.css";
const Projects = () => {
  return (
    <div className="container mx-auto w-10/12" style={{ marginTop: "3.5rem" }}>
      <div className="container-2xl text-center align-items-center my-3">
        <h1 className="text-6xl" style={{ color: "var(--primary)" }}>
          My Projects
        </h1>
      </div>
      <div className="projects-container container mx-auto mt-3">
        <div className="container-wrapper rounded-2xl grid  sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {projects.map((item, index) => (
            <div
              className="card-wrapper mx-auto my-3 flex justify-center"
              key={index}
            >
              <div
                className="flex flex-col justify-between bg-gray-50 md:m-4 mx-2 mt-6 rounded-lg"
                style={{ backgroundColor: "var(--tertiary-dark)" }}
              >
                <div className="px-6 py-4">
                  <div className="text-center font-bold text-2xl mb-3">{item.title}</div>
                  <p className="text-gray-700 text-base">{item.description}</p>
                </div>
                <div class="px-6 pt-4 pb-2">
                  {item.technologies.map((tag) => (
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="buttons mx-5 mb-5 space-x-3">
                  <a href={item.github} target="_blank">
                    <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
                      Code
                    </button>
                  </a>
                  <a href={item.netlify} target="_blank">
                    <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
                      Demo
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="buttons flex justify-center">
          <a href="https://github.com/pranaykothari109" target="_blank">
            <button className="find-more px-3 py-2 rounded-md">
              Find More
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
