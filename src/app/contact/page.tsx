import React from 'react';

const ContactPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-grow items-center justify-center">
        <div className="text-center">
          <header className="mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-12">
              Contact Us
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-400 mb-6">
              We’re here to assist you! Feel free to reach out with any questions or requests.
            </p>
          </header>
          <div className="space-y-6">
            <p className="text-lg sm:text-xl lg:text-2xl">
              You can also email us at{' '}
              <a href="mailto:contact@quadtree.ai" className="text-blue-400 hover:underline">
                contact@quadtree.ai
              </a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
