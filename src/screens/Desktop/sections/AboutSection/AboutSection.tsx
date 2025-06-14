import React from "react";
import { motion } from "framer-motion";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { ScrollReveal } from "../../../../components/ui/scroll-reveal";
import { 
  Code2, 
  Palette, 
  Lightbulb, 
  Target,
  ArrowRight,
  Award,
  Users,
  Coffee
} from "lucide-react";

export const AboutSection = (): JSX.Element => {
  const skills = [
    { icon: Code2, name: "Development", level: 95 },
    { icon: Palette, name: "Design", level: 90 },
    { icon: Lightbulb, name: "Innovation", level: 88 },
    { icon: Target, name: "Strategy", level: 92 },
  ];

  const stats = [
    { icon: Award, value: "50+", label: "Projects Completed" },
    { icon: Users, value: "30+", label: "Happy Clients" },
    { icon: Coffee, value: "1000+", label: "Cups of Coffee" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center"
        >
          {/* Profile Image Section */}
          <motion.div variants={itemVariants} className="relative">
            <div className="relative max-w-md mx-auto lg:mx-0">
              {/* Decorative Elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl" />
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-full blur-lg" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-lg" />
              
              {/* Main Image Container */}
              <div className="relative card-modern overflow-hidden">
                <img
                  src="/mask-group-1.png"
                  alt="About Hossam Mohamed"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/50 to-transparent" />
              </div>

              {/* Floating Stats */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="absolute -bottom-4 -right-4 glass-effect p-4 rounded-2xl"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text">5+</div>
                  <div className="text-sm text-gray-300">Years Experience</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold font-display">
                <span className="text-white">About </span>
                <span className="gradient-text">Me</span>
              </h2>
              
              <p className="text-xl text-blue-400 font-medium">
                UX/UI Designer & Frontend Developer
              </p>
            </div>

            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p className="text-lg">
                I'm a passionate designer and developer who believes in creating digital experiences 
                that not only look beautiful but also solve real problems. With over 5 years of experience, 
                I've helped businesses transform their ideas into engaging digital products.
              </p>
              
              <p className="text-lg">
                My approach combines user-centered design principles with modern development practices 
                to deliver solutions that users love and businesses value. I'm constantly learning and 
                evolving with the latest trends and technologies.
              </p>
            </div>

            {/* Skills */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">Core Skills</h3>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className="flex items-center gap-3 p-3 glass-effect rounded-xl"
                  >
                    <skill.icon className="w-5 h-5 text-blue-400" />
                    <div className="flex-1">
                      <div className="text-sm font-medium text-white">{skill.name}</div>
                      <div className="w-full bg-dark-700 rounded-full h-1.5 mt-1">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ delay: index * 0.1 + 0.3, duration: 1 }}
                          className="bg-gradient-to-r from-blue-500 to-purple-500 h-1.5 rounded-full"
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="text-center p-4 glass-effect rounded-xl"
                >
                  <stat.icon className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <Button className="btn-primary group">
                Learn More About Me
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};