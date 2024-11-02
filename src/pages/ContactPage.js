// src/pages/ContactPage.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';

const ContactPage = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        const url = `https://api.airtable.com/v0/appQG39lJKs33cR3J/ContactMessages`;

        const data = {
            records: [
                {
                    fields: {
                        Name: formData.name,
                        Email: formData.email,
                        Message: formData.message,
                    },
                },
            ],
        };

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`, // Ensure your .env file is set up correctly
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setSuccess('Your message has been sent successfully!');
                setFormData({ name: '', email: '', message: '' }); // Reset form
            } else {
                const errData = await response.json();
                throw new Error(`Error: ${errData.message}`);
            }
        } catch (err) {
            setError(`Error submitting data to Airtable: ${err.message}`);
        }
    };

    // Animation variants
    const headerVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-100">
            {/* Navbar */}
            <Navbar />

            {/* Header Section */}
            <motion.header
                className="text-center py-16 shadow-lg"
                initial="hidden"
                animate="visible"
                variants={headerVariants}
                transition={{ duration: 0.6 }}
            >
                <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-400 tracking-wider mb-4">
                    Let’s <span className="text-purple-500">Connect</span>
                </h1>
                <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
                    I’m always open to discussing new projects, creative ideas, or opportunities to be part of your visions!
                </p>
            </motion.header>

            
        {/* Animated Line */}
        <motion.div
          className="w-1/2 h-1 bg-indigo-500 mb-8"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 0.6 }}
        />

            {/* Contact Info Section */}
            <main className="flex-grow flex flex-col items-center py-20">
                <section className="text-center max-w-4xl px-6 md:px-0">
                    <h2 className="text-3xl font-semibold text-indigo-300 mb-8">Reach Out</h2>
                    <p className="text-lg text-gray-400 mb-10 leading-relaxed">
                        Connect with me directly or fill out the form below to get in touch. I look forward to hearing from you!
                    </p>

                    {/* Contact Form */}
                    <div className="mt-10 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-600 bg-opacity-80 rounded-2xl shadow-xl w-full max-w-lg mx-auto border border-gray-600 p-10 transform hover:scale-105 transition-transform duration-300">
                        <h3 className="text-xl font-semibold text-white mb-6">Drop a Message</h3>
                        {success && <p className="text-green-400 mb-4">{success}</p>}
                        {error && <p className="text-red-400 mb-4">{error}</p>}
                        <form onSubmit={handleSubmit} className="flex flex-col space-y-8">
                            <div className="relative">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder=" "
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="peer w-full p-4 rounded-lg bg-gray-900 text-gray-200 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                />
                                <label className="absolute top-2 left-4 text-gray-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm">
                                    Your Name
                                </label>
                            </div>
                            <div className="relative">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder=" "
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="peer w-full p-4 rounded-lg bg-gray-900 text-gray-200 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                />
                                <label className="absolute top-2 left-4 text-gray-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm">
                                    Your Email
                                </label>
                            </div>
                            <div className="relative">
                                <textarea
                                    name="message"
                                    placeholder=" "
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="peer w-full p-4 h-32 rounded-lg bg-gray-900 text-gray-200 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
                                />
                                <label className="absolute top-2 left-4 text-gray-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm">
                                    Your Message
                                </label>
                            </div>
                            <motion.button
                                type="submit"
                                className="w-full py-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-lg font-semibold shadow-lg transform hover:scale-105 transition-all duration-300"
                                whileHover={{ scale: 1.08 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Send Message
                            </motion.button>
                        </form>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default ContactPage;
