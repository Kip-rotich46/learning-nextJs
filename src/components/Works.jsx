import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { Tilt } from "react-tilt";

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <motion.div variants={fadeIn('up', 'spring',
      index * 0.5, 0.75
    )}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'>
        <div className="relative w-full h-[230px]">
          <img src={image} alt="name" className="w-full h-full object-cover rounded-2xl" />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open
                (`${source_code_link}`, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
              <img src={github} alt="github" className="w-1/2 h-1/2 object-contain" />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}> #{tag.name}</p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Projects</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>

      {/* Updated the styling for this div */}
      <div className="mt-3">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="text-secondary text-[17px] leading-[30px] max-w-none">
          The following projects showcase my skills and experiences through real-world examples of my work. Each project is briefly described with links to code repositories and live demos. These projects reflect my ability to solve complex problems, work with different technologies, and manage projects effectively.
        </motion.p>
        {/* Add a GitHub link */}
        <motion.a
          href="https://github.com/Kip-rotich46" // Replace with your GitHub profile link
          target="_blank"
          rel="noopener noreferrer"
          className="text-white-500 hover:underline text-[17px] mt-4 inline-block"
          variants={fadeIn('', '', 0.1, 1)}>
          Check out more of my work on GitHub
        </motion.a>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}
      </div>
    </>
  );
};


export default SectionWrapper(Works, '')