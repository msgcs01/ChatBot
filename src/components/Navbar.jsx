import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-500 to-indigo-600 p-4 shadow-lg text-white flex justify-between items-center px-6">
      <div className="text-2xl font-extrabold tracking-wide">Brand</div>
      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>☰</button>
      <ul className={`md:flex space-x-6 text-lg ${isOpen ? "block" : "hidden"} absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto bg-blue-500 md:bg-transparent p-4 md:p-0 shadow-md md:shadow-none`}>
        <li><a href="/" className="block py-2 md:inline hover:text-gray-300 transition">Home</a></li>
        <li><a href="/chatbot" className="block py-2 md:inline hover:text-gray-300 transition">Chatbot</a></li>
        <li><a href="/login" className="block py-2 md:inline hover:text-gray-300 transition">Login</a></li>
        <li><a href="/register" className="block py-2 md:inline hover:text-gray-300 transition">Register</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
