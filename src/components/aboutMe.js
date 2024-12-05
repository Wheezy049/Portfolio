import React from "react";

function AboutMe() {
  return (
    <div id="about" className="w-full mt-20 mb-10">
      <h1 className="text-3xl font-semibold text-center mb-4">About Me</h1>
      <div className="flex justify-center items-center w-full max-w-[1200px] m-auto text-center text-[#000000] text-sm md:text-base">
        <div className="bg-[#FAFCFD] w-[90%] mx-auto md:mx-0 md:w-[600px] lg:w-[800px] shadow-lg shadow-[#7BBAD724] rounded-[61px] px-7 md:px-10 py-6">
          <p className="mb-4">
            Hi, I'm Olatoyese Faruq, a Frontend Developer passionate about crafting seamless and engaging websites and applications.
          </p>
          <p className="mb-4">
           I specialize in JavaScript technologies like React.js, Next.js, and TypeScript to build user-friendly, scalable solutions. I focus on performance, accessibility, and mobile-first design to ensure a great user experience.
          </p>
          <p className="mb-4">
           When I'm not coding, I enjoy exploring new tech trends and watching football. Feel free to explore my work and get in touch for your next project!
          </p>
          </div>
      </div>
    </div>
  );
}

export default AboutMe;

