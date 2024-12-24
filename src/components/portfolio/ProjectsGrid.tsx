import React from "react";
import ProjectCard from "./ProjectCard";

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  techStack: string[];
  demoUrl: string;
  githubUrl: string;
}

interface ProjectsGridProps {
  projects?: Project[];
}

const ProjectsGrid = ({
  projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with real-time inventory management and secure payment processing.",
      imageUrl: "https://images.unsplash.com/photo-1557821552-17105176677c",
      techStack: ["React", "Node.js", "MongoDB", "Stripe"],
      demoUrl: "https://demo.example.com/ecommerce",
      githubUrl: "https://github.com/example/ecommerce",
    },
    {
      title: "Social Media Dashboard",
      description:
        "Analytics dashboard for social media metrics with real-time data visualization.",
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      techStack: ["Vue.js", "D3.js", "Firebase"],
      demoUrl: "https://demo.example.com/dashboard",
      githubUrl: "https://github.com/example/dashboard",
    },
    {
      title: "AI Chat Application",
      description:
        "Real-time chat application powered by artificial intelligence for smart responses.",
      imageUrl: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a",
      techStack: ["Python", "TensorFlow", "WebSocket"],
      demoUrl: "https://demo.example.com/chat",
      githubUrl: "https://github.com/example/chat",
    },
  ],
}: ProjectsGridProps) => {
  return (
    <div className="w-full min-h-screen bg-[#0F0F0F] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-[#FF3333] mb-8 text-center">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              techStack={project.techStack}
              demoUrl={project.demoUrl}
              githubUrl={project.githubUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsGrid;
