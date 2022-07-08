import React from "react";
import { projects } from "../Constants";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";

const Projects = () => {
  return (
    <>
      <div className="container-sm mt-32">
        <div className="container-2xl text-center align-items-center my-3">
          <Typography variant="h1" color="primary">
            My Projects
          </Typography>
        </div>
        <div className="projects-container container mx-auto mt-5">
          <div className="container-wrapper rounded-2xl grid  sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {projects.map((item, index) => (
              <div
                className="card-wrapper mx-auto my-3 flex justify-center"
                key={index}
              >
                {/* <div className="card">
                  <img src="..." className="card-img-top" alt="..." />
                  <div className="card-body">
                    <Typography variant="h5">{item.title}</Typography>
                    <p className="card-text my-3">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href={item.github} target="_blank">
                      <button className="btn btn-outline-info">Github</button>
                    </a>
                    &nbsp; &nbsp;
                    <a href={item.netlify} target="_blank">
                      <button className="btn btn-outline-dark">Netlify</button>
                    </a>
                  </div>
                </div> */}

                <div class="max-w-sm rounded from-blue-300 to-purple-200 bg-gradient-to-r overflow-hidden shadow-lg">
                  {/* <img class="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains" /> */}
                  <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">{item.title}</div>
                    <p class="text-gray-700 text-base">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Voluptatibus quia, nulla! Maiores et perferendis eaque,
                      exercitationem praesentium nihil.
                    </p>
                  </div>
                  <div class="mx-5 mb-5 flex space-x-3">
                    <a href={item.github} target="_blank">
                      <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
                        GitHub
                      </button>
                    </a>
                    <a href={item.netlify}>
                      <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
                        Netlify
                      </button>
                    </a>
                  </div>
                  {/* <div class="px-6 pt-4 pb-2">
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      #photography
                    </span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      #travel
                    </span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      #winter
                    </span>
                  </div> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
