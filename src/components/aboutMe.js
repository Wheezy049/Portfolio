import React from "react";

function AboutMe() {
  return (
    <div id="about" className="w-full mt-20 mb-10">
      <h1 className="text-3xl font-semibold text-center mb-4">About Me</h1>
      <div className="flex justify-center items-center w-full max-w-[1200px] m-auto text-center text-[#000000] text-sm md:text-base">
        <div className="bg-[#FAFCFD] w-[90%] mx-auto md:mx-0 md:w-[600px] lg:w-[800px] shadow-lg shadow-[#7BBAD724] rounded-[61px] px-7 md:px-10 py-6">
          <p className="mb-4">
            Hi, I'm Olatoyese Faruq, a Software Engineer (Frontend) passionate
            about building scalable and user-friendly web applications.
          </p>
          <p className="mb-4">
            I specialize in JavaScript and TypeScript ecosystems with strong
            experience in React.js, Next.js, and Tailwind CSS. Recently, I’ve
            been expanding into backend technologies like Python, FastAPI,
            Django, and SQL to become a well-rounded Software Engineer.
          </p>
          <p className="mb-4">
            My focus is on performance, accessibility, and secure solutions —
            from seamless frontends to reliable APIs and real-time features. I
            enjoy exploring new technologies, contributing to impactful
            projects, and continuously improving my craft.
          </p>
          <p className="mb-4">
            When I'm not coding, I’m likely exploring tech trends, working on
            side projects, or watching football. Feel free to check out my work
            and connect with me for collaborations or new opportunities!
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
