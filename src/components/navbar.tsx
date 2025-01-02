'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaInstagram, FaSearch, FaShoppingCart, FaBars, FaHeart } from 'react-icons/fa';
import CartBtn from './layout/Navbar/TopNavbar/CartBtn';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header>
      {/* Top Bar */}
      <div className="hidden md:flex justify-between items-center bg-gray-800 text-white text-sm px-6 py-2">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <FaPhone /> <span>+123 456 789</span>
          </div>
          <div className="flex items-center gap-1">
            <FaEnvelope /> <span>email@example.com</span>
          </div>
        </div>
        <div className="text-center">
          <span>Follow us and get a chance to win 80% off</span>
        </div>
        <div className="flex items-center gap-4">
          <FaFacebook className="cursor-pointer" />
          <FaTwitter className="cursor-pointer" />
          <FaInstagram className="cursor-pointer" />
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="flex justify-between items-center bg-white shadow-md px-6 py-4">
        {/* Logo */}
        <div className="text-2xl font-bold">Bandage</div>

        {/* Navigation Links (Hidden on Mobile) */}
        <div className="hidden md:flex items-center gap-6">
         <Link href={"./"}className="text-gray-700 hover:text-blue-500 mb-2">Home</Link>
          <div className="relative group">
            <Link href="./shop1" className="text-gray-700 hover:text-blue-500 flex items-center gap-1 pb-2">
              Shop
               <span>&#x25BC;</span>
            </Link>
            {/* <div className="absolute hidden group-hover:flex flex-col bg-white shadow-lg mt-2 p-2">
              <a href="#" className="px-4 py-2 hover:bg-gray-100">Category 1</a>
              <a href="#" className="px-4 py-2 hover:bg-gray-100">Category 2</a>
              <a href="#" className="px-4 py-2 hover:bg-gray-100">Category 3</a>
            </div> */}
          </div>
          
            
            <Link href={"./about"}className="text-gray-700 hover:text-blue-500 mb-2">About</Link>
            {/* <Link href={"./"}className="text-gray-700 hover:text-blue-500 mb-2">Blog</Link> */}
            <Link href={"./contact"}className="text-gray-700 hover:text-blue-500 mb-2">Contact</Link>

            <Link href={"./pages"}className="text-gray-700 hover:text-blue-500 mb-2">Pages</Link>
        </div>

        {/* Right Side Icons */}
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-6">
            <a href="#" className="text-gray-700 hover:text-blue-500">Login</a>
            <a href="#" className="text-gray-700 hover:text-blue-500">Register</a>
            <FaSearch className="cursor-pointer text-gray-700 hover:text-blue-500" />
            <CartBtn />
            {/* <FaShoppingCart className="cursor-pointer text-gray-700 hover:text-blue-500" /> */}
            <FaHeart className="cursor-pointer text-gray-700 hover:text-blue-500" />
          </div>

          {/* Hamburger Menu (Mobile) */}
          <div className="md:hidden">
            <FaBars
              className="cursor-pointer text-gray-700 text-2xl"
              onClick={() => setMenuOpen(!menuOpen)}
            />
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="flex flex-col items-center p-4">
          
            <Link href={"./"}className="text-gray-700 hover:text-blue-500 mb-2">Home</Link>
            <Link href={"./shop1"}className="text-gray-700 hover:text-blue-500 mb-2">Shop</Link>
            <Link href={"./about"}className="text-gray-700 hover:text-blue-500 mb-2">About</Link>
            {/* <Link href={"./"}className="text-gray-700 hover:text-blue-500 mb-2">Blog</Link> */}
            <Link href={"./contact"}className="text-gray-700 hover:text-blue-500 mb-2">Contact</Link>

            <Link href={"./pages"}className="text-gray-700 hover:text-blue-500 mb-2">Pages</Link>

        
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;


