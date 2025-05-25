import React, { useRef } from 'react';
import { useInView } from '../hooks/useInView';
import { ExternalLink } from 'lucide-react';

const Projects: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { threshold: 0.1 });

  const projects = [
    {
      id: 1,
      title: 'E-Blackcapz',
      description:
        'A full-featured e-commerce platform built with Django and React.js. Includes product management, user authentication, shopping cart, payment processing, and order management.',
      image:
        'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['Python', 'Django', 'React.js', 'MySQL'],
      features: [
        'Built a full-stack e-commerce application with Django for backend and React.js for frontend.',
        'Designed responsive UI/UX compatible with all device sizes.',
        'Integrated product search and filtering using Django search and Elasticsearch.',
        'Implemented key e-commerce features: user authentication, cart, checkout, and orders.',
        'Ensured secure API communication using Django REST Framework.',
      ],
      link: 'https://github.com/vishnuknandan/E-COMMERSE-WEBSITE',
    },
    {
      id: 2,
      title: 'UpLearn',
      description:
        'Developed a web-based educational application using React.js, specifically designed to assist children with cerebral palsy in learning the English alphabet.',
      image:
        'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['React.js', 'Node.js'],
      features: [
        'Developed a web-based educational application using React.js for the front end.',
        'Specifically designed to assist children with cerebral palsy in learning the English alphabet.',
        'Focused on inclusive and accessible design principles to ensure a supportive and engaging learning experience.',
        'Created an interactive and intuitive user interface tailored for users with physical, sensory, or cognitive challenges.',
      ],
      link: 'https://github.com/vishnuknandan/UpLearn',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 transform ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
            My Projects
          </h2>
          <div className="h-1 w-16 bg-blue-500 mx-auto mt-4"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of the projects I've worked on that showcase my skills and expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="relative group bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-gray-700"
            >
              <div className="overflow-hidden rounded-t-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-sm font-medium bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <details className="mb-4 text-sm text-gray-700 dark:text-gray-300">
                  <summary className="cursor-pointer font-medium text-blue-600 dark:text-blue-400 hover:underline">
                    Show Features
                  </summary>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    {project.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </details>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  View on GitHub <ExternalLink size={16} className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
