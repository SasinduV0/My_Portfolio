import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "../../../../components/ui/card";
import { Button } from "../../../../components/ui/button";
import { ScrollReveal } from "../../../../components/ui/scroll-reveal";
import { 
  ExternalLink, 
  Github, 
  ArrowRight, 
  Filter,
  X
} from "lucide-react";

export const ServicesSection = (): JSX.Element => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const categories = ["All", "Web Design", "Mobile App", "Branding", "Development"];

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "Web Design",
      description: "A modern e-commerce platform with seamless user experience and advanced features.",
      image: "/rectangle-81.svg",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 2,
      title: "Music Streaming App",
      category: "Mobile App",
      description: "A beautiful music streaming application with intuitive design and smooth animations.",
      image: "/rectangle-81-3.svg",
      technologies: ["React Native", "Firebase", "Redux", "Spotify API"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 3,
      title: "Creative Portfolio",
      category: "Web Design",
      description: "A stunning portfolio website showcasing creative work with modern animations.",
      image: "/rectangle-81-2.svg",
      technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "Vercel"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 4,
      title: "Task Management Tool",
      category: "Development",
      description: "A comprehensive task management application with team collaboration features.",
      image: "/rectangle-81-1.svg",
      technologies: ["Vue.js", "Express.js", "PostgreSQL", "Socket.io"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 5,
      title: "Brand Identity System",
      category: "Branding",
      description: "Complete brand identity design including logo, colors, and brand guidelines.",
      image: "/rectangle-81.svg",
      technologies: ["Adobe Creative Suite", "Figma", "Brand Strategy"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 6,
      title: "Restaurant App",
      category: "Mobile App",
      description: "A food delivery app with real-time tracking and seamless ordering experience.",
      image: "/rectangle-81-3.svg",
      technologies: ["Flutter", "Firebase", "Google Maps API", "Payment Gateway"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    }
  ];

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="section-padding bg-gradient-to-b from-dark-900/50 to-dark-800/50">
      <div className="container-padding max-w-7xl mx-auto">
        {/* Section Header */}
        <ScrollReveal direction="up" className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h2 className="text-4xl lg:text-5xl font-bold font-display">
              <span className="text-white">Featured </span>
              <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto text-balance">
              Explore my latest work and see how I bring ideas to life through design and code
            </p>
          </motion.div>
        </ScrollReveal>

        {/* Category Filter */}
        <ScrollReveal direction="up" delay={0.2} className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25"
                    : "bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white"
                }`}
              >
                <Filter className="w-4 h-4 mr-2" />
                {category}
              </Button>
            ))}
          </div>
        </ScrollReveal>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className={`group cursor-pointer ${
                  project.featured ? "md:col-span-2 lg:col-span-1" : ""
                }`}
                onClick={() => setSelectedProject(project.id)}
              >
                <Card className="h-full card-modern overflow-hidden">
                  <CardContent className="p-0">
                    {/* Project Image */}
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Overlay Actions */}
                      <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Button
                          size="sm"
                          className="bg-white/20 backdrop-blur-sm hover:bg-white/30"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(project.liveUrl, '_blank');
                          }}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                        <Button
                          size="sm"
                          className="bg-white/20 backdrop-blur-sm hover:bg-white/30"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(project.githubUrl, '_blank');
                          }}
                        >
                          <Github className="w-4 h-4" />
                        </Button>
                      </div>

                      {/* Featured Badge */}
                      {project.featured && (
                        <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-xs font-semibold text-white">
                          Featured
                        </div>
                      )}
                    </div>

                    {/* Project Info */}
                    <div className="p-6 space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-blue-400 font-medium">
                            {project.category}
                          </span>
                          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
                        </div>
                        <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                          {project.title}
                        </h3>
                      </div>

                      <p className="text-gray-300 text-sm leading-relaxed">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 3).map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-white/10 rounded-md text-xs text-gray-300"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-2 py-1 bg-white/10 rounded-md text-xs text-gray-300">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto card-modern"
                onClick={(e) => e.stopPropagation()}
              >
                <Button
                  className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/30"
                  size="sm"
                  onClick={() => setSelectedProject(null)}
                >
                  <X className="w-4 h-4" />
                </Button>

                {(() => {
                  const project = projects.find(p => p.id === selectedProject);
                  if (!project) return null;

                  return (
                    <div className="p-8 space-y-6">
                      <div className="space-y-4">
                        <div className="flex items-center gap-4">
                          <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium">
                            {project.category}
                          </span>
                          {project.featured && (
                            <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-sm font-semibold">
                              Featured
                            </span>
                          )}
                        </div>
                        <h3 className="text-3xl font-bold text-white">{project.title}</h3>
                        <p className="text-lg text-gray-300 leading-relaxed">{project.description}</p>
                      </div>

                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 object-cover rounded-xl"
                      />

                      <div className="space-y-4">
                        <h4 className="text-xl font-semibold text-white">Technologies Used</h4>
                        <div className="flex flex-wrap gap-3">
                          {project.technologies.map((tech, index) => (
                            <span
                              key={index}
                              className="px-4 py-2 bg-white/10 rounded-lg text-gray-300 font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <Button
                          className="btn-primary"
                          onClick={() => window.open(project.liveUrl, '_blank')}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Live
                        </Button>
                        <Button
                          className="btn-secondary"
                          onClick={() => window.open(project.githubUrl, '_blank')}
                        >
                          <Github className="w-4 h-4 mr-2" />
                          View Code
                        </Button>
                      </div>
                    </div>
                  );
                })()}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA Section */}
        <ScrollReveal direction="up" delay={0.4} className="text-center mt-16">
          <div className="space-y-6">
            <h3 className="text-2xl lg:text-3xl font-bold text-white">
              Ready to Start Your Project?
            </h3>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Let's collaborate and create something amazing together
            </p>
            <Button className="btn-primary group">
              Get In Touch
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};