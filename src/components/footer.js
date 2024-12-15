import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {

  return (
    <div id='contact' className="flex flex-col md:flex-row items-center justify-center w-full mt-20 mb-10 relative">
      <div className='bg-[#FAFCFD] shadow-lg shadow-[#7BBAD724] rounded-[61px] px-10 py-6 text-[#000000] mr-10 mb-10 md:mb-0'>
          <h1 className='text-3xl font-bold text-center mb-4'>Skills</h1>
          <ul className='list-disc text-sm'>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>HTML/CSS</li>
            <li>React.js</li>
            <li>Next.js</li>
            <li>SASS</li>
            <li>Figma</li>
            <li>Git/Github</li>
          </ul>
      </div>
      <div className='bg-[#FAFCFD] w-[90%] mx-auto md:mx-0 md:w-[500px] h-[240px] shadow-lg shadow-[#7BBAD724] rounded-[61px] px-10 py-6 text-[#000000]'>
        <div className='bg-[#FAFCFD] w-full shadow-lg shadow-[#7BBAD724] rounded-[61px] px-4 py-2 mb-5'>
            <h3 className='text-sm md:text-xl'> <span className='mr-4'>Email:</span> Olatoyesefaruq@gmail.com</h3>
        </div>
        <button className='bg-[#000000] text-white w-[150px] flex justify-center rounded-[33px] py-2 text-base md:text-xl cursor-pointer'>
        <a href="mailto:olatoyesefaruq@gmail.com">Send Email</a>
        </button>
        <div className='bg-[#FAFCFD] text-[#000000] shadow-lg shadow-[#7BBAD724] w-[220px] rounded-[61px] py-4 px-6 absolute -bottom-6'>
            <h1 className='text-xl font-semibold text-center mb-2'>Connect with me</h1>
            <div className='flex justify-center gap-3 text-4xl'>
            <a
            href="https://github.com/Wheezy049"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/faruq-olatoyese-548521249/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-700 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://x.com/dev_faruq"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            <FaTwitter />
          </a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
