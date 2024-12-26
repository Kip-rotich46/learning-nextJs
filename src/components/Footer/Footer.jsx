import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import Socials from '../Socials/Socials';

const Footer = () => {

    return (
        <div className="footer -mt-200 z-20 flex flex-col items-center justify-center h-200 bg-black">
            <Socials />

            {/* Contact Info */}
            <div className="contact-info mt-4 text-white">
                <p>Email: <a href="mailto:giddyprotio@gmail.com" className="hover:text-gray-400">giddyprotio@gmail.com</a></p>
                <p>Phone: <a href="tel:+254700176228" className="hover:text-gray-400">+254 700 176 228</a></p>
            </div>

            {/* Copyright */}
            <p className="text-white text-sm mt-8">
                &copy; 2024 Gideon Kiprotich. All Rights Reserved.
            </p>
        </div>
    );
};

export default Footer;
