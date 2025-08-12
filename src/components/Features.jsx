import React from 'react';
import videPhone from '../assets/videPhone.png';
import addPhoto from '../assets/addPhoto.png';
import createAcc from '../assets/createAcc.png';
import editing from '../assets/editing.png';
import sharing from '../assets/sharing.png';

const features = [
  {
    id: 1,
    title: 'Many categories',
    desc: 'Many categories of templates for you to choose what you need.',
  },
  {
    id: 2,
    title: 'Easy to use',
    desc: 'Simple interface and clear action buttons.',
  },
  {
    id: 3,
    title: 'Easy editing',
    desc: 'Easily modify templates to suit your taste.',
  },
  {
    id: 4,
    title: 'Saving your favorite',
    desc: 'Easily save the templates you like.',
  },
];

const ImageWithCircles = ({ src, alt }) => (
  <div className="relative w-full max-w-[220px]">
    {/* Bigger Circle */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[100%] bg-blue-200 rounded-full z-0 opacity-40" />
    {/* Inner Circle */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[75%] bg-blue-100 rounded-full z-0" />
    {/* Main Image */}
    <img src={src} alt={alt} className="relative z-10 w-full h-auto rounded-xl shadow-lg" />
  </div>
);

const Features = () => {
  return (
    <>
      {/* Feature Section */}
      <section className="bg-white pt-12 pb-16 px-2 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left Features */}
          <div className="flex flex-col feature  gap-6  md:w-1/3">
            {features.slice(0, 2).map((feature) => (
              <div
                key={feature.id}
                className="  border rounded-xl w-[289px] h-[168px]  p-4 shadow-sm flex flex-col gap-4 items-start"
              >
                <div className="text-white bg-blue-600 w-7 h-7 flex items-center justify-center font-bold rounded">
                  {feature.id} 
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{feature.title}</h3>
                  </div><div>
                  <p className="text-gray-600 text-sm">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Center Image */}
          <div className="w-full md:w-1/3 flex justify-center relative">
            <ImageWithCircles src={videPhone} alt="App preview" />
          </div>

          {/* Right Features */}
          <div className="flex flex-col featureRight gap-6 w-[289] h-[168] md:w-1/3">
            {features.slice(2).map((feature) => (
              <div
                key={feature.id}
                className="border rounded-xl p-4 shadow-sm flex flex-col gap-4 w-[289px] h-[168px] items-start"
              >
                <div className="text-white bg-blue-600 w-7 h-7 flex items-center justify-center font-bold rounded">
                  {feature.id}
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="bg-white px-4 py-20 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row mx-[140px] items-center justify-between gap-10">
          {/* Text */}
          <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
              Adding photos and name <br /> to the template
            </h2>
            <p className="text-gray-600 text-base md:text-lg max-w-md mx-auto md:mx-0">
              Users can easily add photos and their name to the already created template, 
              making every greeting truly unique and personal. It's the perfect way to add 
              your special touch without any hassle.
            </p>
          </div>

          {/* Image */}
          <div className="w-full md:w-1/2 flex justify-center relative">
            <ImageWithCircles src={addPhoto} alt="Profile Editing UI" />
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="bg-white px-4 py-20 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Image */}
          <div className="w-full md:w-1/2 flex justify-center relative">
            <ImageWithCircles src={createAcc} alt="Create Account UI" />
          </div>

          {/* Text */}
          <div className="w-full md:w-1/2 space-y-6 text-center md:text-left order-2 md:order-none">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
              Create more than one <br /> account
            </h2>
            <p className="text-gray-600 text-base md:text-lg max-w-md mx-auto md:mx-0">
              Craft distinct experiences by creating multiple accounts. Whether it's for your personal memories or professional branding, you can easily switch and customize each one.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4 */}
      <section className="bg-white px-4 py-20 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row mx-[140px] items-center justify-between gap-10">
          {/* Text */}
          <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
              Easy editing
            </h2>
            <p className="text-gray-600 text-base md:text-lg max-w-md mx-auto md:mx-0">
              Take full control and personalize every detail to perfection! Adjust photos, text, and add beautiful frames with simple taps. Your creativity, truly limitless.
            </p>
          </div>

          {/* Image */}
          <div className="w-full md:w-1/2 flex justify-center relative">
            <ImageWithCircles src={editing} alt="Easy Editing UI" />
          </div>
        </div>
      </section>

      {/* Section 5 */}
      <section className="bg-white px-4 py-20 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Image */}
          <div className="w-full md:w-1/2 flex justify-center relative">
            <ImageWithCircles src={sharing} alt="Share UI" />
          </div>

          {/* Text */}
          <div className="w-full md:w-1/2 space-y-6 text-center md:text-left order-2 md:order-none">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
              Easy to share with family <br /> and friends
            </h2>
            <p className="text-gray-600 text-base md:text-lg max-w-md mx-auto md:mx-0">
              Sharing your beautifully crafted greetings is just a tap away! Send your personalized creations directly to all your loved ones across your favorite social apps and messaging platforms.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
