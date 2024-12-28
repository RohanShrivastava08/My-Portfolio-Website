import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import CertificateMetafrontend from "../assets/certificateMetafrontend.jpg";
import CertificateUdemywebdev from "../assets/certificateUdemywebdev.jpg";
import ExperienceInnobyte from "../assets/experienceInnobyte.jpg";
import CertificateNovanector from "../assets/certificateNovanector.jpg";
import CertificateOctanet from "../assets/certificateOctanet.png";
import CertificateCodedamn from '../assets/certificateCodedamn.jpg';
import CertificateCodedamn30 from '../assets/certificateCodedamn30.jpg';
import BadgeGoogleAI from '../assets/badgeGoogleai.png';
import CertificateCanva from '../assets/certificateCanva.jpg';
import CertificateGit from '../assets/certificateGit.jpg';
import CertificateHackerrank from '../assets/certificateHackerrank.jpg';
import CertificateHplife from '../assets/certificateHplife.jpg';
import CertificateIide from '../assets/certificateIide.jpg';
import CertificatePostman from '../assets/certificatePostman.jpg';
import CertificateEduta from '../assets/certificateEduta.png';
import CertificateAImicrosoft from '../assets/certificateAimicrosoft.png';
import CertificateAzuremicrosoft from '../assets/certificateAzuremicrosoft.png';
import CertificateOpensourcegithub from '../assets/certificateGithubopensource.jpg';
import CertificateCloudchallenge from '../assets/certificateCloudchallenge.jpg';
import CertificateSoarx from '../assets/certificateSoarx.png';
import CertificateProject from '../assets/certificateProjectudemy.jpg';
import CertificateUnstop from '../assets/certificateUnstop.jpg';
import CertificateVtandriod from '../assets/certificateVtandriod.jpg';
import CertificateVtwebdev from '../assets/certificateVtwebdev.jpg';
import CertificateVtpython from '../assets/certificateVtpython.jpg';
import CertificateApicoursera from '../assets/certificateApicoursera.jpg';
import CertificateIbmspecial from '../assets/certificateIbmspecial.jpg';
import CertificateOutlook from '../assets/certificateOutlook.jpg';
import CertificateGithubcoursera from '../assets/certificateGithubcoursera.jpg';
import CertificateDigitalgoogle from '../assets/certificateDigitalgoogle.jpg';
import CertificateNelify from '../assets/certificateNelify.jpg';
import CertificateIntrotogit from '../assets/certificateIntrotogit.jpg';
import CertificateMicrosoft365 from '../assets/certificateMicrosoft365.jpg';
import CertificateSsoc from '../assets/certificateSsoc.png';
import CertificateCn from '../assets/certificateCn.png';
import CertificateAdobe from '../assets/certificateAdobe.jpg';

const certifications = [
  {
    title: "META Front End Developer - Coursera",
    description:
      "Completed an in-depth course covering front-end technologies and responsive design.",
    image: CertificateMetafrontend,
  },
  {
    title: "Complete Web Development 2024 Bootcamp - Udemy",
    description:
      "Gained comprehensive web development skills from front-end to back-end.",
    image: CertificateUdemywebdev,
  },
  {
    title: "Node.js Developer - InnoByte Services",
    description:
      "Specialized in Node.js development, building secure and scalable applications.",
    image: ExperienceInnobyte,
  },
  {
    title: "Full Stack Developer - NovaNector Services",
    description:
      "Worked on full-stack projects, covering both front-end and back-end development.",
    image: CertificateNovanector,
  },
  {
    title: "Microsoft 365 Fundamentals Specialization - Microsoft via Coursera",
    description: "Specialization in Microsoft 365 Fundamentals.",
    image: CertificateMicrosoft365,
  },
  {
    title: "Adobe Content Creation Specialist - Adobe via Coursera",
    description: "Specialization in Adobe content creation tools.",
    image: CertificateAdobe,
  },
  {
    title: "Social Summer of Code - Season 3",
    description:
      "Completed coding contributions as part of Social Summer of Code.",
      image: CertificateSsoc,
  },
  {
    title: "Coding Ninjas Student Ambassador",
    description: "Recognized as a Student Ambassador for Coding Ninjas.",
    image: CertificateCn,
  },
  {
    title: "IBM AI Developer - Coursera Specialization",
    description: "Specialization in AI development.",
    image: CertificateIbmspecial,
  },
  {
    title: "Web Development Internship - Octanet Pvt Ltd.",
    description:
      "Gained real-world experience in web development with Octanet Pvt Ltd.",
    image: CertificateOctanet,
  },
  {
    title: "50 Days of JavaScript - codedamn",
    description:
      "Completed a 50-day JavaScript bootcamp for mastering modern JavaScript.",
      image: CertificateCodedamn,
  },
  {
    title: "Introduction to Responsible AI - Google",
    description:
      "Credential ID 8308509, focused on responsible AI principles and practices.",
      image: BadgeGoogleAI,
  },
  {
    title: "30 Days of HTML CSS - codedamn",
    description: "Completed a 30-day hands-on HTML and CSS course.",
    image: CertificateCodedamn30,
  },
  {
    title:
      "Use Canva to Create Desktop and Mobile-friendly Web Pages - Coursera Project Network",
    description: "Learned web design and page creation techniques using Canva.",
    image: CertificateCanva,
  },
  {
    title: "Git Training - SimpliLearn",
    description:
      "Completed training in Git version control and repository management.",
      image: CertificateGit,
  },
  {
    title: "Frontend React - Hackerrank",
    description:
      "Certificate of Accomplishment for Frontend Development with React.",
      image: CertificateHackerrank,
  },
  {
    title: "Resume Writing and Job Interviewing - HP LIFE",
    description:
      "Completed a course on resume building and effective job interviewing skills.",
      image: CertificateHplife,
  },
  {
    title: "Instagram Marketing - IIDE",
    description:
      "Completed training in Instagram marketing strategies for business growth.",
      image: CertificateIide,
  },
  {
    title:
      "Postman API Student Fundamentals Expert Certification - LetsUpgrade",
    description: "Mastered API testing and integration using Postman.",
    image: CertificatePostman,
  },
  {
    title:
      "Positive Thinking: A Practical Guide to Rewiring Your Brain - EDUTA",
    description:
      "Completed a personal development course on positive thinking.",
      image: CertificateEduta,
  },
  {
    title: "Microsoft AI Skills Challenge - Microsoft Learn",
    description:
      "Completed AI skills challenge focused on applied AI practices.",
      image: CertificateAImicrosoft,
  },
  {
    title: "Azure Fundamentals Challenge - Microsoft Learn",
    description: "Completed a fundamentals challenge on Microsoft Azure.",
    image: CertificateAzuremicrosoft,
  },
  {
    title:
      "Microsoft Open Source & GitHub - Microsoft Learn Student Ambassador",
    description: "Training in GitHub and open-source contributions.",
    image: CertificateOpensourcegithub,
  },
  {
    title: "A Dive into Cloud Challenge - Microsoft Learn Student Ambassador",
    description: "Explored cloud technology fundamentals with Microsoft.",
    image: CertificateCloudchallenge,
  },
  {
    title: "Mastering the Art of Competitive Programming - SoarX",
    description: "Advanced course on competitive programming techniques.",
    image: CertificateSoarx,
  },
  {
    title: "Project Management Master Course - Udemy",
    description: "Comprehensive course on managing complex projects.",
    image: CertificateProject,
  },
  {
    title: "Cracking the Data Science and AI Job Market! - Unstop",
    description: "Focused on landing jobs in the Data Science and AI field.",
    image: CertificateUnstop,
  },
  {
    title: "Vocational Training in Android Development - A+ Grade",
    description:
      "Achieved A+ in Android Development, Centre for Skill Development and Informal Education.",
      image: CertificateVtandriod,
  },
  {
    title: "Vocational Training in Website Frontend Development - A+ Grade",
    description:
      "Achieved A+ in Web Frontend Development, Centre for Skill Development and Informal Education.",
      image: CertificateVtwebdev,
  },
  {
    title: "Online Training in Python Programming - A+ Grade",
    description:
      "Achieved A+ in Python Programming, Centre for Skill Development and Informal Education.",
      image: CertificateVtpython,
  },
  {
    title:
      "API Testing a Real Web Application via Postman - Coursera Project Network",
    description: "Hands-on training in API testing for web applications.",
    image: CertificateApicoursera,
  },
  {
    title:
      "Get Started with Mail and Calendar Applications: Outlook - SkillUp EdTech",
    description:
      "Completed a course on managing mail and calendars with Outlook.",
      image: CertificateOutlook,
  },
  {
    title: "Git for Developers Using GitHub - Coursera Project Network",
    description: "Hands-on course in Git and GitHub for developers.",
    image: CertificateGithubcoursera,
  },
  {
    title: "Google Digital Marketing & E-commerce - Google via Coursera",
    description: "Comprehensive program in digital marketing and e-commerce.",
    image: CertificateDigitalgoogle,
  },
  {
    title: "How to Deploy with Netlify - Scrimba via Coursera",
    description: "Learned deployment techniques using Netlify.",
    image: CertificateNelify,
  },
  {
    title:
      "Introduction to GitHub and Visual Studio Code - Coursera Project Network",
    description: "Project-based course on GitHub and VS Code.",
    image: CertificateIntrotogit,
  },
];

const fadeInVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

const CertificationPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-950 text-white">
      <Navbar />
      <main className="flex-grow flex flex-col items-center py-12">
         {/* Hero Section */}
         <motion.header
          className="text-center py-16 shadow-lg"
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-400 tracking-wider mb-4">
            My <span className="text-purple-500">Certifications</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Explore my professional certifications that highlight my journey and dedication in various domains of web development.
          </p>
        </motion.header>

        
        {/* Animated Line */}
        <motion.div
          className="w-1/2 h-1 bg-indigo-500 mb-8"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 0.6 }}
        />

        {/* Certifications Section */}
        <div className="container mx-auto py-10 px-6 md:px-10">
          {certifications.map((certification, index) => (
            <motion.div
              key={index}
              variants={fadeInVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col md:flex-row items-center mb-12 rounded-lg shadow-lg p-6 bg-gray-800"
            >
              {/* Text Section */}
              <div className="w-full md:w-1/2 p-4 text-center md:text-left">
                <h3 className="text-2xl font-semibold text-indigo-400 mb-2">
                  {certification.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {certification.description}
                </p>
              </div>

              {/* Image Section */}
              {certification.image && (
                <div className="w-full md:w-1/2 flex justify-center items-center p-4">
                  <div className="w-[380px] h-[280px] bg-gray-100 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-500 ease-in-out hover:scale-105">
                    <img
                      src={certification.image}
                      alt={certification.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default CertificationPage;
