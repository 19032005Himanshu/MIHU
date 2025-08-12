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

const FeatureCard = ({ id, title, desc }) => (
  <div className="border rounded-xl w-full md:w-[289px] h-[168px] p-4 shadow-sm flex flex-col gap-4 items-start mx-auto bg-white">
    <div className="text-white bg-blue-600 w-7 h-7 flex items-center justify-center font-bold rounded">
      {id}
    </div>
    <h3 className="font-semibold text-lg mb-1">{title}</h3>
    <p className="text-gray-600 text-sm">{desc}</p>
  </div>
);

const ImageWithCircles = ({ src, alt }) => (
  <div className="relative w-full max-w-[220px] mx-auto">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[100%] bg-blue-200 rounded-full z-0 opacity-40" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[75%] bg-blue-100 rounded-full z-0" />
    <img src={src} alt={alt} className="relative z-10 w-full h-auto rounded-xl shadow-lg" />
  </div>
);

const Features = () => (
  <>
    {/* Section 1: Four features and phone image */}
    <section className="bg-white pt-12 pb-16 px-2 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        {/* MOBILE: Stack feature cards and image */}
        <div className="w-full flex flex-col gap-4 md:hidden">
          <FeatureCard {...features[0]} />
          <FeatureCard {...features[1]} />
          <div className="py-8">
            <ImageWithCircles src={videPhone} alt="App preview" />
          </div>
          <FeatureCard {...features[2]} />
          <FeatureCard {...features[3]} />
        </div>
        {/* DESKTOP: original columns */}
        <div className="hidden md:flex flex-col gap-6 md:w-1/3">
          {features.slice(0, 2).map((feature) => (
            <FeatureCard key={feature.id} {...feature} />
          ))}
        </div>
        <div className="hidden md:flex w-full md:w-1/3 justify-center relative">
          <ImageWithCircles src={videPhone} alt="App preview" />
        </div>
        <div className="hidden md:flex flex-col gap-6 md:w-1/3">
          {features.slice(2).map((feature) => (
            <FeatureCard key={feature.id} {...feature} />
          ))}
        </div>
      </div>
    </section>

    {/* Section 2 */}
    <section className="bg-white px-4 py-20 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Text on top, image below on mobile */}
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left order-1 md:order-none">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 leading-snug">
            Adding photos and name to the template
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-md mx-auto md:mx-0">
            Users can easily add photos and their name to the already created template,
            making every greeting truly unique and personal. It's the perfect way to add
            your special touch without any hassle.
          </p>
        </div>
        <div className="w-full md:w-1/2 flex justify-center order-2 md:order-none mt-8 md:mt-0">
          <ImageWithCircles src={addPhoto} alt="Profile Editing UI" />
        </div>
      </div>
    </section>

    {/* Section 3 */}
    <section className="bg-white px-4 py-20 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Text on top, image below on mobile */}
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left order-1 md:order-none">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 leading-snug">
            Create more than one account
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-md mx-auto md:mx-0">
            Craft distinct experiences by creating multiple accounts. Whether it's for your personal memories or professional branding, you can easily switch and customize each one.
          </p>
        </div>
        <div className="w-full md:w-1/2 flex justify-center order-2 md:order-none mt-8 md:mt-0">
          <ImageWithCircles src={createAcc} alt="Create Account UI" />
        </div>
      </div>
    </section>

    {/* Section 4 */}
    <section className="bg-white px-4 py-20 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left order-1">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 leading-snug">
            Easy editing
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-md mx-auto md:mx-0">
            Take full control and personalize every detail to perfection! Adjust photos, text, and add beautiful frames with simple taps. Your creativity, truly limitless.
          </p>
        </div>
        <div className="w-full md:w-1/2 flex justify-center order-2 mt-8 md:mt-0">
          <ImageWithCircles src={editing} alt="Easy Editing UI" />
        </div>
      </div>
    </section>

    {/* Section 5 */}
    <section className="bg-white px-4 py-20 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left order-1">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 leading-snug">
            Easy to share with family and friends
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-md mx-auto md:mx-0">
            Sharing your beautifully crafted greetings is just a tap away! Send your personalized creations directly to all your loved ones across your favorite social apps and messaging platforms.
          </p>
        </div>
        <div className="w-full md:w-1/2 flex justify-center order-2 mt-8 md:mt-0">
          <ImageWithCircles src={sharing} alt="Share UI" />
        </div>
      </div>
    </section>
  </>
);

export default Features;
