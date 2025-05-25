import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-tr from-gray-950 via-black to-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
        {/* Branding */}
        <div className="text-center md:text-left">
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
            Vishnu K
          </h2>
          <p className="mt-3 text-gray-400 text-sm leading-relaxed">
            Python Full Stack Developer passionate about building scalable, user-friendly, and inclusive web applications.
          </p>
        </div>

        {/* Social Media */}
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4 text-blue-400">Let’s Connect</h3>
          <div className="flex justify-center gap-6">
            {[
              {
                label: 'Email',
                icon: <Mail size={22} />,
                href: 'mailto:vishnuk@email.com',
              },
              {
                label: 'GitHub',
                icon: <Github size={22} />,
                href: 'https://github.com/vishnuknandan/',
              },
              {
                label: 'LinkedIn',
                icon: <Linkedin size={22} />,
                href: 'https://www.linkedin.com/in/vishnunandan/',
              },
            ].map((item, index) => (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-3 rounded-full hover:bg-blue-600 transition duration-300"
                aria-label={item.label}
              >
                {item.icon}
                <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs px-2 py-1 rounded bg-black text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  {item.label}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Scroll to Top */}
        <div className="text-center md:text-right flex justify-center md:justify-end items-center">
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition"
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} />
            <span>Back to Top</span>
          </button>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-12 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} <span className="text-blue-400 font-medium">Vishnu K</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
