import React from "react";
import { Progress } from "@/components/ui/progress";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Code2,
  Database,
  Globe,
  Layout,
  Server,
  Smartphone,
} from "lucide-react";

interface Skill {
  name: string;
  icon: React.ReactNode;
  proficiency: number;
  category: string;
}

interface SkillsGridProps {
  skills?: Skill[];
}

const defaultSkills: Skill[] = [
  {
    name: "Frontend Development",
    icon: <Layout className="h-8 w-8 text-[#FF3333]" />,
    proficiency: 85,
    category: "Development",
  },
  {
    name: "Backend Development",
    icon: <Server className="h-8 w-8 text-[#FF3333]" />,
    proficiency: 75,
    category: "Development",
  },
  {
    name: "Database Management",
    icon: <Database className="h-8 w-8 text-[#FF3333]" />,
    proficiency: 70,
    category: "Infrastructure",
  },
  {
    name: "Web Technologies",
    icon: <Globe className="h-8 w-8 text-[#FF3333]" />,
    proficiency: 90,
    category: "Development",
  },
  {
    name: "Mobile Development",
    icon: <Smartphone className="h-8 w-8 text-[#FF3333]" />,
    proficiency: 65,
    category: "Development",
  },
  {
    name: "Coding Practices",
    icon: <Code2 className="h-8 w-8 text-[#FF3333]" />,
    proficiency: 80,
    category: "Development",
  },
];

const SkillsGrid = ({ skills = defaultSkills }: SkillsGridProps) => {
  return (
    <div className="w-full max-w-[1200px] min-h-[600px] p-8 bg-[#0F0F0F] text-white">
      <h2 className="text-3xl font-bold mb-8 text-center text-[#FF3333]">
        Skills & Expertise
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <TooltipProvider key={index}>
            <Tooltip>
              <TooltipTrigger>
                <div className="p-6 rounded-lg border border-[#FF3333] border-opacity-20 hover:border-opacity-100 transition-all duration-300">
                  <div className="flex items-center justify-center mb-4">
                    <div className="p-4 rounded-full bg-[#FF3333] bg-opacity-10">
                      {skill.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-4">
                    {skill.name}
                  </h3>
                  <Progress
                    value={skill.proficiency}
                    className="h-2 bg-gray-800"
                    indicatorClassName="bg-[#FF3333]"
                  />
                  <p className="text-center mt-2 text-sm text-gray-400">
                    {skill.proficiency}%
                  </p>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Category: {skill.category}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </div>
    </div>
  );
};

export default SkillsGrid;
