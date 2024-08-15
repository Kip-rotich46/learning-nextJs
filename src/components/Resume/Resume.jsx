import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons'; // Import the specific icon

import { styles } from '../../styles';
import { SectionWrapper } from '../../hoc';

const ResumeSection = () => {
  const handleClick = () => {
    alert('You will be redirected to view my resume.');
  };

  return (
    <div className="resume-section">
      <h2 className={styles.heroHeadText}>My Resume</h2>
      <a
        href="https://www.linkedin.com/in/gideon-langat/"
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className="bg-blue-500 text-white py-2 px-4 rounded-lg inline-block mt-5"
      >
        <FontAwesomeIcon icon={faFileArrowDown} className="mr-2" />
        View Resume
      </a>
    </div>
  );
};

export default SectionWrapper(ResumeSection, 'resume');
