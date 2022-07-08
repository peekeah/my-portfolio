import { Typography } from "@mui/material";
import React from "react";
import { techStack } from "../Constants";
import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <>
      <div className="w-10/12 container mx-auto mt-32 flex-row-reverse">
        <div className="info lg:grid lg:grid-cols-2">
          <div className="img-wrapper my-12 lg:cols-span-6 lg:my-0 lg:flex-row-reverse">
            <div className="mx-auto w-10/12 lg:w-2/3">
              <img src="https://cdn3.vectorstock.com/i/1000x1000/48/37/web-developer-design-vector-5884837.jpg"></img>
            </div>
          </div>
          <div className="info-text lg:cols-span-6">
            <Typography
              variant="h3"
              component="div"
              color="primary"
              style={{ margin: "0.5rem 0" }}
            >
              Hey, I'm Pranay 👋
            </Typography>
            <p>I'm a Full Stack Developer based in Nagpur, IN.</p>
            <br />
            <p>
              I've graduated from Savitribai Phule Pune University with degree
              in IT Engineering. I always had fond of learning new skills and
              technologies, that’s how I got into Web Development while studying
              in college. I mainly use React for frontend and NodeJS for
              backend.
            </p>
            <br />
            <p>
              Outside of work I like to spend my time playing chess, guitar,
              editing videos.
            </p>
          </div>
        </div>

        <div className="tech-list mt-20">
          <Typography
            variant="h3"
            component="div"
            color="primary"
            // style={{ margin: "0.5rem 0" }}
          >
            Technologies I work with
          </Typography>
          {
            <motion.div
              className="flex flex-wrap mt-4 justify-between"
              // style={{ marginTop: "5rem" }}
            >
              {techStack.map((el, index) => (
                <motion.div
                  initial="hidden"
                  whileInView={"visible"}
                  variants={{
                    visible: {
                      y: 0,
                      opacity: 1,
                      transition: {
                        type: "spring",
                      },
                    },
                    hidden: { opacity: 1, y: 80 },
                  }}
                  className="py-2 px-4 bg-gray-50 md:m-4 mx-2 mt-6 rounded-lg flex items-center hover:scale-125 cursor-pointer md:w-48 w-40"
                  key={index}
                >
                  <img alt="" src={el.link} className="w-12" />
                  <h4 className="text-md ml-4">{el.name}</h4>
                </motion.div>
              ))}
            </motion.div>
          }
        </div>
      </div>
    </>
  );
}
