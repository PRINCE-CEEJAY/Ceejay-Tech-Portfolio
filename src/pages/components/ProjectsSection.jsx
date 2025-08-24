import { ArrowRight, ExternalLink, Github } from "lucide-react";
import React from "react";
const projects = [
  {
    id: 1,
    title: "Landing Page",
    description: "A landing page made with React and TailwindCSS",
    image: "/projects/project1.jpg",
    tags: ["React", "TailwindCss"],
    demoURL: "#",
    gitHubURL: "#",
  },
  {
    id: 2,
    title: "Multi-Function App",
    description: "It consists of many functional components of react",
    image: "/projects/project2.jpg",
    tags: ["React", "Material", "TailwindCss"],
    demoURL: "#",
    gitHubURL: "#",
  },
  {
    id: 3,
    title: "AI Photo Analyzer",
    description: "Analyse any photo and extract texts from it, made with nexjs",
    image: "/projects/project3.jpg",
    tags: ["AI", "React", "NextJS", "TailwindCss"],
    demoURL: "#",
    gitHubURL: "#",
  },
];
const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {project.tags.map((tag, key) => (
                    <span
                      key={key}
                      className="px-2 py-1 font-medium border rounded-full bg-secondary bg-primary/20 text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-center text-center">
                  <div className="flex space-x-3 ">
                    <a
                      href={project.demoURL}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary tranistion-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.gitHubURL}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary tranistion-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="http://www.github.com/PRINCE-CEEJAY"
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
          >
            Check my Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
