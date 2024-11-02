// src/components/Navbar.js

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; 
import yourImage from '../assets/mypic.png'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Animation Variants
  const navbarVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' },
    }),
  };

  const navBackground = 'bg-gray-900'; // Default nav background
  const navTextColor = 'text-white'; // Default text color

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
      className={`fixed top-0 left-0 w-full bg-opacity-70 backdrop-blur-lg shadow-lg z-50 ${navBackground}`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo with Image */}
        <div className="flex items-center">
          <img
            src={yourImage} // Small circular image
            alt="Rohan"
            className="rounded-full w-10 h-10 border-2 border-blue-500 mr-2 shadow-md" // Circular and small
          />
          <motion.div
            className={`text-2xl font-bold ${navTextColor}`}
            initial="hidden"
            animate="visible"
            variants={linkVariants}
            custom={0}
          >
            <Link to="/" className="transition-all duration-300 hover:text-blue-500">
              Rohan's Portfolio
            </Link>
          </motion.div>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 font-semibold">
          {/* Add Home Button */}
          <motion.li
            initial="hidden"
            animate="visible"
            variants={linkVariants}
            custom={1}
            className={navTextColor}
          >
            <Link to="/" className="relative transition duration-300 group hover:text-blue-500">
              Home
            </Link>
          </motion.li>
          {['About', 'Projects', 'Experience', 'Certifications', 'Contact', 'Resume'].map((item, index) => (
            <motion.li
              key={index}
              initial="hidden"
              animate="visible"
              variants={linkVariants}
              custom={index + 2} // Increment index for animation
              className={navTextColor}
            >
              <Link
                to={`/${item.toLowerCase()}`} // Use Link for routing
                className="relative transition duration-300 group hover:text-blue-500" // Only color change on hover
              >
                {item}
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className={`text-white focus:outline-none`}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className={`md:hidden bg-gray-800 text-white`}
        >
          <ul className="flex flex-col items-center">
            {['Home', 'About', 'Projects', 'Experience', 'Certifications', 'Contact', 'Resume'].map((item, index) => (
              <li key={index} className="py-2">
                <Link
                  to={`/${item.toLowerCase()}`} // Use Link for routing
                  className="transition duration-300 hover:text-blue-500"
                  onClick={toggleMenu} // Close menu on link click
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
