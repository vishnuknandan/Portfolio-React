import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'k.vishnu@lead.ac.in',
      link: 'mailto:k.vishnu@lead.ac.in',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/vishnu',
      link: 'https://github.com/vishnuknandan/',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/vishnu',
      link: 'https://www.linkedin.com/in/vishnunandan/',
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="contact"
      className="py-24 px-4 sm:px-8 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold text-gray-800 dark:text-white"
        >
          Let's Connect
        </motion.h2>
        <p className="mt-4 text-gray-600 dark:text-gray-400">
          Feel free to reach out to me via any of the platforms below.
        </p>
        <div className="h-1 w-16 mx-auto mt-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded"></div>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
      >
        {contactInfo.map((info) => (
          <motion.a
            key={info.label}
            href={info.link}
            target="_blank"
            rel="noopener noreferrer"
            variants={item}
            whileHover={{ scale: 1.05 }}
            className="relative group p-6 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl blur opacity-20 group-hover:opacity-40 transition"></div>

            <div className="relative flex items-center space-x-4 z-10">
              <div className="p-4 bg-blue-100 dark:bg-blue-900 rounded-full transform group-hover:scale-110 transition-transform">
                <info.icon className="w-6 h-6 text-blue-500" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                  {info.label}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 break-words">
                  {info.value}
                </p>
              </div>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
};

export default Contact;
