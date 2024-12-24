import React from "react";
import { motion } from "framer-motion";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { ChevronDown } from "lucide-react";

interface HeroSectionProps {
  name?: string;
  title?: string;
  subtitle?: string;
  navigationItems?: Array<{
    label: string;
    href: string;
    items?: Array<{ title: string; href: string; description: string }>;
  }>;
}

const HeroSection = ({
  name = "John Doe",
  title = "Full Stack Developer",
  subtitle = "Building modern web applications with passion and precision",
  navigationItems = [
    { label: "Home", href: "#" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    {
      label: "More",
      href: "#",
      items: [
        {
          title: "About Me",
          href: "#about",
          description: "Learn more about my journey and experience",
        },
        {
          title: "Contact",
          href: "#contact",
          description: "Get in touch for opportunities and collaboration",
        },
      ],
    },
  ],
}: HeroSectionProps) => {
  return (
    <div className="min-h-[600px] w-full bg-[#0F0F0F] text-white relative overflow-hidden">
      {/* Navigation Menu */}
      <nav className="absolute top-0 w-full p-6 z-10">
        <NavigationMenu className="mx-auto max-w-6xl">
          <NavigationMenuList className="gap-6">
            {navigationItems.map((item) => (
              <NavigationMenuItem key={item.label}>
                {item.items ? (
                  <>
                    <NavigationMenuTrigger className="text-white hover:text-[#FF3333] bg-transparent hover:bg-transparent">
                      {item.label}
                      <ChevronDown className="h-4 w-4 ml-1" />
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 bg-[#0F0F0F] border border-[#FF3333] rounded-md">
                        {item.items.map((subItem) => (
                          <li key={subItem.title}>
                            <NavigationMenuLink
                              href={subItem.href}
                              className="block p-3 hover:bg-[#FF3333] hover:bg-opacity-10 rounded-md"
                            >
                              <div className="text-sm font-medium text-white">
                                {subItem.title}
                              </div>
                              <p className="text-sm text-gray-400">
                                {subItem.description}
                              </p>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <NavigationMenuLink
                    href={item.href}
                    className="text-white hover:text-[#FF3333] transition-colors"
                  >
                    {item.label}
                  </NavigationMenuLink>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </nav>

      {/* Hero Content */}
      <div className="flex flex-col items-center justify-center h-full pt-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-4"
          >
            <span className="text-white">Hi, I'm </span>
            <span className="text-[#FF3333]">{name}</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl md:text-3xl font-medium mb-6 text-[#FF3333]"
          >
            {title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto"
          >
            {subtitle}
          </motion.p>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-12 w-24 h-24 bg-[#FF3333] rounded-full opacity-10 blur-xl" />
          <div className="absolute bottom-1/4 -right-12 w-32 h-32 bg-[#FF3333] rounded-full opacity-10 blur-xl" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
