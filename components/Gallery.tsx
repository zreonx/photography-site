"use client";
import { Fade } from "react-awesome-reveal";
import React from "react";
import ProjectCard from "./ProjectCard";
import { projectData } from "@/lib/data";

const Gallery = () => {
  return (
    <section className='relative mb-12 xl:mb-48'>
      <div className='container mx-auto'>
        <Fade
          direction='up'
          delay={400}
          cascade
          damping={1e-1}
          triggerOnce={true}
        >
          <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>
            My Gallery
          </h2>
        </Fade>
        <div className='text-lg xl:mt-8 grid grid-cols-1 xl:grid-cols-3 gap-4'>
          <Fade
            direction='up'
            delay={600}
            cascade
            damping={1e-1}
            triggerOnce={true}
          >
            {projectData.map((project, index) => (
              <React.Fragment key={index}>
                <ProjectCard project={project} />
              </React.Fragment>
            ))}
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
