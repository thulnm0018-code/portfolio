import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

export function Navbar() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDarkBg, setIsDarkBg] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const navEl = navRef.current;
    if (!navEl) return;

    const getNavHeight = () => navEl.getBoundingClientRect().height || 0;

    let ticking = false;
    const checkOverlap = () => {
      const h = getNavHeight();
      const ids = ['about', 'projects'];
      const anyOverlap = ids.some((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const r = el.getBoundingClientRect();
        return r.top <= h && r.bottom >= 0;
      });
      setIsDarkBg(anyOverlap);
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          checkOverlap();
          ticking = false;
        });
        ticking = true;
      }
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <motion.nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 px-12 py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0.15 }}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      transition={{ duration: 0.4 }}
    >
      <div className="max-w-7xl mx-auto">
        <ul className="flex justify-center gap-16">
          {['about', 'skills', 'projects', 'contact'].map((item) => (
            <li key={item}>
              <button
                onClick={() => scrollToSection(item)}
                className={`${isDarkBg ? 'text-black' : 'text-white'} hover:text-[#1a1a3e] transition-colors duration-500 uppercase tracking-[0.3em] relative group`}
                style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300, fontSize: '0.75rem' }}
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#1a1a3e] group-hover:w-full transition-all duration-500"></span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}