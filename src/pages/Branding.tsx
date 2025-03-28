import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const brandingLocations = [
  {
    title: 'Main Entrance',
    image: '/src/pages/images/1.jpg',
    description: 'Grand welcome arch with event branding',
  },
  {
    title: 'Academic Block',
    image: '/src/pages/images/2.jpg',
    description: 'Vertical banners and digital displays',
  },
  {
    title: 'Student Center',
    image: '/src/pages/images/3.jpg',
    description: 'Interactive installations and photo opportunities',
  },
  {
    title: 'Event Arena',
    image: '/src/pages/images/4.jpg',
    description: 'Complete venue transformation with immersive branding',
  },
  {
    title: 'Library Complex',
    image: '/src/pages/images/5.jpg',
    description: 'Digital displays and information kiosks',
  },
  {
    title: 'Sports Complex',
    image: '/src/pages/images/6.jpg',
    description: 'Outdoor banners and directional signage',
  },
  {
    title: 'Food Court',
    image: '/src/pages/images/7.jpg',
    description: 'Branded seating areas and menu displays',
  },
  {
    title: 'Innovation Hub',
    image: '/src/pages/images/8.jpg',
    description: 'Tech-integrated branding displays',
  },
  {
    title: 'Amphitheatre',
    image: '/src/pages/images/9.jpg',
    description: 'Stage backdrop and surrounding banners',
  },
  {
    title: 'Research Center',
    image: '/src/pages/images/10.jpg',
    description: 'Digital screens with event information',
  },
  {
    title: 'Central Plaza',
    image: '/src/pages/images/11.jpg',
    description: 'Central information hub and meeting point',
  },
  {
    title: 'Parking Area',
    image: '/src/pages/images/12.jpg',
    description: 'Directional signage and welcome banners',
  },
  {
    title: 'Hostel Complex',
    image: '/src/pages/images/13.jpg',
    description: 'Information boards and promotional displays',
  },
  {
    title: 'Administrative Block',
    image: '/src/pages/images/14.jpg',
    description: 'Corporate branding and VIP area signage',
  },
  {
    title: 'Workshop Area',
    image: '/src/pages/images/15.jpg',
    description: 'Technical area branding and safety information',
  },
  {
    title: 'Garden Area',
    image: '/src/pages/images/16.jpg',
    description: 'Outdoor promotional displays and rest areas',
  },
];

const Branding = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-300 to-gray-500">
            Branding Strategy
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Strategic placement of event branding across campus to create maximum impact
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {brandingLocations.map((location, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-900 to-black"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={location.image}
                  alt={location.title}
                  className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-xl font-bold mb-2 text-white">{location.title}</h3>
                <p className="text-gray-300 text-sm">{location.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Branding;
