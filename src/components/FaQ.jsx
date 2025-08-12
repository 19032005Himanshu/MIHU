import React, { useState, useEffect, useRef } from "react";

const faqData = [
  {
    question: "Is the Mihu app free to download and use?",
    answer: "Yes, the Mihu app is completely free to download and use.",
  },
  {
    question: "Can I share quotes to social media platforms?",
    answer:
      "Absolutely! You can easily share quotes to platforms like Instagram, Facebook, and WhatsApp.",
  },
  {
    question: "Can I use Mihu to send greetings for holidays?",
    answer:
      "Yes! Mihu lets you personalize and send beautiful greetings for holidays and special occasions.",
  },
  {
    question: "How can I find quotes for specific occasions?",
    answer:
      "You can browse by category or use the search bar to find quotes for specific occasions.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [showUpButton, setShowUpButton] = useState(false);
  const faqRef = useRef(null);

  const toggleIndex = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  // Detect when FAQ section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setShowUpButton(entry.isIntersecting),
      { threshold: 0.4 }
    );

    if (faqRef.current) {
      observer.observe(faqRef.current);
    }

    return () => {
      if (faqRef.current) {
        observer.unobserve(faqRef.current);
      }
    };
  }, []);

  return (
    <section
      id="faq"
      ref={faqRef}
      className="relative bg-blue-50 pt-14 pb-24 px-4 sm:px-6 md:px-10 rounded-xl shadow-md max-w-7xl mx-auto mb-16"
    >
      <div className="flex flex-col md:flex-row text-center justify-between items-start gap-10">
        {/* Left Section */}
        <div className="md:w-1/3 w-full text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl text-center font-bold text-gray-900 mb-3">
            FAQ
          </h2>
          <p className="text-gray-700 text-center text-sm sm:text-base mb-4">
            Frequently asked questions
          </p>
          <p className="text-gray-700 text-center text-sm sm:text-base mb-6">
            And if you have any other questions
          </p>
          <div className="w-full flex justify-center items-center">
            <button className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition">
              Contact us
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="md:w-2/3 w-full space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`bg-white rounded-md shadow-sm overflow-hidden ${
                activeIndex === index
                  ? "border border-t-4 border-[#2651A6]"
                  : ""
              }`}
            >
              <button
                onClick={() => toggleIndex(index)}
                className="w-full flex justify-between items-center px-4 py-3 text-left"
              >
                <span className="flex items-start gap-3">
                  <span className="font-bold text-gray-900 text-base sm:text-lg">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-gray-900 font-medium text-sm sm:text-base">
                    {item.question}
                  </span>
                </span>
                <span
                  className={`text-xl transform transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                >
                  ˅
                </span>
              </button>
              {activeIndex === index && (
                <div className="px-12 pb-4 text-sm text-gray-700">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* "Up" Button inside FAQ Section */}
      {showUpButton && (
        <button
          onClick={() => {
            // Scroll to the top of the page
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="absolute bottom-6 right-9 bg-black text-white w-10 h-10 rounded-md flex items-center justify-center hover:bg-gray-800 transition-all"
          aria-label="Scroll to Top"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          </svg>
        </button>
      )}
    </section>
  );
};

export default FAQ;
