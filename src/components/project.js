import React, { useState } from 'react';
import CardProject from './cardProject';

const projects = [
  {
    title: 'FlexiConvert',
    technologies: 'NextJs, Typescript, Tailwind',
    img: '/flexiconvert.png',
    href: 'https://flexiconverter.vercel.app/',
    href2: 'https://github.com/Wheezy049/FileConverter-FE',
  },
  {
    title: 'AI Podcast Summarizer',
    technologies: 'NextJs, Typescript, Tailwind',
    img: '/podcast.png',
    href: 'https://podcast-ai-summarizer.vercel.app/',
    href2: 'https://github.com/Wheezy049/Podcast-AI-Summarizer',
  },
  {
    title: 'FlowAI',
    technologies: 'NextJs, Typescript, Tailwind',
    img: '/flowAI.png',
    href: 'https://flow-ai-eight.vercel.app/',
    href2: 'https://github.com/Wheezy049/flowAI',
  },
  {
    title: 'Crown E-commerce',
    technologies: 'ReactJs, Sass, CSS in JS',
    img: '/crown.png',
    href: 'https://crown-e-commerce.vercel.app/',
    href2: 'https://github.com/Wheezy049/udemy-tutorial',
  },
  {
     title: 'DesignForge',
    technologies: 'ReactJs,Tailwind',
    img: '/forge.png',
    href: 'https://design-forge-mauve.vercel.app/',
    href2: 'https://github.com/Wheezy049/DesignForge',
  },
  {
    title: 'DevLink',
    technologies: 'NextJs, Typescript, Tailwind',
    img: '/devlink.png',
    href: 'https://dev-link-roan.vercel.app/',
    href2: 'https://github.com/Wheezy049/dev-link',
  },
  {
    title: 'Movie-App',
    technologies: 'ReactJs, Tailwind',
    img: '/movie.png',
    href: 'https://movie-app-rose-beta.vercel.app/',
    href2: 'https://github.com/Wheezy049/MovieApp',
  },
  {
    title: 'Fast-food',
    technologies: 'ReactJs, sass',
    img: '/fast-food.png',
    href: 'https://fast-food-delta-three.vercel.app/',
    href2: 'https://github.com/Wheezy049/fast-food',
  },
  {
    title: 'Dashboard',
    technologies: 'ReactJs, Tailwind',
    img: '/dashboard.png',
    href: 'https://dashboard-woad-one-36.vercel.app/',
    href2: 'https://github.com/Wheezy049/Dashboard',
  },
  {
    title: 'FinPay',
    technologies: 'ReactJs, TypeScript, Tailwind',
    img: '/finpay.png',
    href: 'https://fastpay-olive.vercel.app/',
    href2: 'https://github.com/Wheezy049/Fastpay',
  },
  {
    title: 'Quiz App',
    technologies: 'HTML/CSS, Javascript',
    img: '/quiz.png',
    href: 'https://quiz-app-five-kappa.vercel.app/',
    href2: 'https://github.com/Wheezy049/Quiz-App',
  },
  {
    title: 'Audiophile',
    technologies: 'HTML/CSS, JavaScript',
    img: '/audiophile.png',
    href: 'https://audiophile-wheezy049.vercel.app/',
    href2: 'https://github.com/Wheezy049/audiophile',
  },
];

function Project() {

 const [showAll, setShowAll] = useState(false);

 const visiblePoject =  showAll ? projects : projects.slice(0, 6)

  return (
    <div className="flex flex-col">
      <div className="mb-8 flex flex-col justify-center m-auto sm:m-0 sm:justify-start sm:text-left">
        <h1 className="font-semibold text-2xl mb-2">My Projects</h1>
        <p>These are some of my amazing projects</p>
      </div>
      <CardProject item={visiblePoject} />
      {projects.length > 6 && (
        <div className="mt-6 flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          >
            {showAll ? 'Show Less' : 'Show More'}
          </button>
        </div>
      )}
    </div>
  );
}

export default Project;
