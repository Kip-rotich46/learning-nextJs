import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from '../styles';

const Tech = () => {
  return (
    <div className={`${styles.paddingX}`}>
      <div className="max-w-7xl mx-auto"> {/* Container for alignment */}
        <div className="technologies mb-8">
          <h2 className={styles.sectionSubText}>Technologies I am Proficient In</h2>
          <h3 className={styles.heroHeadText}>Technologies</h3>
        </div>
        <div className="flex flex-row flex-wrap justify-center gap-10">
          {technologies.map((technology) => (
            <div className="w-28 h-28" key={technology.name}>
              <BallCanvas icon={technology.icon} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SectionWrapper(Tech, 'tech');
