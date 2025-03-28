import React from 'react';
import { motion } from 'framer-motion';

const timeline = [
  {
    date: 'April 17',
    title: 'Startup Registration & Setup',
    description: 'Startups arrive, register, and set up stalls at Venue D8.',
  },
  {
    date: 'April 17',
    title: 'Guest Arrival & Stay',
    description: 'High-profile guests and investors arrive and check into the university hotel.',
  },
  {
    date: 'April 18',
    title: 'Startup Stall Exhibition',
    description: 'Startups showcase their products to investors, industry experts, and university representatives.',
  },
  {
    date: 'April 18',
    title: 'Panel Discussions',
    description: 'Keynote speakers and industry leaders discuss major topics at Venue D1.',
  },
  {
    date: 'April 18',
    title: 'University Tour & Networking Lunch',
    description: 'Guests explore university labs and research centers, followed by a networking lunch.',
  },
  {
    date: 'April 18',
    title: 'Evening Main Stage Event',
    description: 'Keynote speeches, startup recognitions, and cultural performances at the central stage.',
  },
  {
    date: 'April 19',
    title: 'Demo Day & Startup Pitching',
    description: 'Startups pitch to investors for funding and mentorship.',
  },
  {
    date: 'April 19',
    title: 'Networking & Closing Ceremony',
    description: 'Final networking session followed by an official closing ceremony.',
  }
];

const Execution = () => {
  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-4">Execution Plan</h1>
          <p className="text-xl text-gray-400">
            A detailed timeline of our event execution strategy, ensuring smooth operations.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-800" />
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative mb-8 ${
                index % 2 === 0 ? 'md:ml-auto md:pl-8' : 'md:mr-auto md:pr-8'
              } md:w-1/2`}
            >
              <div className="bg-gray-900 rounded-xl p-6">
                <div className="absolute top-6 -left-3 md:left-auto md:right-0 w-6 h-6 bg-white rounded-full transform md:translate-x-1/2" />
                <span className="text-sm text-gray-400">{item.date}</span>
                <h3 className="text-xl font-bold mt-2 mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Execution;
