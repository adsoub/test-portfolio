import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Globe } from "lucide-react";

interface ProjectCardProps {
  title?: string;
  description?: string;
  imageUrl?: string;
  techStack?: string[];
  demoUrl?: string;
  githubUrl?: string;
}

const ProjectCard = ({
  title = "Project Title",
  description = "A brief description of the project showcasing key features and technologies used.",
  imageUrl = "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
  techStack = ["React", "TypeScript", "Tailwind"],
  demoUrl = "https://demo.example.com",
  githubUrl = "https://github.com/example/project",
}: ProjectCardProps) => {
  return (
    <Card className="w-[380px] h-[450px] bg-[#0F0F0F] text-white border-[#FF3333] border-opacity-20 hover:border-opacity-100 transition-all duration-300 group">
      <CardHeader className="p-0">
        <div className="relative h-48 overflow-hidden rounded-t-lg">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <CardTitle className="text-xl mb-2 text-[#FF3333]">{title}</CardTitle>
        <CardDescription className="text-gray-400 mb-4 line-clamp-3">
          {description}
        </CardDescription>
        <div className="flex flex-wrap gap-2 mb-4">
          {techStack.map((tech) => (
            <Badge
              key={tech}
              variant="outline"
              className="border-[#FF3333] text-[#FF3333] hover:bg-[#FF3333] hover:text-white"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between p-6 pt-0">
        <Button
          variant="outline"
          className="border-[#FF3333] text-[#FF3333] hover:bg-[#FF3333] hover:text-white"
          onClick={() => window.open(demoUrl, "_blank")}
        >
          <Globe className="mr-2 h-4 w-4" />
          Live Demo
        </Button>
        <Button
          variant="outline"
          className="border-[#FF3333] text-[#FF3333] hover:bg-[#FF3333] hover:text-white"
          onClick={() => window.open(githubUrl, "_blank")}
        >
          <Github className="mr-2 h-4 w-4" />
          GitHub
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
