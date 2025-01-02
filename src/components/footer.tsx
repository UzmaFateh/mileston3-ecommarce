import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" text-gray-950 py-10 px-6 ">
        <div  className='flex justify-between w-[100%] h-[150px]  my-10 bg-[#FAFAFA]'>
            <div>
                <h1 className='text-2xl py-[60px] px-[70px] font-bold'>Bandage</h1></div>
                <hr />
            <div className='flex gap-4 py-[60px] px-[70px] text-2xl text-blue-500'>
                <span><FaFacebook /></span>
                <span><FaInstagram /></span>
                <span><FaTwitter /></span>
            </div>
        </div>
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Legal Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">Legal</h3>
          <ul>
            <li className='pt-4'><a href="#" className="hover:text-gold">About Us</a></li>
            <li className='pt-4'><a href="#" className="hover:text-gold">Carrier</a></li>
            <li className='pt-4'><a href="#" className="hover:text-gold">We Are Hiring</a></li>
            <li className='pt-4'><a href="#" className="hover:text-gold">Blog</a></li>
          </ul>
        </div>

        {/* Features Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">Features</h3>
          <ul>
            <li className='pt-4'><a href="#" className="hover:text-gold">Business Marketing</a></li>
            <li className='pt-4'><a href="#" className="hover:text-gold">User Analytics</a></li>
            <li className='pt-4'><a href="#" className="hover:text-gold">Live Chat</a></li>
            <li className='pt-4'><a href="#" className="hover:text-gold">Unlimited Support</a></li>
          </ul>
        </div>

        {/* Resources Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">Resources</h3>
          <ul>
            <li className='pt-4'><a href="#" className="hover:text-gold">iOS & Android</a></li>
            <li className='pt-4'><a href="#" className="hover:text-gold">Watch a Demo</a></li>
            <li className='pt-4'><a href="#" className="hover:text-gold">Customers</a></li>
            <li className='pt-4'><a href="#" className="hover:text-gold">API</a></li>
          </ul>
        </div>

        {/* Get In Touch Section */}
        <div>
          <h3 className="text-xl font-bold mb-4 pt-4">Get In Touch</h3>
          <div className="flex flex-col sm:flex-row items-center">
            <input
              type="email"
              placeholder="Your email"
              className="pl-4 py-2 pt-2 mb-4 sm:mb-0  bg-gray-100 text-gray-400 border border-gray-200 "
            />
            <button className=" py-2 pt-2 px-2 bg-blue-400 text-white  hover:bg-gold-dark">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-600 mt-8 pt-4 ">
        <p className='h-[60px] bg-gray-50 pt-4 pl-4 -mb-32'>Made with Love by Finland. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;