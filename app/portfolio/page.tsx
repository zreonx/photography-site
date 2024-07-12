"use client";
import React, { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";

const projectData = [
  {
    image: "/work/3.png",
    category: "Portraits",
    name: "February 11, 2024",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, earum!",
    link: "/",
    codepen: "/",
  },
  {
    image: "/work/5.png",
    category: "Products",
    name: "APril 22, 2023",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, earum!",
    link: "/",
    codepen: "/",
  },
  {
    image: "/work/6.png",
    category: "Fashion",
    name: "Nov 08, 2023",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, earum!",
    link: "/",
    codepen: "/",
  },
  {
    image: "/work/7.png",
    category: "Fashion",
    name: "Jan 14, 2021",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, earum!",
    link: "/",
    codepen: "/",
  },
  {
    image: "/work/8.png",
    category: "Portraits",
    name: "Jan 31, 2023",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, earum!",
    link: "/",
    codepen: "/",
  },
  {
    image: "/work/9.png",
    category: "Products",
    name: "Aug 31, 2022",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, earum!",
    link: "/",
    codepen: "/",
  },
  {
    image: "/work/10.png",
    category: "Fashion",
    name: "Mar 13, 2013",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, earum!",
    link: "/",
    codepen: "/",
  },
  {
    image: "/work/1.png",
    category: "Portraits",
    name: "Oct 23, 2019",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, earum!",
    link: "/",
    codepen: "/",
  },
];

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
        <h2 className='section-title mb-8 x:mb-16 text-center mx-auto'>
          My Portfolio
        </h2>
        {/* Tabs */}
        <Tabs defaultValue={category} className='mb-24 xl:mb-48 '>
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
          {/* Tab Content */}
          <div className='text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4'>
            {filteredProjects.map((project, index) => (
              <TabsContent value={category} key={index}>
                <ProjectCard project={project} />
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Portfolio;
