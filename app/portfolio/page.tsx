"use client";
import { Fade } from "react-awesome-reveal";
import React, { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import { projectData } from "@/lib/data";

const uniqueCategories = [
  "all projects",
  ...new Set(projectData.map((item) => item.category)),
];

const Portfolio = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState("all projects");

  const filteredProjects = projectData.filter((project) => {
    return category === "all projects"
      ? project
      : project.category.toLocaleLowerCase() === category.toLowerCase();
  });
  return (
    <section className='min-h-screen'>
      <div className='container mx-auto'>
        <Fade
          direction='up'
          delay={400}
          cascade
          damping={1e-1}
          triggerOnce={true}
        >
          <h2 className='section-title mb-8 x:mb-16 text-center mx-auto'>
            My Portfolio
          </h2>
        </Fade>
        {/* Tabs */}
        <Tabs defaultValue={category} className='mb-24 xl:mb-48 '>
          <Fade
            direction='left'
            delay={600}
            cascade
            damping={1e-1}
            triggerOnce={true}
          >
            <TabsList className='w-full grid h-full md:grid-cols-4 lg:max-w-[740px] mb-12 mx-auto md:border dark:border-none'>
              {categories.map((category, index) => (
                <TabsTrigger
                  value={category}
                  key={index}
                  className='capitalize w-[162px] md:w-auto '
                  onClick={() => setCategory(category)}
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </Fade>
          {/* Tab Content */}
          <div className='text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4'>
            <Fade
              direction='up'
              delay={800}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              {filteredProjects.map((project, index) => (
                <TabsContent value={category} key={index}>
                  <ProjectCard project={project} />
                </TabsContent>
              ))}
            </Fade>
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Portfolio;
