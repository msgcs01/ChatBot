import React from "react";

const Testimonials = () => (
  <section id="testimonials" className="py-24 text-center bg-gray-100">
    <h2 className="text-4xl font-bold text-gray-800 mb-8">What Our Clients Say</h2>
    <div className="flex flex-wrap justify-center gap-8">
      {["Harshal Dokne", "Snehal"].map((name, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-xl max-w-xs border border-gray-200">
          <p className="text-lg italic">"Amazing service! Highly recommend."</p>
          <span className="block mt-4 font-semibold text-gray-700">- {name}</span>
        </div>
      ))}
    </div>
  </section>
);

export default Testimonials;
// Compare this snippet from src/components/Contact.jsx: