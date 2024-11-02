// src/pages/AboutPage.js
import React from 'react';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';
import MyPic from '../assets/mypic.png';

const fadeInVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};


const AboutPage = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white flex-grow flex flex-col items-center py-10">
      <motion.header
          className="text-center py-16 shadow-lg"
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-400 tracking-wider mb-4">
            About <span className="text-purple-500">Me</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
          Welcome to my personal space! Here’s a glimpse into my journey, my passion for technology, and my drive to create impactful digital experiences.
          </p>
        </motion.header>

        
        
        {/* Animated Line */}
        <motion.div
          className="w-1/2 h-1 bg-indigo-500 mb-8"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 0.6 }}
        />

        {/* Summary Section with Classy Animation */}
        <motion.div
          className="flex flex-col items-center mt-5 mb-12"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <motion.img
            src={MyPic}
            alt="Your Name"
            className="w-32 h-32 rounded-full border-4 border-indigo-500 mb-4 shadow-lg"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.p
            className="text-lg md:text-xl text-gray-400 text-center max-w-2xl"
          >
           Welcome to my personal space! I am passionate about technology and committed to continuous learning in the fields of web development and programming. My journey began with a fascination for creating dynamic and user-centered applications, which has led me to specialize in both frontend and backend development.
          </motion.p> <br/>
          <motion.p
            className="text-lg md:text-xl text-gray-400 text-center max-w-2xl"
          >
             Driven by a desire for excellence, I aim to design and build responsive, impactful digital experiences. I thrive in every step of the development process, from initial concept to final deployment, always focused on delivering clean, efficient, and innovative solutions.
          </motion.p>
        </motion.div>

        <div className="max-w-4xl mx-auto px-4 space-y-12">
          {/* About Section - Left Aligned */}
          <motion.div
            className="bg-gray-800 p-8 rounded-lg shadow-xl w-full transition-transform duration-300 hover:bg-gray-700 hover:shadow-2xl hover:-translate-y-1 cursor-pointer border-l-4 border-indigo-500"
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-gray-300 flex items-center">
              <i className="fas fa-user-circle mr-2"></i> About
            </h2>
            <ul className="list-disc list-inside ml-4 text-gray-400 text-lg md:text-xl space-y-2">
              <li className="transition-colors duration-300 hover:text-gray-100 cursor-pointer">
                Currently focusing on mastering MERN stack development and actively building projects.
              </li>
              <li className="transition-colors duration-300 hover:text-gray-100 cursor-pointer">
                B.Tech graduate in Computer Science (Batch 2022) with expertise in web development (HTML, CSS, JavaScript, Bootstrap, PHP, XAMPP).
              </li>
              <li className="transition-colors duration-300 hover:text-gray-100 cursor-pointer">
                Experienced through intensive training at Infosys, excelling in DBMS, Java, SQL, Ansible, and networking.
              </li>
              <li className="transition-colors duration-300 hover:text-gray-100 cursor-pointer">
                Successfully delivered projects include dynamic e-commerce site and Inventory Management System using Java.
              </li>
              <li className="transition-colors duration-300 hover:text-gray-100 cursor-pointer">
                Demonstrated proactive approach through contributions to open-source projects on GitHub.
              </li>
              <li className="transition-colors duration-300 hover:text-gray-100 cursor-pointer">
                Recognized for excellence at Infosys, offering a blend of technical proficiency and adaptability.
              </li>
            </ul>
          </motion.div>

          {/* Divider */}
          <hr className="border-gray-600 my-6" />

          {/* Background Section - Right Aligned */}
          <motion.div
            className="bg-gray-800 p-8 rounded-lg shadow-xl w-full transition-transform duration-300 hover:bg-gray-700 hover:shadow-2xl hover:-translate-y-1 cursor-pointer border-l-4 border-indigo-500"
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-gray-300 flex items-center">
              <i className="fas fa-briefcase mr-2"></i> Background
            </h2>
            <ul className="list-disc list-inside ml-4 text-gray-400 text-lg md:text-xl space-y-2">
              <li className="transition-colors duration-300 hover:text-gray-100 cursor-pointer">
                Completed a Bachelor’s degree in Computer Science Engineering from Bhilai Institute of Technology, Durg CG.
              </li>
              <li className="transition-colors duration-300 hover:text-gray-100 cursor-pointer">
                Completed a major project on a Student Information System using XAMPP, PHP, HTML, CSS, JavaScript, and Bootstrap.
              </li>
              <li className="transition-colors duration-300 hover:text-gray-100 cursor-pointer">
                Actively participating in online courses to expand knowledge, including certifications on Coursera and Udemy.
              </li>
              <li className="transition-colors duration-300 hover:text-gray-100 cursor-pointer">
                Engaged in various competitions and workshops, including Google Cloud and Hult Prize initiatives.
              </li>
            </ul>
          </motion.div>

          {/* Divider */}
          <hr className="border-gray-600 my-6" />

          {/* Skills Section - Left Aligned */}
          <motion.div
            className="bg-gray-800 p-8 rounded-lg shadow-xl w-full transition-transform duration-300 hover:bg-gray-700 hover:shadow-2xl hover:-translate-y-1 cursor-pointer border-l-4 border-indigo-500"
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-gray-300 flex items-center">
              <i className="fas fa-tools mr-2"></i> Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-lg md:text-xl">
              <div>
                <h3 className="font-semibold text-gray-300 mb-2">Frontend</h3>
                <ul className="list-disc list-inside ml-4 text-gray-400 space-y-1">
                  <li className="transition-colors duration-300 hover:text-gray-100 cursor-pointer">React.js</li>
                  <li className="transition-colors duration-300 hover:text-gray-100 cursor-pointer">Redux</li>
                  <li className="transition-colors duration-300 hover:text-gray-100 cursor-pointer">Tailwind CSS</li>
                  <li className="transition-colors duration-300 hover:text-gray-100 cursor-pointer">HTML</li>
                  <li className="transition-colors duration-300 hover:text-gray-100 cursor-pointer">CSS</li>
                  <li className="transition-colors duration-300 hover:text-gray-100 cursor-pointer">JavaScript</li>
                  <li className="transition-colors duration-300 hover:text-gray-100 cursor-pointer">Bootstrap CSS</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-300 mb-2">Backend</h3>
                <ul className="list-disc list-inside ml-4 text-gray-400 space-y-1">
                  <li className="transition-colors duration-300 hover:text-gray-100 cursor-pointer">Node.js</li>
                  <li className="transition-colors duration-300 hover:text-gray-100 cursor-pointer">Express.js</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-300 mb-2">Database</h3>
                <ul className="list-disc list-inside ml-4 text-gray-400 space-y-1">
                  <li className="transition-colors duration-300 hover:text-gray-100 cursor-pointer">MongoDB</li>
                  <li className="transition-colors duration-300 hover:text-gray-100 cursor-pointer">SQL</li>
                  <li className="transition-colors duration-300 hover:text-gray-100 cursor-pointer">PostgreSQL</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-300 mb-2">Tools & Technologies</h3>
                <ul className="list-disc list-inside ml-4 text-gray-400 space-y-1">
                  <li className="transition-colors duration-300 hover:text-gray-100 cursor-pointer">Ansible</li>
                  <li className="transition-colors duration-300 hover:text-gray-100 cursor-pointer">DBMS</li>
                  <li className="transition-colors duration-300 hover:text-gray-100 cursor-pointer">VS Code</li>
                  <li className="transition-colors duration-300 hover:text-gray-100 cursor-pointer">Sublime Text</li>
                  <li className="transition-colors duration-300 hover:text-gray-100 cursor-pointer">Canva</li>
                  <li className="transition-colors duration-300 hover:text-gray-100 cursor-pointer">Xampp</li>
                  <li className="transition-colors duration-300 hover:text-gray-100 cursor-pointer">Notion</li>
                  <li className="transition-colors duration-300 hover:text-gray-100 cursor-pointer">Adobe Firefly</li>
                  <li className="transition-colors duration-300 hover:text-gray-100 cursor-pointer">OBS Studio</li>
                  <li className="transition-colors duration-300 hover:text-gray-100 cursor-pointer">Git Bash</li>
                  <li className="transition-colors duration-300 hover:text-gray-100 cursor-pointer">GitHub Desktop</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-300 mb-2">Languages</h3>
                <ul className="list-disc list-inside ml-4 text-gray-400 space-y-1">
                  <li className="transition-colors duration-300 hover:text-gray-100 cursor-pointer">TypeScript</li>
                  <li className="transition-colors duration-300 hover:text-gray-100 cursor-pointer">Java</li>
                  <li className="transition-colors duration-300 hover:text-gray-100 cursor-pointer">PHP</li>
                  <li className="transition-colors duration-300 hover:text-gray-100 cursor-pointer">C++</li>
                  <li className="transition-colors duration-300 hover:text-gray-100 cursor-pointer">Python</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Divider */}
          <hr className="border-gray-600 my-6" />

          {/* Interests Section - Right Aligned */}
          <motion.div
            className="bg-gray-800 p-8 rounded-lg shadow-xl w-full transition-transform duration-300 hover:bg-gray-700 hover:shadow-2xl hover:-translate-y-1 cursor-pointer border-l-4 border-indigo-500"
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-gray-300 flex items-center">
              <i className="fas fa-heart mr-2"></i> Interests
            </h2>
            <ul className="list-disc list-inside ml-4 text-gray-400 text-lg md:text-xl space-y-2">
              <li className="transition-colors duration-300 hover:text-gray-100 cursor-pointer">
                Exploring new technologies and staying up-to-date with industry trends.
              </li>
              <li className="transition-colors duration-300 hover:text-gray-100 cursor-pointer">
                Contributing to open-source projects and engaging with the tech community.
              </li>
              <li className="transition-colors duration-300 hover:text-gray-100 cursor-pointer">
                Travel vlogging and sharing experiences through social media platforms.
              </li>
              <li className="transition-colors duration-300 hover:text-gray-100 cursor-pointer">
                Connecting with like-minded individuals to exchange knowledge and ideas.
              </li>
            </ul>
          </motion.div>
        </div>
      </main>
     
    </div>
  );
};

export default AboutPage;
