import React from 'react';
import CardProject from './cardProject';

const project = [
  {
    title: 'Tifi',
    technologies: 'Nextjs, Typescript, Tailwind',
    img: '/tifi.png',
    href: 'https://tifi.tv/',
    href2: '',
  },
  {
    title: 'Crown E-commerce',
    technologies: 'Reactjs, Sass, CSS in JS',
    img: '/crown.png',
    href: 'https://crown-e-commerce.vercel.app/',
    href2: 'https://github.com/Wheezy049/udemy-tutorial',
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
  return (
    <div className="flex flex-col">
      <div className="mb-8 flex flex-col justify-center m-auto sm:m-0 sm:justify-start sm:text-left">
        <h1 className="font-semibold text-2xl mb-2">My Projects</h1>
        <p>These are some of my amazing projects</p>
      </div>
      <CardProject item={project} />
    </div>
  );
}

export default Project;
