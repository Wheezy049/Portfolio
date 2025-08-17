import AboutMe from "./components/aboutMe";
import Footer from "./components/footer";
import Header from "./components/header";
import Project from "./components/project";
import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";


function App() {
  return (
    <div className="bg-white text-black dark:bg-black dark:text-white transition duration-500 w-full overflow-x-hidden">
      <Header />
      <div className="flex flex-col items-center text-center mt-20 px-4">
        {/* Introduction Section */}
        <h1 className="font-bold text-5xl mb-3">Hi, there! 👋</h1>
        <h3 className="font-bold text-2xl mb-3">I'm Olatoyese Faruq,</h3>
        <p className="text-lg mb-5 w-full max-w-[500px]">
          A Software Engineer (Frontend) passionate about creating intuitive, responsive, and scalable web applications. I focus on building seamless user experiences and delivering reliable solutions end-to-end.
        </p>

        {/* Buttons Section */}
        <div className="flex flex-col md:flex-row gap-4 mb-5">
          <button className="border border-gray-300 px-5 py-2 rounded-full transition hover:bg-gray-200 dark:hover:bg-gray-800">
            <a href="#contact">Contact Me</a>
          </button>
          <button className="border border-gray-300 px-5 py-2 rounded-full transition hover:bg-gray-200 dark:hover:bg-gray-800">
            <a
              href="https://drive.google.com/file/d/1J1IwrrwmQhKdwEn1xudoLpyyhLW1gb0Y/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              My Resume
            </a>
          </button>
        </div>

        {/* Social Icons Section */}
        <div className="flex justify-center gap-6 text-2xl">
          <a
            href="https://github.com/Wheezy049"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://wa.me/09134983159"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-500 transition"
          >
            <FaWhatsapp />
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
      <div className="flex justify-center w-full m-auto max-w-[1200px] px-4 md:px-20 my-16">
        <div>
        <Project />
        <AboutMe />
        <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
