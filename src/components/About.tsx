import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="relative py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 overflow-hidden"
    >
      {/* Background Glow Elements */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-700 opacity-20 rounded-full filter blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-pink-600 opacity-20 rounded-full filter blur-3xl animate-pulse"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10 lg:px-12">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Me</span>
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Developer Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
            <div className="relative overflow-hidden rounded-2xl border border-gray-700 hover:border-purple-500 transition-all duration-300">
              <img
                src="https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Python Full Stack Developer"
                className="w-full h-[400px] object-cover transform hover:scale-110 transition-transform duration-500"
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-gray-300 space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              MCA Graduate | Python Full Stack Developer
            </h3>
            <p className="leading-relaxed text-lg">
              I'm <span className="text-purple-400 font-medium">Vishnu K</span>, a passionate developer with a strong foundation in full-stack web development. Currently pursuing my Master of Computer Applications (MCA), I thrive on turning ideas into scalable, secure, and responsive web applications.
            </p>
            <p className="leading-relaxed text-lg">
              I recently completed a 6-month intensive internship at <strong>Luminar Technolab</strong>, where I developed real-world applications using <strong>Django, React.js</strong> and integrated RESTful APIs. I aim to build elegant and accessible digital experiences that deliver value to users.
            </p>

            {/* Developer Info Cards */}
            <div className="grid grid-cols-2 gap-4 text-sm mt-6">
              <div className="bg-gray-800/70 backdrop-blur-lg p-4 rounded-lg border border-gray-700">
                <p className="text-gray-400">
                  <span className="text-purple-400 font-semibold">Location:</span><br />
                  Kerala, India
                </p>
              </div>
              <div className="bg-gray-800/70 backdrop-blur-lg p-4 rounded-lg border border-gray-700">
                <p className="text-gray-400">
                  <span className="text-purple-400 font-semibold">Education:</span><br />
                  MCA (2024–Present)
                </p>
              </div>
              <div className="bg-gray-800/70 backdrop-blur-lg p-4 rounded-lg border border-gray-700">
                <p className="text-gray-400">
                  <span className="text-purple-400 font-semibold">Tech Stack:</span><br />
                  Python, Django, React.js, REST APIs
                </p>
              </div>
              <div className="bg-gray-800/70 backdrop-blur-lg p-4 rounded-lg border border-gray-700">
                <p className="text-gray-400">
                  <span className="text-purple-400 font-semibold">Database:</span><br />
                  MySQL, PostgreSQL
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
