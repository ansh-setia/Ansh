import React, { useRef } from "react";
import { motion } from "framer-motion";

const Home = () => {
  const textRef = useRef(null);

  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://source.unsplash.com/1920x1080/?business,conference')",
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div
        ref={textRef}
        className="relative z-10 min-h-screen flex flex-col justify-center items-center text-center px-4"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-extrabold text-white-600 mb-6"
        >
          Chandigarh University E-SUMMIT
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-red mb-8 max-w-3xl"
        >
          The Biggest Entrepreneurship Fest at Chandigarh University
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col md:flex-row gap-4"
        >
          <a
            href="#learn-more"
            className="px-8 py-3 bg-red-600 text-white font-semibold rounded-full hover:bg-red-700 transition-colors duration-300 shadow-lg"
          >
            Learn More
          </a>
          <a
            href="/team"
            className="px-8 py-3 border border-white text-white font-semibold rounded-full hover:bg-white hover:text-red-600 transition-colors duration-300 shadow-lg"
          >
            Meet the Team
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
