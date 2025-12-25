import { motion, useScroll, useTransform } from "motion/react";
import { Github, Facebook, Linkedin, Mail, MapPin, Calendar, Download } from "lucide-react";
import { useRef } from "react";

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="min-h-screen py-32 px-12 relative overflow-hidden about-bg texture-strong"
    >
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#1a1a3e] opacity-5"
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
            01 — INTRODUCTION
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
            ABOUT
          </motion.h2>
        </motion.div>

        {/* Editorial Layout */}
        <div className="grid grid-cols-12 gap-8 mb-32">
          {/* Large Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="col-span-12 lg:col-span-7"
          >
            <motion.div
              className="aspect-[4/5] overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={new URL('../../assets/images/sv.jpg', import.meta.url).href}
                alt="Professional"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </motion.div>
          </motion.div>

          {/* Info Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            viewport={{ once: true }}
            className="col-span-12 lg:col-span-5 flex flex-col justify-center"
          >
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h3
                  className="text-black mb-2"
                  style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '3rem',
                    fontWeight: 300
                  }}
                >
                  Lê Nguyễn Minh Thư
                </h3>
                <p
                  className="text-[#1a1a3e]/70"
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: '0.875rem',
                    letterSpacing: '0.2em',
                    fontWeight: 300
                  }}
                >
                  INTERN FRONT-END DEVELOPER
                </p>
              </motion.div>

              <motion.div
                className="h-[1px] w-full bg-[#1a1a3e]"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                style={{ transformOrigin: "left" }}
              ></motion.div>

              <div className="space-y-4">
                {[
                  { icon: Calendar, text: "09/06/2005" },
                  { icon: MapPin, text: "Phường Hiệp Bình, Thành phố Hồ Chí Minh" },
                  { icon: Mail, text: "lenguyenminhthu090605@gmail.com" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <item.icon size={18} className="text-[#1a1a3e] mt-1" strokeWidth={1.5} />
                    <div>
                      <p className="text-[#666]" style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.875rem' }}>
                        {item.text}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="flex gap-6 pt-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                viewport={{ once: true }}
              >
                {[
                  { icon: Github, href: "https://github.com/thulnm0018-code" },
                  { icon: Facebook, href: "https://www.facebook.com/thu.lenguyenminh.1?locale=vi_VN" },
                  { icon: Linkedin, href: "https://linkedin.com" }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:text-[#1a1a3e] transition-colors duration-500"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <social.icon size={20} strokeWidth={1.5} />
                  </motion.a>
                ))}
              </motion.div>

              <motion.button
                className="border border-[#1a1a3e] text-[#1a1a3e] px-8 py-3 hover:bg-[#1a1a3e] hover:text-white transition-all duration-500 flex items-center gap-3 mt-8"
                style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300, letterSpacing: '0.2em', fontSize: '0.75rem' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={16} strokeWidth={1.5} />
                DOWNLOAD CV
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Information (centered and emphasized) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="w-full mb-12"
        >
          <motion.div
            className="w-full"
            initial={{ scale: 0.995 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6 }}
            style={{ padding: '1rem 0' }}
          >
            <p style={{ color: '#800020', fontStyle: 'italic', fontSize: '1.05rem', fontFamily: 'Montserrat, sans-serif', lineHeight: 1.8, margin: 0, textAlign: 'justify' }}>
              “I was born and raised in Ho Chi Minh City, Vietnam, and I’m currently 20 years old.
              <br /><br />
              I always try to keep myself updated with the latest technologies and trends because I believe that continuous learning is the key to growth in this fast-changing world.
              <br /><br />
              If I had to describe my biggest strength, it would be my diligence.”
            </p>
          </motion.div>
        </motion.div>

        {/* Career Goals - Full Width */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-12 gap-8 mb-32 mt-12"
        >
          <motion.div
            className="col-span-12 lg:col-span-3"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p
              className="text-[#b87b50]"
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '1.5rem',
                fontWeight: 700,
                fontStyle: 'italic'
              }}
            >
              Career Goals
            </p>
          </motion.div>
          <motion.div
            className="col-span-12 lg:col-span-9"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div
              className="text-[#333] leading-loose"
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '1.25rem',
                fontWeight: 300
              }}
            >
              <ul className="list-disc ml-6 space-y-3">
                <li>Solid Frontend Foundation — Master HTML, CSS, JavaScript and core programming concepts.</li>
                <li>Design-Driven Mindset — Create intuitive, user-focused digital experiences.</li>
                <li>Full-Stack Growth — Expand backend skills: APIs, databases, security, scalable systems.</li>
                <li>Professional Excellence — Join real-world projects and collaborations to grow as a creative developer.</li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
