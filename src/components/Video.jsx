import React from 'react';
import { Play } from 'lucide-react';
import videPhone from '../assets/videPhone.png';

const Video = () => {
  return (
    <section id="video" className="bg-[#EAF1FF] rounded-xl shadow-md px-4 py-12 mx-auto my-16 max-w-7xl">
      {/* --> key line changed: flex-col on mobile, flex-row on desktop */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
        {/* Text Content (appears above image on mobile) */}
        <div className="w-full md:w-1/2 text-center md:text-left px-2 md:px-0">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 md:pl-20">
            What is Mihu?
          </h2>
          <p className="text-gray-700 text-base leading-relaxed md:pl-20">
            Sending a thoughtful greeting has never been easier thanks to Mihu.
            This straightforward app is perfect for all users, with a special
            focus on making it accessible for our parents and seniors. Easily
            create and share heartfelt wishes by customizing beautiful images
            and frames. It’s personal, delightfully simple, and crafted with love.
          </p>
        </div>

        {/* Image Content (appears below text on mobile) */}
        <div className="relative w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
          <img
            src={videPhone}
            alt="Mihu App Preview"
            className="w-full max-w-[260px] max-h-[500px] rounded-xl shadow-lg object-contain"
          />
          <button
            className="absolute inset-0 flex items-center justify-center"
            aria-label="Play Video"
          >
            <div className="bg-white bg-opacity-90 rounded-full p-4 shadow-lg transition-transform transform hover:scale-105">
              <Play className="text-black w-10 h-10" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Video;
