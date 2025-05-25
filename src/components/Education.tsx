import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';

const Education: React.FC = () => {
  const education = [
    {
      degree: "Master of Computer Applications",
      institution: "Lead College of Management",
      year: "2024 - Present",
      university: "University of Calicut",
      logo: "/lead-logo.png" // Make sure this file exists in /public
    },
    {
      degree: "Bachelor of Science In Electronics",
      institution: "College of Applied science",
      year: "2020 - 2023",
      university: "University of Calicut",
      logo: "/cas-logo.png" // Make sure this file exists in /public
    }
  ];

  return (
    <section
      id="education"
      className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white"
          >
            Education
          </motion.h2>
          <div className="h-1 w-16 bg-blue-500 mx-auto mt-4"></div>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg blur opacity-10 group-hover:opacity-20 transition duration-300"></div>
              <div className="relative p-6 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full">
                    <GraduationCap className="w-6 h-6 text-blue-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                      {edu.degree}
                    </h3>
                    <div className="flex items-center mb-2 space-x-2">
                      <img
                        src={edu.logo}
                        alt={`${edu.institution} logo`}
                        className="w-6 h-6 object-contain rounded-sm"
                      />
                      <p className="text-gray-600 dark:text-gray-400">{edu.institution}</p>
                    </div>
                    <div className="flex items-center text-gray-500 dark:text-gray-400 mb-2">
                      <Calendar className="w-4 h-4 mr-2" />
                      {edu.year}
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">
                      {edu.university}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
