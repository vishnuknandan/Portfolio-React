import React from 'react';
import { motion } from 'framer-motion';
import {
  SiPython,
  SiMysql,
  SiDjango,
  SiReact,
  SiPostgresql,
  SiJavascript,
  SiSwagger,
  SiJupyter
} from 'react-icons/si';

const skills = [
  { name: 'Python', icon: SiPython, color: 'text-blue-600' },
  { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400' },
  { name: 'Django', icon: SiDjango, color: 'text-green-700' },
  { name: 'React.js', icon: SiReact, color: 'text-cyan-500' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-indigo-600' },
  { name: 'REST API', icon: SiSwagger, color: 'text-purple-700' },
  { name: 'MySQL', icon: SiMysql, color: 'text-blue-700' },
  { name: 'Data Science', icon: SiJupyter, color: 'text-orange-500' },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 }
};

const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white"
          >
            Technical Skills
          </motion.h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto mt-4 rounded"></div>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8"
        >
          {skills.map(({ name, icon: Icon, color }) => (
            <motion.div
              key={name}
              variants={item}
              whileHover={{ scale: 1.07 }}
              className="relative group cursor-pointer"
            >
              <div
                className={`absolute inset-0 ${color.replace(
                  'text-',
                  'bg-'
                )} rounded-xl blur-xl opacity-20 group-hover:opacity-40 transition duration-500`}
              ></div>
              <div className="relative p-7 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-500 transition-all duration-300 flex flex-col items-center space-y-4">
                <Icon className={`w-14 h-14 ${color}`} />
                <span className="font-semibold text-gray-900 dark:text-white text-lg">{name}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
