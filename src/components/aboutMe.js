// import React from "react";

// function AboutMe() {
//   return (
//     <div id="about" className=" w-full mt-20">
//       <h1 className="text-3xl flex justify-center font-bold">About Me</h1>
//       <div className="w-full text-center flex flex-col gap-4 justify-center m-auto max-w-[600px]">
//         <div>
//         <p className="mt-3">
//           Hi, I'm Olatoyese Faruq, a Frontend Developer with a passion for
//           crafting seamless and engaging websites and applications.
//         </p>
//         <p>
//           I specialize in using JavaScript technologies like React.js, Next.js,
//           and TypeScript to build user-friendly and scalable solutions. With
//           extensive experience in both frontend and backend integration, I
//           ensure that every project I work on is optimized for performance and
//           accessibility.
//         </p>
//         <p>
//           I also enjoy exploring new trends in web development and honing my
//           skills in building mobile-first, responsive designs. When I'm not
//           coding, you'll likely find me keeping up with the latest tech
//           innovations or enjoying a good football match. Welcome to my
//           portfolio, feel free to explore my work and reach out to discuss your
//           next project!
//         </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AboutMe;

import React from "react";

function AboutMe() {
  return (
    <div id="about" className="w-full mt-20 mb-10">
      <h1 className="text-3xl font-bold text-center">About Me</h1>
      <div className="flex flex-col md:flex-row gap-8 justify-center items-center w-full max-w-[1200px] m-auto text-center">
        {/* About Text Section */}
        <div className="w-full md:w-1/2">
          <p className="mt-3">
            Hi, I'm Olatoyese Faruq, a Frontend Developer passionate about crafting seamless and engaging websites and applications.
          </p>
          <p>
            I specialize in JavaScript technologies like React.js, Next.js, and TypeScript to build user-friendly, scalable solutions. I focus on performance, accessibility, and mobile-first design to ensure a great user experience.
          </p>
          <p>
            When I'm not coding, I enjoy exploring new tech trends and watching football. Feel free to explore my work and get in touch for your next project!
          </p>
        </div>

        {/* Skills Section */}
        <div className="w-full md:w-1/2 text-center">
          {/* <h3 className="text-2xl font-semibold mb-4">Skills</h3> */}
          <ul className="list-none text-center">
            <li>React.js</li>
            <li>Next.js</li>
            <li>TypeScript</li>
            <li>JavaScript</li>
            <li>CSS/SASS</li>
            <li>Responsive Design</li>
            <li>Git/GitHub</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;

