import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faTwitter, faFacebook, faHashnode } from "@fortawesome/free-brands-svg-icons";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <motion.footer
    className="bg-gradient-to-br from-gray-800 to-gray-900 text-gray-300 pt-8 pb-4 border-t border-gray-700"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 20 }}
    transition={{ duration: 0.5 }}
  >
    <div className="container mx-auto px-6 lg:px-10 grid grid-cols-1 md:grid-cols-3 gap-6">
      <motion.div 
        className="text-center md:text-left mb-4 md:mb-0"
        whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
      >
        <h2 className="text-2xl font-bold text-indigo-400 mb-1 hover:text-indigo-500 transition duration-300">Rohan Shrivastava</h2>
        <p className="text-sm leading-relaxed max-w-sm mx-auto md:mx-0 mb-2 hover:text-gray-400 transition duration-300">
          MERN Stack Developer passionate about building efficient, modern web applications.
          Experienced in front-end and back-end development with a strong foundation in API testing.
        </p>
      </motion.div>
  
      <motion.div 
        className="text-center md:text-left"
        whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
      >
        <h3 className="text-lg font-semibold text-indigo-400 mb-3 hover:text-indigo-500 transition duration-300">Quick Links</h3>
        <ul className="text-sm space-y-1">
          {['Home', 'About', 'Projects', 'Experience', 'Certifications', 'Contact', 'Resume'].map((link, index) => (
            <motion.li 
              key={index}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            >
              <Link to={`/${link.toLowerCase()}`} className="hover:text-indigo-300 transition duration-300 transform hover:-translate-y-1 hover:underline">
                {link}
              </Link>
            </motion.li>
          ))}
        </ul>
      </motion.div>
  
      <motion.div 
        className="text-center md:text-right"
        whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
      >
        <h3 className="text-lg font-semibold text-indigo-400 mb-3 hover:text-indigo-500 transition duration-300">Contact Info</h3>
        <p className="text-sm mb-1 hover:text-gray-400 transition duration-300">youremail@example.com</p>
        <div className="flex justify-center md:justify-end space-x-3 mb-3">
          {/* Social Media Icons with Updated Colors */}
          <motion.a
            href="https://www.linkedin.com/in/rohan-shrivastava-887a15251/"
            target="_blank"
            whileHover={{ scale: 1.1, rotate: 10, color: '#6366F1' }}
            aria-label="LinkedIn"
            className="text-indigo-400 transition duration-300"
          >
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </motion.a>
          <motion.a
            href="https://github.com/RohanShrivastava08"
            target="_blank"
            whileHover={{ scale: 1.1, rotate: 10, color: '#333' }}
            aria-label="GitHub"
            className="text-gray-400 transition duration-300"
          >
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </motion.a>
          <motion.a
            href="https://x.com/rohan_sh0808"
            target="_blank"
            whileHover={{ scale: 1.1, rotate: 10, color: '#6366F1' }}
            aria-label="Twitter"
            className="text-indigo-400 transition duration-300"
          >
            <FontAwesomeIcon icon={faTwitter} size="lg" />
          </motion.a>
          <motion.a
            href="mailto:rohansh0808@gmail.com"
            whileHover={{ scale: 1.1, rotate: 10, color: '#D50000' }}
            aria-label="Email"
            className="text-red-500 transition duration-300"
          >
            <FontAwesomeIcon icon={faMailBulk} size="lg" />
          </motion.a>
          <motion.a
            href="https://www.facebook.com/your-facebook"
            target="_blank"
            whileHover={{ scale: 1.1, rotate: 10, color: '#3b5998' }}
            aria-label="Facebook"
            className="text-blue-600 transition duration-300"
          >
            <FontAwesomeIcon icon={faFacebook} size="lg" />
          </motion.a>
          <motion.a
            href="https://hashnode.com/@rohansh08"
            target="_blank"
            whileHover={{ scale: 1.1, rotate: 10, color: '#C13584' }}
            aria-label="Hashnode"
            className="text-pink-500 transition duration-300"
          >
            <FontAwesomeIcon icon={faHashnode} size="lg" />
          </motion.a>
        </div>
      </motion.div>
    </div>
  
    {/* Newsletter Subscription and Divider */}
    <div className="mt-4 text-center">
      <h3 className="text-lg font-semibold text-indigo-400 mb-1 hover:text-indigo-500 transition duration-300">Subscribe to Newsletter</h3>
      <input
        type="email"
        placeholder="Enter your email"
        className="px-4 py-2 w-64 rounded border border-gray-600 focus:outline-none focus:border-indigo-400 transition duration-300"
      />
      <motion.button
        className="ml-2 bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-400 transition duration-300"
        whileHover={{ scale: 1.05 }}
      >
        Subscribe
      </motion.button>
    </div>
  
    <div className="border-t border-gray-700 mt-6 pt-4 text-center relative">
      <p className="text-xs text-gray-400 transition duration-300">
        &copy; {new Date().getFullYear()} Rohan's Portfolio. All rights reserved.
      </p>
    </div>
  </motion.footer>
  );
};

export default Footer;
