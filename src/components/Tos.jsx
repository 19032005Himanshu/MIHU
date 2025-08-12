import React from "react";

const TermsOfServicePage = () => {
  return (
    <div className="min-h-screen bg-white flex justify-center px-4 py-10 sm:px-8">
      <div className="max-w-3xl w-full rounded-xl shadow-md border border-gray-200 p-10">
        {/* Table of Contents */}
        <nav className="border-b pb-4 mb-8 flex flex-wrap gap-5 text-sm text-gray-600">
          <a href="#overview" className="hover:text-blue-700">Overview</a>
          <a href="#acceptance" className="hover:text-blue-700">Acceptance of Terms</a>
          <a href="#accounts" className="hover:text-blue-700">User Accounts</a>
          <a href="#use" className="hover:text-blue-700">Permitted Use</a>
          <a href="#prohibited" className="hover:text-blue-700">Prohibited Activities</a>
          <a href="#intellectual" className="hover:text-blue-700">Intellectual Property</a>
          <a href="#termination" className="hover:text-blue-700">Termination</a>
          <a href="#liability" className="hover:text-blue-700">Limitation of Liability</a>
          <a href="#governing" className="hover:text-blue-700">Governing Law</a>
          <a href="#changes" className="hover:text-blue-700">Policy Changes</a>
          <a href="#contact" className="hover:text-blue-700">Contact</a>
        </nav>

        {/* Overview */}
        <div id="overview" className="mb-8 bg-blue-50 rounded-lg p-5 border-l-4 border-blue-600">
          <span className="font-semibold text-lg text-blue-800">Last Updated: Aug 9, 2025</span>
          <p className="text-gray-700 mt-2">
            Welcome to Mihu. These Terms of Service outline the rules and regulations for the use of our platform and services. By accessing our website, app, or services, you agree to comply with and be bound by these terms.
          </p>
        </div>

        {/* Acceptance of Terms */}
        <section id="acceptance" className="mb-7">
          <h2 className="text-xl font-bold text-gray-800 mb-2">Acceptance of Terms</h2>
          <p className="text-gray-700">
            By registering, accessing, or using any part of the Mihu platform, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service, as well as our Privacy Policy and other applicable policies.
          </p>
        </section>

        {/* User Accounts */}
        <section id="accounts" className="mb-7">
          <h2 className="text-xl font-bold text-gray-800 mb-2">User Accounts</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>You may need to create an account to access certain features.</li>
            <li>You are responsible for maintaining the confidentiality of your login credentials.</li>
            <li>Notify us immediately of any unauthorized use of your account.</li>
          </ul>
        </section>

        {/* Permitted Use */}
        <section id="use" className="mb-7">
          <h2 className="text-xl font-bold text-gray-800 mb-2">Permitted Use</h2>
          <p className="text-gray-700 mb-2">
            You may use our platform only for lawful purposes and in accordance with these Terms. This includes:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>Accessing the platform for personal or authorized business use.</li>
            <li>Complying with all applicable local, national, and international laws.</li>
          </ul>
        </section>

        {/* Prohibited Activities */}
        <section id="prohibited" className="mb-7">
          <h2 className="text-xl font-bold text-gray-800 mb-2">Prohibited Activities</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>Uploading or sharing unlawful, harmful, or offensive content.</li>
            <li>Attempting to gain unauthorized access to our systems or user accounts.</li>
            <li>Impersonating another person or misrepresenting affiliation.</li>
            <li>Engaging in activities that compromise platform security or integrity.</li>
          </ul>
        </section>

        {/* Intellectual Property */}
        <section id="intellectual" className="mb-7">
          <h2 className="text-xl font-bold text-gray-800 mb-2">Intellectual Property</h2>
          <p className="text-gray-700">
            All content, trademarks, logos, and data on the Mihu platform are the property of Mihu or its licensors. Unauthorized use, reproduction, or distribution is strictly prohibited.
          </p>
        </section>

        {/* Termination */}
        <section id="termination" className="mb-7">
          <h2 className="text-xl font-bold text-gray-800 mb-2">Termination</h2>
          <p className="text-gray-700">
            We reserve the right to suspend or terminate your access to the platform at our sole discretion, without prior notice, for any conduct that we believe violates these Terms or is otherwise harmful.
          </p>
        </section>

        {/* Limitation of Liability */}
        <section id="liability" className="mb-7">
          <h2 className="text-xl font-bold text-gray-800 mb-2">Limitation of Liability</h2>
          <p className="text-gray-700">
            To the extent permitted by law, Mihu and its affiliates are not liable for any indirect, incidental, special, or consequential damages resulting from your use of the platform.
          </p>
        </section>

        {/* Governing Law */}
        <section id="governing" className="mb-7">
          <h2 className="text-xl font-bold text-gray-800 mb-2">Governing Law</h2>
          <p className="text-gray-700">
            These Terms shall be governed by and construed in accordance with the laws of your jurisdiction, without regard to its conflict of law provisions.
          </p>
        </section>

        {/* Changes */}
        <section id="changes" className="mb-7">
          <h2 className="text-xl font-bold text-gray-800 mb-2">Policy Changes</h2>
          <p className="text-gray-700">
            We may update these Terms of Service periodically. Any changes will be posted on this page with an updated date.
          </p>
        </section>

        {/* Contact */}
        <section id="contact">
          <h2 className="text-xl font-bold text-gray-800 mb-2">Contact</h2>
          <p className="text-gray-700">
            For any questions or concerns regarding these Terms, please contact us at{" "}
            <a className="text-blue-700 underline" href="mailto:support@mihu.com">
              support@mihu.com
            </a>.
          </p>
        </section>

      </div>
    </div>
  );
};

export default TermsOfServicePage;
