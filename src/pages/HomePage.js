import React from "react";
import { motion } from "framer-motion";
import yourImage from "../assets/mypic.png";
import Navbar from "../components/Navbar";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white flex-grow">
        <motion.section
          className="min-h-screen flex flex-col md:flex-row justify-center items-center pt-16 md:pt-20 mb-0" // Reduced top padding further
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.img
            src={yourImage}
            alt="Your Name"
            className="rounded-full w-32 h-32 md:w-48 md:h-48 border-4 border-blue-500 mb-4 md:mb-0 md:mr-8 shadow-lg transform hover:scale-110 transition duration-300"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6 }}
          />

          <div className="text-center md:text-left md:mr-12">
            <motion.h1
              className="text-5xl md:text-7xl font-extrabold mb-2" // Increased font size for emphasis
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              Hi, I’m <span className="text-indigo-500">Rohan</span>
            </motion.h1>

            <motion.h1
              className="text-5xl md:text-7xl font-extrabold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeInOut" }}
            >
              <span className="text-yellow-200">Shrivastava</span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl mb-6 text-gray-300 max-w-xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Passionate MERN Stack Developer 🖥️ | 3.5 Months of Comprehensive Training at Infosys 🎓 | GitHub Enthusiast 🚀 | Proficient in API Development with Postman 📬 | Active Open Source Contributor 🏫 | Seeking New Opportunities to Innovate 💼
            </motion.p>

            <motion.div
              className="flex gap-4 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <motion.a
                href="/projects"
                className="px-6 py-3 bg-blue-500 text-white rounded-md font-semibold hover:bg-blue-600 transition duration-300 transform hover:scale-105"
                whileHover={{ scale: 1.05, backgroundColor: "#0056b3" }}
              >
                View Projects
              </motion.a>
              <motion.a
                href="/contact"
                className="px-6 py-3 bg-gray-700 text-white rounded-md font-semibold hover:bg-gray-600 transition duration-300 transform hover:scale-105"
                whileHover={{ scale: 1.05, backgroundColor: "#4a5568" }}
              >
                Contact Me
              </motion.a>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default HomePage;
