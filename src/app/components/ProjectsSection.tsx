import { motion, useScroll, useTransform } from "motion/react";
import { ExternalLink } from "lucide-react";
import { useRef } from "react";

export function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const projects = [
    {
      title: 'Carbon Credit Marketplace',
      description: 'An open-source web platform designed for electric vehicle (EV) owners to earn, trade, and manage carbon credits through eco-friendly activities.',
      tech: ['Java 21', 'Spring Boot 3.2.0', 'Maven', 'MySQL 8.0', 'Docker', 'Flyway', 'Lombok'],
      image: new URL('../../assets/images/carbon.jpg', import.meta.url).href,
      repoUrl: 'https://github.com/QuocVinhTrinhLam/Carbon-Credit-Marketplace-for-EV-Owners.git',
      year: '2024'
    },
    {
      title: 'Task Management System',
      description: 'A collaborative task management tool with real-time updates and team collaboration features.',
      tech: ['ReactJS', 'NodeJS', 'MongoDB'],
      image: new URL('../../assets/images/project2.jpg', import.meta.url).href,
      year: '2024'
    },
    {
      title: 'Portfolio Website',
      description: 'A responsive portfolio website showcasing projects and skills with modern design and animations.',
      tech: ['ReactJS', 'Tailwind CSS', 'Motion'],
      image: new URL('../../assets/images/web.jpg', import.meta.url).href,
      year: '2024'
    },
  ];

  return (
    <section ref={sectionRef} id="projects" className="min-h-screen py-32 px-12 relative overflow-hidden" style={{ backgroundColor: 'transparent' }}>
      {/* Animated Background */}
      <motion.div 
        className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[#1a1a3e] opacity-5"
        style={{ y }}
      ></motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <motion.span 
            className="text-[#1a1a3e]/60 block mb-2"
            style={{ 
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '0.75rem',
              letterSpacing: '0.3em',
              fontWeight: 300
            }}
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            03 — SELECTED WORKS
          </motion.span>
          <motion.h2
            className="text-[#1a1a3e] accent-underline"
            style={{ 
              fontFamily: 'Cinzel, serif',
              fontSize: 'clamp(3rem, 8vw, 5rem)',
              fontWeight: 400,
              letterSpacing: '0.1em'
            }}
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            PROJECTS
          </motion.h2>
        </motion.div>

        {/* Projects - Editorial Layout */}
        <div className="space-y-32">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
            >
              {index % 2 === 0 ? (
                // Layout 1: Image on left, info on right
                <div className="grid grid-cols-12 gap-8 items-start">
                  <motion.div 
                    className="col-span-12 lg:col-span-8"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <motion.div 
                      className="aspect-[16/10] overflow-hidden"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.6 }}
                    >
                      <motion.img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                      />
                    </motion.div>
                  </motion.div>
                  <motion.div 
                    className="col-span-12 lg:col-span-4 lg:pt-12"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <motion.p 
                      className="text-[#1a1a3e]/60 mb-4"
                      style={{ 
                        fontFamily: 'Montserrat, sans-serif',
                        fontSize: '0.75rem',
                        letterSpacing: '0.3em',
                        fontWeight: 300
                      }}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      viewport={{ once: true }}
                    >
                      {project.year}
                    </motion.p>
                    <h3 
                      className="text-accent mb-6"
                      style={{ 
                        fontFamily: 'Cormorant Garamond, serif',
                        fontSize: '2.5rem',
                        fontWeight: 600
                      }}
                    >
                      {project.title}
                    </h3>
                    <p 
                      className="text-[#333] mb-8 leading-relaxed"
                      style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.875rem', fontWeight: 300 }}
                    >
                      {project.description}
                    </p>
                    <div className="space-y-2 mb-8">
                      {project.tech.map((tech, techIndex) => (
                        <motion.p 
                          key={tech}
                          className="text-[#1a1a3e]"
                          style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.75rem', letterSpacing: '0.1em' }}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.6 + techIndex * 0.1 }}
                          viewport={{ once: true }}
                        >
                          {tech}
                        </motion.p>
                      ))}
                    </div>
                    <motion.a
                      href={project.repoUrl ?? '#'}
                      target={project.repoUrl ? '_blank' : undefined}
                      rel={project.repoUrl ? 'noopener noreferrer' : undefined}
                      className="inline-flex items-center gap-2 text-[#1a1a3e] hover:text-black transition-colors duration-500 group"
                      style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.75rem', letterSpacing: '0.2em' }}
                      whileHover={{ x: 5 }}
                    >
                      VIEW PROJECT
                      <ExternalLink size={14} strokeWidth={1.5} className="group-hover:translate-x-1 transition-transform duration-500" />
                    </motion.a>
                  </motion.div>
                </div>
              ) : (
                // Layout 2: Info on left, image on right
                <div className="grid grid-cols-12 gap-8 items-center">
                  <motion.div 
                    className="col-span-12 lg:col-span-5"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <motion.div 
                      className="h-[1px] w-full bg-[#1a1a3e] mb-8"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 0.8 }}
                      viewport={{ once: true }}
                      style={{ transformOrigin: "left" }}
                    ></motion.div>
                    <p 
                      className="text-[#1a1a3e]/60 mb-4"
                      style={{ 
                        fontFamily: 'Montserrat, sans-serif',
                        fontSize: '0.75rem',
                        letterSpacing: '0.3em',
                        fontWeight: 300
                      }}
                    >
                      {project.year}
                    </p>
                    <h3 
                      className="text-[#1a1a3e] mb-6"
                      style={{ 
                        fontFamily: 'Cormorant Garamond, serif',
                        fontSize: '3rem',
                        fontWeight: 600
                      }}
                    >
                      {project.title}
                    </h3>
                    <p 
                      className="text-[#333] mb-8 leading-relaxed"
                      style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '1rem', fontWeight: 300 }}
                    >
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-3 mb-8">
                      {project.tech.map((tech, techIndex) => (
                        <motion.span 
                          key={tech}
                          className="text-[#1a1a3e]/70"
                          style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.75rem' }}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.4 + techIndex * 0.1 }}
                          viewport={{ once: true }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                    <motion.a
                      href={project.repoUrl ?? '#'}
                      target={project.repoUrl ? '_blank' : undefined}
                      rel={project.repoUrl ? 'noopener noreferrer' : undefined}
                      className="inline-flex items-center gap-2 text-[#1a1a3e] hover:text-black transition-colors duration-500 border-b border-[#1a1a3e] hover:border-black pb-1 group"
                      style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.75rem', letterSpacing: '0.2em' }}
                      whileHover={{ x: 5 }}
                    >
                      VIEW PROJECT
                      <ExternalLink size={14} strokeWidth={1.5} className="group-hover:translate-x-1 transition-transform duration-500" />
                    </motion.a>
                  </motion.div>
                  <motion.div 
                    className="col-span-12 lg:col-span-7"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <motion.div 
                      className="aspect-[4/3] overflow-hidden"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.6 }}
                    >
                      <motion.img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                      />
                    </motion.div>
                  </motion.div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
