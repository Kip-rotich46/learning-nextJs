import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons';
import { styles } from '../../styles';

const ResumeSection = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = async () => {
    // Reset the states
    setIsDownloading(true);
    setDownloaded(false);

    // Simulate a download process
    const link = document.createElement('a');
    link.href = "https://drive.google.com/uc?export=download&id=1EZUb42dqqag8PwjTU2dZXKe98-eluceG"; // Google Drive direct download link
    link.setAttribute('download', 'Gideon-CV.pdf');
    document.body.appendChild(link);
    link.click();

    // Simulate a delay to wait for the download to likely finish
    await new Promise(resolve => setTimeout(resolve, 2000)); // Adjust this time as needed

    // Remove the link element
    document.body.removeChild(link);

    // Mark the download as completed
    setIsDownloading(false);
    setDownloaded(true);
  };

  return (
    <div className="resume-section">
      <h2 className={styles.heroHeadText}>My Resume</h2>
      <button
        onClick={handleDownload}
        className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 inline-block mt-5"
        disabled={isDownloading}
      >
        {isDownloading ? 'Downloading...' : (
          <>
            <FontAwesomeIcon icon={faFileArrowDown} className="mr-2" />
            Download Resume
          </>
        )}
      </button>

      {downloaded && (
        <p className="text-green-500 mt-4">
          Download successful! Thank you for downloading my resume.
        </p>
      )}
    </div>
  );
};

export default ResumeSection;
