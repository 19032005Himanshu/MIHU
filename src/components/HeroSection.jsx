import React, { useState } from "react";
import heroImg from "../assets/heroImg.png";

const HeroSection = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div id="hero" className="flex justify-center px-4 md:px-8 mt-4">
      <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-12 w-full max-w-7xl flex flex-col md:flex-row items-center gap-8">
        {/* Left */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Craft Memories, And <br />
            Greetings at a Time. <br />
            With <span className="text-indigo-600">Mihu</span>
          </h1>
          <p className="text-gray-600 mb-6 max-w-md sm:max-w-lg mx-auto md:mx-0 text-sm sm:text-base">
            Access an array of beautiful templates to send personalized
            greetings. Built for universal appeal, perfect for sharing love to
            your nearest and dearest.
          </p>
          <div className="flex gap-1.5">
            <a href="#" className="inline-block">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/512px-Google_Play_Store_badge_EN.svg.png"
                alt="Google Play"
                className="h-10 sm:h-12"
              />
            </a>

            {/* YouTube button */}
            <button
              onClick={() => setShowVideo(true)}
              className="inline-block"
              aria-label="Show Video"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/512px-YouTube_full-color_icon_%282017%29.svg.png?20240107144800"
                alt="YouTube"
                className="h-10 sm:h-12"
              />
            </button>

            {/* Close video button */}
            {showVideo && (
              <button
                onClick={() => setShowVideo(false)}
                className="ml-2 px-2 py-1 text-sm text-gray-600 border rounded bg-gray-200"
                aria-label="Close Video"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Right: video or image */}
        <div className="flex-1 flex justify-center items-center min-h-[220px]">
          {showVideo ? (
            <video
              src="/video.mp4" // Replace with your actual video path
              controls
              autoPlay
              className="w-48 sm:w-64 md:w-80 rounded-xl drop-shadow-2xl"
              style={{ transform: 'rotate(10deg)' }}
            />
          ) : (
            <img
              src={heroImg}
              alt="Hero"
              className="w-48 sm:w-64 md:w-80 transform rotate-[10deg] drop-shadow-2xl"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
