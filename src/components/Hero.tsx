import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Send } from 'lucide-react';

const textVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
    },
  }),
};

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      window.scrollTo({
        top: aboutSection.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="font-sans relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#eef2ff] via-white to-[#fdfdfd] dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Background animation */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-0 left-0 w-96 h-96 bg-indigo-200 dark:bg-indigo-800 opacity-30 rounded-full filter blur-3xl"
        />
        <motion.div
          animate={{ x: [0, 40, 0] }}
          transition={{ duration: 7, repeat: Infinity }}
          className="absolute bottom-0 right-0 w-96 h-96 bg-pink-200 dark:bg-pink-700 opacity-30 rounded-full filter blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-5xl text-center px-6 py-24">
        <motion.p
          custom={0}
          variants={textVariant}
          initial="hidden"
          animate="visible"
          className="text-indigo-600 dark:text-indigo-400 text-sm md:text-base mb-3 font-semibold tracking-widest uppercase"
        >
          Hello 👋, I’m
        </motion.p>

        <motion.h1
          custom={1}
          variants={textVariant}
          initial="hidden"
          animate="visible"
          className="text-5xl md:text-7xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 dark:from-indigo-400 dark:to-pink-400"
        >
          Vishnu K
        </motion.h1>

        <motion.h2
          custom={2}
          variants={textVariant}
          initial="hidden"
          animate="visible"
          className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-6"
        >
          MCA Graduate | Python Web Developer
        </motion.h2>

        <motion.p
          custom={3}
          variants={textVariant}
          initial="hidden"
          animate="visible"
          className="text-md md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          I specialize in building intuitive, fast, and robust web applications using{' '}
          <strong>Python, Django, and React</strong>. Currently seeking exciting opportunities to apply my skills and grow.
        </motion.p>

        <motion.div
          custom={4}
          variants={textVariant}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:scale-105 transition transform"
          >
            <Send size={18} className="group-hover:animate-pulse" />
            Let’s Connect
          </a>

<a
  href="/vishnu_resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="group inline-flex items-center gap-2 px-8 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-white rounded-xl shadow-md hover:scale-105 transition transform"
>
  <Download size={18} className="group-hover:animate-bounce" />
  View Resume
</a>



        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
      >
        <button
          onClick={scrollToAbout}
          className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition"
          aria-label="Scroll Down"
        >
          <ArrowDown size={22} className="text-indigo-600 dark:text-indigo-400" />
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;
