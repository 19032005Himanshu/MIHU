import React from "react";

const RefundPolicyPage = () => {
  return (
    <div className="min-h-screen bg-white flex justify-center px-4 py-10 sm:px-8">
      <div className="max-w-3xl w-full rounded-xl shadow-md border border-gray-200 p-10">
        {/* Table of Contents */}
        <nav className="border-b pb-4 mb-8 flex flex-wrap gap-5 text-sm text-gray-600">
          <a href="#overview" className="hover:text-blue-700">Overview</a>
          <a href="#eligibility" className="hover:text-blue-700">Eligibility for Refunds</a>
          <a href="#process" className="hover:text-blue-700">Refund Process</a>
          <a href="#exemptions" className="hover:text-blue-700">Non-Refundable Items</a>
          <a href="#timelines" className="hover:text-blue-700">Refund Timelines</a>
          <a href="#mode" className="hover:text-blue-700">Mode of Refund</a>
          <a href="#changes" className="hover:text-blue-700">Policy Changes</a>
          <a href="#contact" className="hover:text-blue-700">Contact</a>
        </nav>

        {/* Overview */}
        <div id="overview" className="mb-8 bg-blue-50 rounded-lg p-5 border-l-4 border-blue-600">
          <span className="font-semibold text-lg text-blue-800">
            Last Updated: Aug 9, 2025
          </span>
          <p className="text-gray-700 mt-2">
            This Refund Policy outlines the conditions under which Mihu processes refunds for its products and services.
            We are committed to fair business practices and transparency. Please read this policy before making a purchase.
          </p>
        </div>

        {/* Eligibility */}
        <section id="eligibility" className="mb-7">
          <h2 className="text-xl font-bold text-gray-800 mb-2">Eligibility for Refunds</h2>
          <p className="text-gray-700 mb-2">Refunds are applicable in the following cases:</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>Incorrect charges due to a technical fault.</li>
            <li>Undelivered service or product.</li>
            <li>Damaged or defective product upon arrival.</li>
            <li>Order canceled within the allowed time.</li>
          </ul>
        </section>

        {/* Refund Process */}
        <section id="process" className="mb-7">
          <h2 className="text-xl font-bold text-gray-800 mb-2">Refund Process</h2>
          <p className="text-gray-700 mb-2">Follow these steps to request a refund:</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>Contact us at <a href="mailto:refunds@mihu.com" className="text-blue-700 underline">refunds@mihu.com</a>.</li>
            <li>Provide your order ID, payment proof, and reason.</li>
            <li>Our team will review your request and confirm eligibility.</li>
          </ul>
        </section>

        {/* Non-Refundable Items */}
        <section id="exemptions" className="mb-7">
          <h2 className="text-xl font-bold text-gray-800 mb-2">Non-Refundable Items</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>Downloaded or accessed digital products.</li>
            <li>Gift cards and promotional vouchers.</li>
            <li>Customized products.</li>
            <li>Services fully rendered.</li>
          </ul>
        </section>

        {/* Timelines */}
        <section id="timelines" className="mb-7">
          <h2 className="text-xl font-bold text-gray-800 mb-2">Refund Timelines</h2>
          <p className="text-gray-700">
            Approved refunds are processed within 5–10 business days.
            Actual time for funds to appear depends on your bank/payment provider.
          </p>
        </section>

        {/* Mode of Refund */}
        <section id="mode" className="mb-7">
          <h2 className="text-xl font-bold text-gray-800 mb-2">Mode of Refund</h2>
          <p className="text-gray-700">
            Refunds are credited to the original payment method unless otherwise agreed.
          </p>
        </section>

        {/* Changes */}
        <section id="changes" className="mb-7">
          <h2 className="text-xl font-bold text-gray-800 mb-2">Policy Changes</h2>
          <p className="text-gray-700">
            Mihu may update this Refund Policy to reflect changes in services, pricing, or legal requirements.
          </p>
        </section>

        {/* Contact */}
        <section id="contact">
          <h2 className="text-xl font-bold text-gray-800 mb-2">Contact</h2>
          <p className="text-gray-700">
            For queries regarding this Refund Policy, contact{" "}
            <a href="mailto:refunds@mihu.com" className="text-blue-700 underline">
              refunds@mihu.com
            </a>.
          </p>
        </section>
      </div>
    </div>
  );
};

export default RefundPolicyPage;
