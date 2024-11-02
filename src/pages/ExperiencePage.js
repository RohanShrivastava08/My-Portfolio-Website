import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Badgegssoc from '../assets/badgegssoc.png';
import Badgepostman from '../assets/badgePostman.jpg';
import CertificateZidio from '../assets/certificateZidio.jpg';
import ContributorInternshala from '../assets/contributorInternshala.jfif';
import CertificatePregrad from '../assets/certificatePregrad.png';
import CertificateCodeAlpha from '../assets/certificateCodeAlpha.jpg';
import ExperienceInnobyte from '../assets/experienceInnobyte.jpg';
import CertificateInternpe from '../assets/certificateInternpe.png';
import CertificateInnovixion from '../assets/certificateInnovixion.jpg';
import CertificateNovanector from '../assets/certificateNovanector.jpg';
import CertificateOctanet from '../assets/certificateOctanet.png';
import CertificateNavodita from '../assets/certificateNavodita.jpg';
import CertificateOasis from '../assets/certificateOasis.jpg';
import CertificateBharatintern from '../assets/certificateBharatintern.jpg';
import CertificateCognify from '../assets/certificateCognify.jpg';
import OfferInfosys from '../assets/offerinfosys.png';
import CertificateOnestop from '../assets/certificateOnestop.jpg';
import CertificateEdscouts from '../assets/certificateEdscouts.jpg';
import CertificateGooglecloud from '../assets/certificateGoogleCloud.jpg';
import CertificatePython from '../assets/certificatePython.jpg';
import CertificateCfc from '../assets/certificateCfc.jpg';

const ExperiencePage = () => {
  const fadeInVariants = {
    hidden: { opacity: 0, translateY: 50 },
    visible: { opacity: 1, translateY: 0, transition: { duration: 0.5 } },
  };

  const experiences = [
    {
      title: '🧑‍🎓 Software Trainee, Infosys',
      description: 'Completed training in Java, DBMS, Cloud Computing, Unix, and networking fundamentals.',
      image: OfferInfosys
    },
    {
      title: '☁️ 30 Days of Google Cloud, Google',
      description: 'Studied Cloud Engineering and Data Science concepts using Google Cloud Platform.',
      image: CertificateGooglecloud
    },
    {
      title: '🏅 Postman API Fundamentals Student Expert',
      description: 'Completed the Postman program (Apr 2024 - Present), earning a badge and expertise in API fundamentals.',
      image: Badgepostman
    },
    {
      title: '🌟 Open Source Contributor',
      description: 'Participated in GirlScript Summer of Code and Hacktoberfest (Oct 2024 - Present) remotely, advancing skills in GitHub and open-source integration.',
      image: Badgegssoc
    },
    {
      title: '💻 Web Development Intern, Zidio Development',
      description: 'Gained hands-on experience with the MERN Stack (Jul - Sep 2024) through a remote internship.',
      image: CertificateZidio
    },
    {
      title: '🏆 Top Contributor & Club Member, Internshala',
      description: 'Achieved top contributor status, earning immediate post approvals and recognition (Jun - Aug 2024).',
      image: ContributorInternshala
    },
    {
      title: '🔧 Full Stack Internship, Pregrad',
      description: 'Completed a remote MERN Stack internship with weekly tasks, certifications, and networking (Apr - Aug 2024).',
      image: CertificatePregrad
    },
    {
      title: '🔒 Node.js Developer, InnoByte Services',
      description: 'Developed a secure Node.js API for user authentication, including endpoints for signup, login, and profile retrieval (Jun - Jul 2024).',
      image: ExperienceInnobyte
    },
    {
      title: '📊 Data Structure & Algorithm with C++, EdScouts',
      description: 'Completed C++ Data Structures & Algorithms training, focusing on problem-solving skills.',
      image: CertificateEdscouts
    },
    {
      title: '🌐 Web Development Intern, CodeAlpha',
      description: 'Gained experience in web development concepts, including HTML, CSS, JavaScript, and frameworks like React and Angular (Feb - Aug 2024).',
      image: CertificateCodeAlpha
    },
    {
      title: '🖥️ Web Development Intern, InternPe',
      description: 'Enhanced front-end skills through guided projects using HTML, CSS, JavaScript, and Bootstrap (May - Jun 2024).',
      image: CertificateInternpe
    },
    {
      title: '🚀 Web Developer, Innovixion Tech',
      description: 'Focused on front-end development with Bootstrap, JavaScript, and Bulma to create dynamic interfaces (May - Jun 2024).',
      image: CertificateInnovixion
    },
    {
      title: '📱 Full Stack Developer Intern, NovaNectar Services',
      description: 'Created a responsive "News Website" using HTML, CSS, and JavaScript (Feb - May 2024).',
      image: CertificateNovanector
    },
    {
      title: '👨‍💻 Frontend Developer, Navodita Infotech',
      description: 'Built responsive web apps using OpenWeather & TradingView APIs for real-time data integration.',
      image: CertificateNavodita
    },
    {
      title: '📋 Web Developer Intern, OctaNet Services',
      description: 'Built a landing page and a To-Do List app, emphasizing responsive design and collaboration (Mar - Apr 2024).',
      image: CertificateOctanet
    },
    {
      title: '🎨 Web Developer and Designer, Oasis Infobyte',
      description: 'Created landing pages, a portfolio site, and web apps (Calculator, To-Do) using HTML, CSS, JavaScript.',
      image: CertificateOasis
    },
    {
      title: '💼 Internship Trainee, Bharat Intern',
      description: 'Developed Money Tracker & Registration Form with MongoDB, Express, React, and Node for full-stack solutions.',
      image: CertificateBharatintern
    },
    {
      title: '🏗️ Web Development Intern, Cognifyz Technologies',
      description: 'Built single-page websites with HTML, CSS, JavaScript, and Bootstrap, emphasizing responsive design.',
      image: CertificateCognify
    },
    {
      title: '🌐 Web Development Intern, 1Stop.ai',
      description: 'Developed single/multi-page sites using HTML, CSS, Bootstrap, enhancing frontend skills.',
      image: CertificateOnestop
    },
    {
      title: '🐍 Python Programming, CSDIE (Vocational Training)',
      description: 'Completed Python programming training, earning an A+ grade.',
      image: CertificatePython
    },
    {
      title: '📅 30 Days of Python Programming, Code For Cause',
      description: 'Gained practical Python skills through a month-long hands-on project course.',
      image: CertificateCfc
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="bg-gray-900 text-white flex-grow flex flex-col items-center py-10">
   
        {/* Hero Section */}
        <motion.section
          className="text-center mb-12"
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mt-10 text-indigo-400 tracking-wider">
            My <span className="text-purple-500">Experiences</span>
          </h1>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Dive into my professional journey, showcasing my growth and the key projects I've contributed to across various roles.
          </p>
        </motion.section>

        {/* Animated Line */}
        <motion.div
          className="w-1/2 h-1 bg-indigo-500 mb-8"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 0.6 }}
        />

        {/* Experience Section */}
        <div className="container mx-auto py-10">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              variants={fadeInVariants}
              initial="hidden"
              whileInView="visible"
              className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'mb-10' : 'mb-10 flex-row-reverse'}`}
            >
              {/* Left Image Section */}
              <div className="w-full md:w-1/2 p-4 flex justify-center items-center">
                <div className="w-64 h-40 bg-gray-100 rounded-md flex items-center justify-center shadow-lg">
                  {experience.image ? (
                    <img src={experience.image} alt={experience.title} className="w-full h-full object-cover rounded-md" />
                  ) : (
                    <span className="text-gray-400">Certificate Here</span>
                  )}
                </div>
              </div>

              {/* Right Text Section */}
              <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-indigo-400">{experience.title}</h3>
                <p className="text-gray-300 mt-2">{experience.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ExperiencePage;
