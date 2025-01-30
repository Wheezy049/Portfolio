import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

function CardProject({ item }) {
  return (
    <div
      className="flex flex-col md:flex-row flex-wrap w-full gap-10 justify-center items-center mt-10"
      id="project"
    >
      {item.map((item, index) => (
        <div
          key={index}
          className="w-[90%] md:w-[320px] border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
        >
          {/* Image Container */}
          <div className="w-full h-48 relative overflow-hidden">
            <img
              src={item.img}
              alt="Project thumbnail"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Content Container */}
          <div className="p-5 bg-white dark:bg-black">
            {/* Project Title */}
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 capitalize">
              {item.title}
            </h3>

            {/* Project Description */}
            <p className="text-gray-600 dark:text-gray-300 mb-4 text-left capitalize">
              Technologies: {item.technologies}
            </p>

            {/* Links */}
            <div className="flex gap-4">
              <a
                href={item.href2}
                target="blank"
                className="flex items-center gap-2 text-gray-400 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <Github className="w-5 h-5" />
                <span>Code</span>
              </a>
              <a
                href={item.href}
                target="blank"
                className="flex items-center gap-2 text-gray-400 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
                <span>Live Demo</span>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardProject;
