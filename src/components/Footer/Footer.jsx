import React from 'react';
import Socials from '../Socials/Socials';

const Footer = () => {
    return (
        <div className="footer -mt-200 z-20 flex flex-col items-center justify-center h-200 bg-black">
            <Socials />
            <p className="text text-white mt-8">
                &copy; GideonKiprotich  2024
            </p>
        </div>
    );
}

export default Footer;
