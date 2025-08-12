import React from "react";

export const PolicyPage = () => (
  <div className="min-h-screen bg-white flex justify-center px-4 py-10 sm:px-8">
    <div className="max-w-3xl w-full rounded-xl shadow-md border border-gray-200 p-10">
      {/* Table of Contents */}
      <nav className="border-b pb-4 mb-8 flex flex-wrap gap-5 text-sm text-gray-600">
        <a href="#overview" className="hover:text-blue-700">Overview</a>
        <a href="#info" className="hover:text-blue-700">Information We Collect</a>
        <a href="#usage" className="hover:text-blue-700">How We Use Information</a>
        <a href="#sharing" className="hover:text-blue-700">Sharing & Disclosure</a>
        <a href="#security" className="hover:text-blue-700">Data Security</a>
        <a href="#rights" className="hover:text-blue-700">Your Rights</a>
        <a href="#changes" className="hover:text-blue-700">Policy Changes</a>
        <a href="#cookies" className="hover:text-blue-700">Cookies</a>
        <a href="#contact" className="hover:text-blue-700">Contact</a>
      </nav>

      {/* Highlight Box */}
      <div id="overview" className="mb-8 bg-blue-50 rounded-lg p-5 border-l-4 border-blue-600">
        <span className="font-semibold text-lg text-blue-800">Last Updated: Aug 9, 2025</span>
        <p className="text-gray-700 mt-2">
          At Mihu, we prioritize your privacy and data protection. This Privacy Policy describes
          the types of information we collect, how we use it, and the measures we take to
          safeguard it. We encourage you to read this policy carefully to fully understand
          our practices.
        </p>
      </div>

      {/* Information We Collect */}
      <section id="info" className="mb-7">
        <h2 className="text-xl font-bold text-gray-800 mb-2">Information We Collect</h2>
        <p className="text-gray-700 mb-2">
          We collect information to provide better services to all our users. This information
          may be collected directly from you, through your use of our services, or from other
          legitimate sources.
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li><strong>Personal Information:</strong> Name, email address, phone number, billing information.</li>
          <li><strong>Account Information:</strong> Login credentials, profile preferences, and communication settings.</li>
          <li><strong>Usage Data:</strong> Your interactions with our website, pages visited, time spent, and navigation patterns.</li>
          <li><strong>Technical Data:</strong> IP address, browser type, device identifiers, and operating system details.</li>
          <li><strong>Communication Data:</strong> Records of emails, chats, or other communications between you and us.</li>
        </ul>
      </section>

      {/* How We Use Information */}
      <section id="usage" className="mb-7">
        <h2 className="text-xl font-bold text-gray-800 mb-2">How We Use Your Information</h2>
        <p className="text-gray-700 mb-2">
          The information we gather is used strictly for business purposes and to offer you an
          improved, personalized, and consistent experience across our services.
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>To authenticate your identity and maintain secure access to our services.</li>
          <li>To process transactions and deliver the products or services you request.</li>
          <li>To communicate important service updates, offers, and notifications.</li>
          <li>To improve our website’s performance, features, and security.</li>
          <li>To comply with regulatory obligations and enforce our terms of service.</li>
        </ul>
      </section>

      {/* Sharing & Disclosure */}
      <section id="sharing" className="mb-7">
        <h2 className="text-xl font-bold text-gray-800 mb-2">Sharing & Disclosure</h2>
        <p className="text-gray-700 mb-2">
          We do not sell your personal information. However, in certain cases, we may share it
          with trusted third parties:
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>With service providers who assist in delivering our services (under strict confidentiality agreements).</li>
          <li>If required by law, legal process, or governmental request.</li>
          <li>In connection with a merger, acquisition, or sale of our business assets.</li>
        </ul>
      </section>

      {/* Data Security */}
      <section id="security" className="mb-7">
        <h2 className="text-xl font-bold text-gray-800 mb-2">Data Security</h2>
        <p className="text-gray-700">
          We employ industry-standard security measures—such as encryption, secure servers,
          and access controls—to protect the integrity and confidentiality of your data.
          While we follow best practices, no online transmission is completely secure, so we
          advise you to also take precautions to protect your personal information.
        </p>
      </section>

      {/* Your Rights */}
      <section id="rights" className="mb-7">
        <h2 className="text-xl font-bold text-gray-800 mb-2">Your Rights</h2>
        <p className="text-gray-700 mb-2">
          Depending on your location, you may have the right to:
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>Access, update, or correct your personal information.</li>
          <li>Request deletion of your data, subject to legal obligations.</li>
          <li>Opt-out of marketing communications at any time.</li>
          <li>Request a copy of the data we hold about you in a portable format.</li>
        </ul>
      </section>

      {/* Changes to Policy */}
      <section id="changes" className="mb-7">
        <h2 className="text-xl font-bold text-gray-800 mb-2">Changes to This Policy</h2>
        <p className="text-gray-700">
          We may update our Privacy Policy from time to time to reflect changes in our
          practices, technology, legal requirements, or other factors. The latest version will
          always be available on this page for your review.
        </p>
      </section>

      {/* Cookies */}
      <section id="cookies" className="mb-7">
        <h2 className="text-xl font-bold text-gray-800 mb-2">Cookies</h2>
        <p className="text-gray-700 mb-2">
          Cookies are small files placed on your device to help us enhance your experience,
          analyze traffic patterns, and deliver more relevant content.
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li><strong>Necessary Cookies:</strong> Enable core site functionality and security.</li>
          <li><strong>Performance Cookies:</strong> Measure and improve site performance.</li>
          <li><strong>Functional Cookies:</strong> Remember your preferences and settings.</li>
        </ul>
      </section>

      {/* Contact */}
      <section id="contact">
        <h2 className="text-xl font-bold text-gray-800 mb-2">Contact</h2>
        <p className="text-gray-700">
          If you have questions about this Privacy Policy or your data, please contact our Data Protection Officer at{" "}
          <a className="text-blue-700 underline" href="mailto:privacy@mihu.com">
            privacy@mihu.com
          </a>.
        </p>
      </section>
    </div>
  </div>
);
