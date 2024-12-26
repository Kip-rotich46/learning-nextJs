import React from 'react';
import { styles } from "../styles";

const Resume = () => {
  return (
    <section id="resume" className="w-full mx-auto py-10">
      <div className="max-w-7xl mx-auto px-10 flex flex-col items-start gap-5">
        <div className="ml-5"> {/* Adds a left margin to shift the section to the right */}
          <h2 className={`${styles.sectionHeadText} text-white mb-7`}>My Resume</h2> {/* Adds margin below h2 */}
          <p className="text-lg mb-10 text-white-100"> {/* Adds margin below p */}
            Below is a link to my full resume. Feel free to check it out or download it for more details about my experience and skills.
          </p>
          <a
            href="https://docs.google.com/document/d/154Mh6bDR5fJs8DmXeKqP7U8I_l3lk0RL7LjRz8Zs5hA/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white font-bold text-[18px] py-2 px-4 border-2 border-blue-700 rounded-md hover:bg-blue-700 hover:text-white transition duration-300 ease-in-out"
          >
            View My Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
