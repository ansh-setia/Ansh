import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const teamCategories = [
  {
    title: "Leadership",
    members: [
      { name: 'Pradeep Rana', role: 'Overall', phone: '8273288399' },
      { name: 'Sahil Singh', role: 'Overall', phone: '8874452986' },
    ]
  },
  {
    title: "Planning & Execution",
    members: [
      { name: 'Ansh Setia', role: 'Planning and Execution', phone: '9149151900' },
      { name: 'Adarsh Sharma', role: 'Planning and Execution', phone: '9478768325' },
    ]
  },
  {
    title: "Marketing & Outreach",
    members: [
      { name: 'Siddhi Gupta', role: 'Outreach', phone: '9306312936' },
      { name: 'Yashas', role: 'Influencer Outreach', phone: '7876698536' },
      { name: 'Deepraj', role: 'Media', phone: '9862607413' },
    ]
  },
  {
    title: "Creative & Design",
    members: [
      { name: 'Hridayaj', role: 'Branding', phone: '9988326076' },
      { name: 'Lakshay', role: 'Designing', phone: '8287010946' },
    ]
  },
  {
    title: "Operations",
    members: [
      { name: 'Jagriti', role: 'Sponsorship', phone: '9138113211' },
      { name: 'Mananpreet', role: 'Venue Readiness', phone: '9888253715' },
      { name: 'Saransh', role: 'Laisoning', phone: '9411938540' },
      { name: 'Pawan', role: 'Console', phone: '9950519933' },
      { name: 'Akash Kaushik', role: 'Final Preparation', phone: '9664078066' },
      { name: 'Akash', role: 'Discipline', phone: '8937025725' },
      { name: 'Dipesh', role: 'Transportation', phone: '9115935141' },
      { name: 'Jay', role: 'Production', phone: '9024303949' },
    ]
  },
];

const TeamCategory = ({ category, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="mb-16"
    >
      <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
        {category.title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {category.members.map((member, memberIndex) => (
          <motion.div
            key={memberIndex}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, delay: memberIndex * 0.1 }}
            className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 hover:from-gray-800 hover:to-gray-900 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl"
          >
            <div className="flex flex-col h-full">
              <h3 className="text-xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                {member.name}
              </h3>
              <p className="text-gray-400 mb-2">{member.role}</p>
              <p className="text-gray-500 mt-auto">{member.phone}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const Team = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-300 to-gray-500">
            Our Team
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Meet the exceptional individuals who bring innovation, creativity, and expertise
            to make every event a remarkable success.
          </p>
        </motion.div>

        {teamCategories.map((category, index) => (
          <TeamCategory key={index} category={category} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Team;