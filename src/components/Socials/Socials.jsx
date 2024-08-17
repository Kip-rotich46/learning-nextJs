import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter";

import { styles } from "../../styles";

const Socials = () => {
  return (
    <div className={`${styles.paddingX} mt-5`}>
      <h2 className={styles.sectionSubText}>Connect with Me</h2>
      <div className="flex  justify-center space-x-4 mt-5">
        <a href="https://www.linkedin.com/in/gideon-langat/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} size="2x" className="text-blue-500" />
        </a>
        <a href="https://github.com/Kip-rotich46" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} size="2x" className="text-gray-700" />
        </a>
      </div>
    </div>
  );
};

export default Socials;
