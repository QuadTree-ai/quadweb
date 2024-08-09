// src/app/contact/page.tsx

import React from 'react';

const ContactPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6">
            Contact Us
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-400 mb-6">
            We're here to help! Feel free to reach out to us for any inquiries or support.
          </p>
        </header>
        <div className="text-center">
          <p className="text-lg sm:text-xl lg:text-2xl mb-4">
            For general inquiries, please visit{' '}
            <a href="https://x.com/quadtreeai/" className="text-blue-400 hover:underline">
              x.com
            </a>
            .
          </p>
          <p className="text-lg sm:text-xl lg:text-2xl">
            You can also email us at{' '}
            <a href="mailto:contact@quadtree.ai" className="text-blue-400 hover:underline">
              contact@quadtree.ai
            </a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
