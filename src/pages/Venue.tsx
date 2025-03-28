import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Venue = () => {
  const headerRef = useRef(null);
  const mapRef = useRef(null);
  const stallRef = useRef(null);
  const specsRef = useRef(null);

  const isHeaderInView = useInView(headerRef, { once: true });
  const isMapInView = useInView(mapRef, { once: true });
  const isStallInView = useInView(stallRef, { once: true });
  const isSpecsInView = useInView(specsRef, { once: true });

  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-300 to-gray-500">
            Venue Details
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Experience our meticulously planned venue layout at Chandigarh University
          </p>
        </motion.div>

        {/* Stall Layout Section */}
        <motion.div
          ref={stallRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isStallInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
            Stall Layout
          </h2>
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-8">
            <img
              src="/17.jpg"
              alt="Stall Layout"
              className="w-full rounded-lg shadow-2xl mb-8 hover:opacity-90 transition-opacity duration-300"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-white">Layout Features</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                    Optimized traffic flow design
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                    Strategic sponsor placement
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                    Interactive zones
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                    Clear navigation paths
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-white">Technical Setup</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                    Professional lighting system
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                    High-quality sound equipment
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                    Digital displays integration
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                    Power backup solutions
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* University Map Section */}
        <motion.div
          ref={mapRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isMapInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
            Campus Overview
          </h2>
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-8 overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3424.896314693636!2d76.57338937560867!3d30.769539974531267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ffb140bd63e07%3A0x68591e334d17a988!2sChandigarh%20University!5e0!3m2!1sen!2sin!4v1709754391797!5m2!1sen!2sin"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg shadow-2xl"
            ></iframe>
          </div>
        </motion.div>

        {/* Venue Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isMapInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-xl text-center transform hover:-translate-y-1 transition-all duration-300"
          >
            <h3 className="text-4xl font-bold mb-2">5000+</h3>
            <p className="text-gray-400">Seating Capacity</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isMapInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-xl text-center transform hover:-translate-y-1 transition-all duration-300"
          >
            <h3 className="text-4xl font-bold mb-2">50+</h3>
            <p className="text-gray-400">Stall Spaces</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isMapInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-xl text-center transform hover:-translate-y-1 transition-all duration-300"
          >
            <h3 className="text-4xl font-bold mb-2">10+</h3>
            <p className="text-gray-400">Entry/Exit Points</p>
          </motion.div>
        </div>

        {/* Technical Specifications */}
        <motion.div
          ref={specsRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isSpecsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-8"
        >
          <h2 className="text-2xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
            Technical Specifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-white">Sound System</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  Line array speakers
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  Digital mixing console
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  Wireless microphone system
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  Stage monitors
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-white">Lighting</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  LED par lights
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  Moving head lights
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  Laser systems
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  DMX controllers
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Venue;