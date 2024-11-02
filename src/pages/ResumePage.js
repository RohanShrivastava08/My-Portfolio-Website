import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { storage } from '../firebase';
import { ref, listAll, getDownloadURL } from 'firebase/storage';
import Navbar from '../components/Navbar';

// Animation Variants for Header
const headerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

const ResumePage = () => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const fetchFiles = async () => {
      const resumeRef = ref(storage, 'resumes/');
      try {
        const res = await listAll(resumeRef);
        const fileUrls = await Promise.all(
          res.items.map(async (item) => {
            const url = await getDownloadURL(item);
            return { name: item.name, url };
          })
        );
        setFiles(fileUrls);
      } catch (error) {
        console.error("Error fetching files:", error);
      }
    };

    fetchFiles();
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-800 to-gray-900">
      <Navbar />
      <main className="text-white flex-grow flex flex-col items-center py-10">
        
        {/* Header Section */}
        <motion.header
          className="text-center py-16 shadow-lg"
          initial="hidden"
          animate="visible"
          variants={headerVariants}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-400 tracking-wider mb-4">
            My <span className="text-purple-500">Resumes</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Here’s where you can view and download my latest resumes. Let's connect and explore potential collaborations!
          </p>
        </motion.header>

        
        {/* Animated Line */}
        <motion.div
          className="w-1/2 h-1 bg-indigo-500 mb-8"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 0.6 }}
        />

        {/* Resumes Section */}
        <section className="container mx-auto py-10 px-6 lg:px-0">
          <h2 className="text-3xl font-semibold text-gray-50 text-center mb-8">
            Uploaded Resumes
          </h2>
          <div className="flex justify-center">
            <div className="flex flex-col w-full max-w-6xl space-y-6">
              {files.length > 0 ? (
                files.map((file) => (
                  <div 
                    key={file.name} 
                    className="bg-gradient-to-r from-gray-700 to-gray-800 rounded-lg p-6 border border-gray-700 shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-gray-700"
                  >
                    <h3 className="text-lg font-semibold text-white mb-4">{file.name}</h3>
                    <div className="flex justify-end space-x-4">
                      <a
                        href={file.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-indigo-500 hover:bg-indigo-400 text-white font-semibold py-2 px-4 rounded shadow transition duration-300 ease-in-out transform hover:scale-105"
                      >
                        Preview
                      </a>
                      <a
                        href={file.url}
                        download
                        className="bg-blue-500 hover:bg-blue-400 text-white font-semibold py-2 px-4 rounded shadow transition duration-300 ease-in-out transform hover:scale-105"
                      >
                        Download
                      </a>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-400 text-center">No resumes uploaded yet.</p>
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ResumePage;
