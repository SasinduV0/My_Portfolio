import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../components/ui/navigation-menu";
import { ScrollReveal } from "../../components/ui/scroll-reveal";
import { AnimatedText } from "../../components/ui/animated-text";
import { FloatingElements } from "../../components/ui/floating-elements";
import { AboutSection } from "./sections/AboutSection/AboutSection";
import { ContactSection } from "./sections/ContactSection";
import { IntroductionSection } from "./sections/IntroductionSection";
import { ServicesSection } from "./sections/ServicesSection";
import { WorkSection } from "./sections/WorkSection";
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  Download, 
  Menu, 
  X,
  ChevronDown,
  ArrowRight,
  Facebook
} from "lucide-react";

export const Desktop = (): JSX.Element => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Navigation menu items
  const navItems = [
    { text: "Home", href: "#home" },
    { text: "About", href: "#about" },
    { text: "Services", href: "#services" },
    { text: "Portfolio", href: "#portfolio" },
    { text: "Work", href: "#work" },
    { text: "Contact", href: "#contact" },
  ];

  // Social media links with modern icons
  const socialLinks = [
    { icon: Github, href: "https://github.com/SasinduV0", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/sasindu-dissanayake-bb794b305/", label: "LinkedIn" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Mail, href: "mailto:22IT0470@itum.mrt.ac.lk", label: "Email" },
  ];

  // Animated role texts
  const roleTexts = [
    "Concept artist",
    "Illustrator",
    "3D Artist",
    "Frontend Developer",
    "Creative Thinker",
    "Problem Solver"
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-950 to-zinc-900 relative overflow-hidden">
      {/* Floating Background Elements */}
      <FloatingElements />
      
      {/* Background Mesh Gradient */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,165,0,0.05),transparent)] opacity-30 pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        {/* Modern Header/Navigation */}
        <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            isScrolled 
              ? 'glass-effect shadow-2xl shadow-black/20' 
              : 'bg-transparent'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4 lg:py-6">
              {/* Logo */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                <div className="text-2xl lg:text-3xl font-bold text-orange-500 gradient-text font-display">
                  S P
                </div>
                <div className="absolute -inset-2 bg-gradient-to-r from-amber-600/20 to-orange-600/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>

              {/* Desktop Navigation */}
              <NavigationMenu className="hidden lg:flex">
                <NavigationMenuList className="flex gap-2">
                  {navItems.map((item, index) => (
                    <NavigationMenuItem key={index}>
                      <NavigationMenuLink
                        onClick={() => scrollToSection(item.href)}
                        className="nav-link cursor-pointer"
                      >
                        {item.text}
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-white hover:text-blue-400 transition-colors"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="lg:hidden glass-effect border-t border-white/10"
            >
              <div className="px-4 py-6 space-y-4">
                {navItems.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToSection(item.href)}
                    className="block w-full text-left px-4 py-2 text-white hover:text-amber-400 transition-colors"
                  >
                    {item.text}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </motion.header>

        {/* Modern Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center pt-20 lg:pt-0">
          <div className="container-padding w-full">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-8"
              >
                <div className="space-y-4">
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-lg lg:text-xl text-amber-400 font-medium"
                  >
                    Hello, I'm
                  </motion.p>
                  
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white font-display leading-tight"
                  >
                    Sasindu
                    <br />
                    <span className="gradient-text">Poornima</span>
                  </motion.h1>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="text-2xl lg:text-3xl text-white font-semibold"
                  >
                    I'm a{" "}
                    <AnimatedText
                      texts={roleTexts}
                      className="gradient-text"
                      typingSpeed={100}
                      deletingSpeed={50}
                      pauseDuration={2000}
                    />
                  </motion.div>
                </div>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 }}
                  className="text-lg lg:text-xl text-gray-300 leading-relaxed max-w-2xl text-balance"
                >
                  I create exceptional digital experiences that combine beautiful design 
                  with seamless functionality. Let's build something amazing together.
                </motion.p>

                {/* Social Links */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  className="flex gap-4"
                >
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3 glass-effect rounded-xl hover:bg-white/20 transition-all duration-300 group"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5 text-gray-300 group-hover:text-amber-400 transition-colors" />
                    </motion.a>
                  ))}
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.4 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <Button className="btn-primary group">
                    <Download className="w-5 h-5 mr-2 group-hover:animate-bounce-subtle" />
                    Download CV
                  </Button>
                  
                  <Button 
                    className="btn-secondary group"
                    onClick={() => scrollToSection('#contact')}
                  >
                    Let's Talk
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
              </motion.div>

              {/* Modern Profile Image */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative flex justify-center lg:justify-end"
              >
                <div className="relative">
                  {/* Animated Background Elements */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 w-80 h-80 lg:w-96 lg:h-96"
                  >
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 blur-xl" />
                  </motion.div>
                  
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-4 w-72 h-72 lg:w-88 lg:h-88"
                  >
                    <div className="absolute inset-0 rounded-full border-2 border-gradient-to-r from-amber-400/30 to-orange-400/30" />
                  </motion.div>

                  {/* Profile Image Container */}
                  <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden glass-effect glow-effect">
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-orange-500/20" />
                    <img
                      src="/mask-group.png"
                      alt="Sasindu Poornima"
                      className="w-full h-full object-cover scale-110"
                    />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 2 }}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="flex flex-col items-center gap-2 text-gray-400 cursor-pointer"
                onClick={() => scrollToSection('#about')}
              >
                <span className="text-sm font-medium">Scroll Up</span>
                <ChevronDown className="w-5 h-5" />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Sections with Scroll Reveal */}
        <ScrollReveal direction="up" delay={0.2}>
          <section id="about">
            <AboutSection />
          </section>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.2}>
          <section id="services">
            <IntroductionSection />
          </section>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.2}>
          <section id="portfolio">
            <ServicesSection />
          </section>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.2}>
          <section id="work">
            <WorkSection />
          </section>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.2}>
          <section id="contact">
            <div className="section-padding">
              <div className="container-padding">
                <div className="text-center mb-16">
                  <h2 className="text-4xl lg:text-5xl font-bold font-display mb-4">
                    <span className="text-white">Let's Work </span>
                    <span className="gradient-text">Together</span>
                  </h2>
                  <p className="text-xl text-gray-300 max-w-2xl mx-auto text-balance">
                    Ready to bring your ideas to life? Let's discuss your project and create something extraordinary.
                  </p>
                </div>
                <ContactSection />
              </div>
            </div>
          </section>
        </ScrollReveal>
      </div>
    </div>
  );
};