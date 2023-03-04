import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
// import { FaQuoteLeft } from 'react-icons/fa';

const Aboutus = () => {
  return (
    <div style={{ maxWidth: '1550px', margin: '0 auto' }}  className='bg-[#000300]'>
    <Navbar />
    <div className="container mx-auto px-4 py-16 bg-white">
      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
          <div className="rounded-lg overflow-hidden">
            <img src='/images/manish.jpg' alt="Team member" />
            <div className="p-6">
              <h3 className="text-lg font-medium mb-2">Manish Thapaliya</h3>
              <p className="text-gray-600 mb-4">Founder</p>
              <p className="text-gray-600 leading-relaxed mb-4">
              As a founder of Hamrowakil, I am proud to have been a part of creating a platform that bridges the gap between lawyers and clients. Our goal has always been to provide a seamless experience for both parties, and we have achieved this through the use of modern technology and innovative features.
              </p>
              <div className="flex items-center">
                {/* <FaQuoteLeft size={20} className="text-gray-400 mr-2" /> */}
                <p className="text-sm font-medium text-gray-600">We believe in pushing boundaries and exceeding expectations.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
          <div className="rounded-lg overflow-hidden">
          <img src='/images/pradeep.jpg' alt="Team member" />
            <div className="p-6">
              <h3 className="text-lg font-medium mb-2">Pradeep Karki</h3>
              <p className="text-gray-600 mb-4">Founder</p>
              <p className="text-gray-600 leading-relaxed mb-4">
              It has been an incredible journey building Hamrowakil alongside my fellow founders. Our shared vision of making legal services more accessible and convenient for everyone has been the driving force behind this project. I am excited to see where this platform takes us in the future.
              </p>
              <div className="flex items-center">
                {/* <FaQuoteLeft size={20} className="text-gray-400 mr-2" /> */}
                <p className="text-sm font-medium text-gray-600">What we do is more than just a job. It's a passion.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
          <div className="rounded-lg overflow-hidden">
          <img src='/images/anuj.jpg' alt="Team member" />
            <div className="p-6">
              <h3 className="text-lg font-medium mb-2">Anuj Puri</h3>
              <p className="text-gray-600 mb-4">Founder</p>
              <p className="text-gray-600 leading-relaxed mb-4">
              Hamrowakil is more than just a legal services platform to me, it is a means to empower individuals by giving them access to quality legal counsel. I look forward to seeing the positive impact that Hamrowakil has on our clients and the legal industry as a whole.
              </p>
              <div className="flex items-center">
                {/* <FaQuoteLeft size={20} className="text-gray-400 mr-2" /> */}
                <p className="text-sm font-medium text-gray-600">We are dedicated to delivering the best customer experience possible.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </div>
  );
}

export default Aboutus;