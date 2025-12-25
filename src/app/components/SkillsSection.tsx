import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  const hardSkills = [
    { category: 'Frontend', skills: ['HTML', 'CSS', 'JavaScript', 'ReactJS', 'Figma'] },
    { category: 'Backend', skills: ['C++', 'Java', 'Spring Boot'] },
    { category: 'Database', skills: ['MySQL'] },
    { category: 'Tools', skills: ['GitHub', 'Docker', 'Linux'] },
  ];

  const softSkills = [
    'Communication (English, Vietnamese)',
    'Teamwork',
    'Problem-Solving',
    'Time Management'
  ];

  return (
    <section ref={sectionRef} id="skills" className="min-h-screen py-32 px-12 bg-[#1a1a3e] text-white relative overflow-hidden">
      {/* Background image (dimmed) - replace URL or import local image from src/assets/images */}
      <motion.div className="absolute inset-0" style={{ y }}>
        <img
          src={new URL('../../assets/images/boat.jpg', import.meta.url).href}
          alt="Skills background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </motion.div>

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
            className="text-white/50 block mb-2"
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
            02 — EXPERTISE
          </motion.span>
          <motion.h2
            className="text-white"
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
            SKILLS
          </motion.h2>
        </motion.div>

        {/* Education Section (image removed; text expanded) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-32 grid grid-cols-12 gap-8"
        >
          <motion.div
            className="col-span-12"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div>
              <p
                className="text-white/60 mb-4"
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '0.75rem',
                  letterSpacing: '0.3em',
                  fontWeight: 300
                }}
              >
                EDUCATION
              </p>
              <h3
                className="text-white mb-4"
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: 'clamp(2rem, 4vw, 3rem)',
                  fontWeight: 700,
                  color: '#b87b50',
                  fontStyle: 'italic'
                }}
              >
                University of Transport
                <br />
                Ho Chi Minh City
              </h3>
              <div className="space-y-2 mb-8">
                <p className="text-white/70" style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.875rem' }}>
                  Major: Information Technology
                </p>
                <p className="text-white/70" style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.875rem' }}>
                  Academic Year: 2023 — Present
                </p>
              </div>
              <motion.div
                className="h-[1px] w-32 bg-white"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                style={{ transformOrigin: "left" }}
              ></motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Hard Skills - Magazine Grid Layout */}
        <div className="mb-32">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-white mb-12"
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '2.5rem',
              fontWeight: 600,
              fontStyle: 'italic'
            }}
          >
            Technical Skills
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            {hardSkills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ x: 10 }}
              >
                <div className="border-t border-white pt-6">
                  <h4
                    className="text-white/60 mb-4"
                    style={{
                      fontFamily: 'Montserrat, sans-serif',
                      fontSize: '0.75rem',
                      letterSpacing: '0.3em',
                      fontWeight: 300
                    }}
                  >
                    {skillGroup.category.toUpperCase()}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-white"
                        style={{
                          fontFamily: 'Cormorant Garamond, serif',
                          fontSize: '1.25rem',
                          fontWeight: 300
                        }}
                      >
                        {skill}
                        {skillGroup.skills.indexOf(skill) !== skillGroup.skills.length - 1 && <span className="text-white/40 mx-2">•</span>}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Soft Skills - Vertical List */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-12 gap-8 mb-32"
        >
          <div className="col-span-12 lg:col-span-4">
            <h3
              className="text-white mb-2"
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '2.5rem',
                fontWeight: 600,
                fontStyle: 'italic'
              }}
            >
              Soft Skills
            </h3>
            <motion.div
              className="h-[1px] w-full bg-white mt-6"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              style={{ transformOrigin: "left" }}
            ></motion.div>
          </div>
          <div className="col-span-12 lg:col-span-8">
            <div className="space-y-6">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="flex items-baseline gap-6 pb-6 border-b border-white/20"
                  whileHover={{ x: 10, borderColor: "rgba(255,255,255,0.5)" }}
                >
                  <span
                    className="text-white/60"
                    style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.75rem' }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span
                    className="text-white flex-1"
                    style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.5rem', fontWeight: 300 }}
                  >
                    {skill}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Certificates - Minimal Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center py-16"
        >
          <motion.p
            className="text-white/60"
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '1.25rem',
              fontWeight: 300,
              fontStyle: 'italic'
            }}
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Currently pursuing certifications in web development and software engineering
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
