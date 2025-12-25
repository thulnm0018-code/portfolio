import { motion, useScroll, useTransform } from "motion/react";
import { Mail, Phone, MapPin, Github, Facebook, Linkedin } from "lucide-react";
import { useRef } from "react";

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section ref={sectionRef} id="contact" className="min-h-screen py-32 px-12 bg-black text-white relative overflow-hidden">
      {/* Animated Background Pattern */}
      <motion.div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          y
        }}
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
            04 — LET'S CONNECT
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
            CONTACT
          </motion.h2>
        </motion.div>

        {/* Contact Layout */}
        <div className="grid grid-cols-12 gap-16 mb-32">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="col-span-12 lg:col-span-5"
          >
            <h3
              className="text-white mb-12"
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '2rem',
                fontWeight: 600,
                fontStyle: 'italic'
              }}
            >
              Get in Touch
            </h3>

            <div className="space-y-8">
              {[
                { icon: Mail, label: "EMAIL", text: "lenguyenminhthu090605@gmail.com" },
                { icon: Phone, label: "PHONE", text: "0906128733" },
                { icon: MapPin, label: "LOCATION", text: "Phường Hiệp Bình, Thành phố Hồ Chí Minh" }
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  className="border-b border-white/20 pb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 10, borderColor: "rgba(255,255,255,0.5)" }}
                >
                  <div className="flex items-start gap-4 mb-2">
                    <item.icon className="text-white/70 mt-1" size={18} strokeWidth={1.5} />
                    <div>
                      <p
                        className="text-white/60 mb-1"
                        style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.75rem', letterSpacing: '0.2em' }}
                      >
                        {item.label}
                      </p>
                      <p
                        className="text-white"
                        style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.875rem' }}
                      >
                        {item.text}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="flex gap-6 mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
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
                  className="text-white/70 hover:text-white transition-colors duration-500"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon size={20} strokeWidth={1.5} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="col-span-12 lg:col-span-7"
          >
            <form className="space-y-8">
              <div className="grid grid-cols-2 gap-8">
                {['name', 'email'].map((field, index) => (
                  <motion.div
                    key={field}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <label
                      htmlFor={field}
                      className="text-white/60 mb-3 block"
                      style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.75rem', letterSpacing: '0.2em' }}
                    >
                      YOUR {field.toUpperCase()}
                    </label>
                    <motion.input
                      type={field === 'email' ? 'email' : 'text'}
                      id={field}
                      className="w-full bg-transparent border-b border-white/40 text-white py-3 focus:outline-none focus:border-white transition-colors duration-500"
                      style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.875rem' }}
                      whileFocus={{ borderColor: "rgba(255,255,255,1)" }}
                    />
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
              >
                <label
                  htmlFor="message"
                  className="text-white/60 mb-3 block"
                  style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.75rem', letterSpacing: '0.2em' }}
                >
                  MESSAGE
                </label>
                <motion.textarea
                  id="message"
                  rows={6}
                  className="w-full bg-transparent border-b border-white/40 text-white py-3 focus:outline-none focus:border-white transition-colors duration-500 resize-none"
                  style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.875rem' }}
                  whileFocus={{ borderColor: "rgba(255,255,255,1)" }}
                ></motion.textarea>
              </motion.div>

              <motion.button
                type="submit"
                className="border border-white text-white px-12 py-4 hover:bg-white hover:text-black transition-all duration-500"
                style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300, letterSpacing: '0.2em', fontSize: '0.75rem' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                SEND MESSAGE
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center pt-20 border-t border-white/20"
        >
          <motion.p
            className="text-white/60"
            style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.75rem', letterSpacing: '0.2em' }}
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            © 2024 Lê Nguyễn Minh Thư. ALL RIGHTS RESERVED.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
