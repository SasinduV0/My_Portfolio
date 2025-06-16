import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "../../../../components/ui/scroll-reveal";

interface WorkItem {
  id: string;
  title: string;
  type: 'image' | 'video' | 'slideshow';
  defaultSrc: string;
  hoverSrc?: string;
  slideImages?: string[];
  category: string;
}

export const WorkSection = (): JSX.Element => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [currentSlides, setCurrentSlides] = useState<Record<string, number>>({});

  // Define categories and work items
  const categories = [
    "All",
    "3D Art",
    "Digital Paintings",
    "Line Art",
    "Traditional Art"
  ];

  const workItems: WorkItem[] = [
    // 3D Renders with variants
    {
      id: "3d-1",
      title: "3D Anvil practice - Blender Guru",
      type: "image",
      defaultSrc: "/work/3D Render 1 varient 1.jpg",
      hoverSrc: "/work/3D Render 1 varient 2.jpg",
      category: "3D Art"
    },
    {
      id: "3d-2",
      title: "3D Donut practice - Blender Guru",
      type: "image",
      defaultSrc: "/work/3D Render 2 varient 1.jpg",
      hoverSrc: "/work/3D Render 2 varient 2.jpg",
      category: "3D Art"
    },
    {
      id: "3d-animation",
      title: "3D Donut Animation",
      type: "video",
      defaultSrc: "/work/3D Animation.mp4",
      category: "3D Art"
    },
    // Digital Paintings with variants
    {
      id: "digital-dark-1",
      title: "Dark Digital Art",
      type: "image",
      defaultSrc: "/work/Dark digital painting 1 varient 1 Transparent.png",
      hoverSrc: "/work/Dark digital painting 1 varient 2.jpg",
      category: "Digital Paintings"
    },
    {
      id: "digital-dragon-1",
      title: "Dragon Concept Art",
      type: "image",
      defaultSrc: "/work/Dark digital painting Dragon 1 varient 1.jpg",
      hoverSrc: "/work/Dark digital painting Dragon 1 varient 2.jpg",
      category: "Digital Paintings"
    },
    {
      id: "digital-dragon-slides",
      title: "Dragon Series",
      type: "slideshow",
      defaultSrc: "/work/dark digital slide/Dark digital painting Dragon 2.jpg",
      slideImages: [
        "/work/dark digital slide/Dark digital painting Dragon 2.jpg",
        "/work/dark digital slide/Dark digital painting Dragon 3.jpg"
      ],
      category: "Digital Paintings"
    },
    {
      id: "digital-monster",
      title: "Monster Concept",
      type: "image",
      defaultSrc: "/work/Dark digital painting Monster varient 1.jpg",
      hoverSrc: "/work/Dark digital painting Monster varient 2.jpg",
      category: "Digital Paintings"
    },
    {
      id: "digital-portrait-1",
      title: "Digital Portrait",
      type: "image",
      defaultSrc: "/work/Digital painting portrait 1 varient 1 Transparent.png",
      hoverSrc: "/work/Digital painting portrait 1 varient 2.jpg",
      category: "Digital Paintings"
    },
    {      
      id: "digital-portrait-2",
      title: "Digital Portrait 2",
      type: "image",
      defaultSrc: "/work/Digital painting portrait 2 varient 1.png",
      hoverSrc: "/work/Digital painting portrait 2 varient 2.jpg",
      category: "Digital Paintings"
    },
    {
      id: "digital-portrait-3",
      title: "Digital Portrait 3",
      type: "image",
      defaultSrc: "/work/Digital painting portrait 3 varient 1.jpg",
      hoverSrc: "/work/Digital painting portrait 3 varient 2.jpg",
      category: "Digital Paintings"
    },
    // Illustrator Work
    {
      id: "illustrator-cat",
      title: "Cat Illustration",
      type: "image",
      defaultSrc: "/work/Ilustrator cat varient 1.jpg",
      hoverSrc: "/work/Ilustrator cat varient 2.jpg",
      category: "Digital Paintings"
    },
    // Line Art Series
    {
      id: "line-art",
      title: "Line Art Collection",
      type: "slideshow",
      defaultSrc: "/work/line art slide/Line art 1.jpg",
      slideImages: [
        "/work/line art slide/Line art 1.jpg",
        "/work/line art slide/Line art 2.jpg",
        "/work/line art slide/Line art 3.jpg",
        "/work/line art slide/Line art 4.jpg",
        "/work/line art slide/Line art 5.jpg"
      ],
      category: "Line Art"
    },
    // Traditional Art Series
    {
      id: "pencil-animals",
      title: "Animal Studies",
      type: "slideshow",
      defaultSrc: "/work/pencil animal slide/Pencil Animals 1.jpg",
      slideImages: [
        "/work/pencil animal slide/Pencil Animals 1.jpg",
        "/work/pencil animal slide/Pencil Animals 2.jpg",
        "/work/pencil animal slide/Pencil Animals 3.jpg",
        "/work/pencil animal slide/Pencil Animals 4.jpg"
      ],
      category: "Traditional Art"
    },
    {
      id: "pencil-dark",
      title: "Dark Series",
      type: "slideshow",
      defaultSrc: "/work/pencil dark slide/Pencil art dark 1.jpg",
      slideImages: [
        "/work/pencil dark slide/Pencil art dark 1.jpg",
        "/work/pencil dark slide/Pencil art dark 2.jpg",
        "/work/pencil dark slide/Pencil art dark 3.jpg"
      ],
      category: "Traditional Art"
    },
    {
      id: "pencil-portraits",
      title: "Portrait Studies",
      type: "slideshow",
      defaultSrc: "/work/pencil portrait slide/Pencil Portrait 1.jpg",
      slideImages: [
        "/work/pencil portrait slide/Pencil Portrait 1.jpg",
        "/work/pencil portrait slide/Pencil Portrait 2.jpg",
        "/work/pencil portrait slide/Pencil Portrait 3.jpg"
      ],
      category: "Traditional Art"
    }
  ];

  // Filter work items based on selected category
  const filteredWorks = selectedCategory === "All" 
    ? workItems 
    : workItems.filter(item => item.category === selectedCategory);

  // Handle slideshow rotation
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlides(prevSlides => {
        const newSlides = { ...prevSlides };
        workItems.forEach(item => {
          if (item.type === 'slideshow' && item.slideImages) {
            const currentIndex = prevSlides[item.id] || 0;
            newSlides[item.id] = (currentIndex + 1) % item.slideImages.length;
          }
        });
        return newSlides;
      });
    }, 2000);

    return () => clearInterval(slideInterval);
  }, []);

  // Animation variants
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
    <section className="section-padding bg-gradient-to-b from-dark-900/50 to-dark-800/50" id="work">
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
              <span className="gradient-text">Work</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto text-balance">
              A showcase of my creative journey through digital and traditional art
            </p>
          </motion.div>
        </ScrollReveal>

        {/* Category Filter */}
        <ScrollReveal direction="up" delay={0.2} className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-lg shadow-amber-500/25"
                    : "bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Gallery Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="wait">
            {filteredWorks.map((work) => (
              <motion.div
                key={work.id}
                variants={itemVariants}
                layout
                className="relative group aspect-square overflow-hidden rounded-2xl"
              >
                {work.type === 'video' ? (
                  <video
                    className="w-full h-full object-cover"
                    src={work.defaultSrc}
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                ) : work.type === 'slideshow' ? (
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentSlides[work.id] || 0}
                      src={work.slideImages?.[currentSlides[work.id] || 0] || work.defaultSrc}
                      alt={work.title}
                      className="w-full h-full object-cover"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.5 }}
                    />
                  </AnimatePresence>
                ) : (
                  <>
                    <img
                      src={work.defaultSrc}
                      alt={work.title}                      className="w-full h-full object-cover absolute inset-0 transition-all duration-500 ease-out group-hover:scale-110"
                      style={{ opacity: 1 }}
                    />
                    {work.hoverSrc && (
                      <img
                        src={work.hoverSrc}
                        alt={`${work.title} - Variant`}
                        className="w-full h-full object-cover absolute inset-0 transition-all duration-500 ease-out opacity-0 group-hover:opacity-100 group-hover:scale-110"
                      />
                    )}
                  </>
                )}

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out transform group-hover:translate-y-0 translate-y-4">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{work.title}</h3>
                    <p className="text-gray-300 text-sm">{work.category}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
