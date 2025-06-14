import React from "react";
import { motion } from "framer-motion";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { ScrollReveal } from "../../../../components/ui/scroll-reveal";
import { 
  Palette, 
  Code2, 
  Smartphone, 
  Globe, 
  Zap, 
  Users,
  ArrowRight,
  CheckCircle
} from "lucide-react";

export const IntroductionSection = (): JSX.Element => {
  const services = [
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating intuitive and beautiful user interfaces that enhance user experience and drive engagement.",
      features: ["User Research", "Wireframing", "Prototyping", "Visual Design"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Code2,
      title: "Frontend Development",
      description: "Building responsive and performant web applications using modern technologies and best practices.",
      features: ["React/Next.js", "TypeScript", "Tailwind CSS", "Performance Optimization"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Smartphone,
      title: "Mobile Design",
      description: "Designing mobile-first experiences that work seamlessly across all devices and screen sizes.",
      features: ["Responsive Design", "Mobile UX", "Touch Interactions", "App Design"],
      color: "from-green-500 to-teal-500"
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Full-stack web development solutions from concept to deployment with modern frameworks.",
      features: ["Full-Stack Development", "API Integration", "Database Design", "Cloud Deployment"],
      color: "from-orange-500 to-red-500"
    }
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

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
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
    <section className="section-padding bg-gradient-to-b from-dark-800/50 to-dark-900/50">
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
              <span className="text-white">My </span>
              <span className="gradient-text">Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto text-balance">
              I offer comprehensive design and development services to help bring your digital vision to life
            </p>
          </motion.div>
        </ScrollReveal>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <Card className="h-full card-modern overflow-hidden">
                <CardContent className="p-8 h-full flex flex-col">
                  {/* Service Icon */}
                  <div className="relative mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} p-4 group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-full h-full text-white" />
                    </div>
                    <div className={`absolute inset-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-300`} />
                  </div>

                  {/* Service Content */}
                  <div className="flex-1 space-y-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-300 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-3">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span className="text-sm text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="mt-6">
                    <Button className="w-full btn-secondary group/btn">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Process Section */}
        <ScrollReveal direction="up" delay={0.3} className="mt-20">
          <div className="text-center space-y-12">
            <div className="space-y-4">
              <h3 className="text-3xl lg:text-4xl font-bold font-display text-white">
                My <span className="gradient-text">Process</span>
              </h3>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                A structured approach to deliver exceptional results
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { icon: Users, title: "Discover", description: "Understanding your needs and goals" },
                { icon: Palette, title: "Design", description: "Creating beautiful and functional designs" },
                { icon: Code2, title: "Develop", description: "Building with modern technologies" },
                { icon: Zap, title: "Deploy", description: "Launching and optimizing your project" }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="relative"
                >
                  <div className="text-center space-y-4">
                    <div className="relative mx-auto w-16 h-16">
                      <div className="w-full h-full bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl p-4">
                        <step.icon className="w-full h-full text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full flex items-center justify-center text-xs font-bold text-white">
                        {index + 1}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">{step.title}</h4>
                      <p className="text-sm text-gray-400">{step.description}</p>
                    </div>
                  </div>
                  
                  {/* Connector Line */}
                  {index < 3 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-amber-500/50 to-orange-500/50 transform -translate-x-8" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};