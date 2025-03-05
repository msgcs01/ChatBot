import React from "react";

const Services = () => (
  <section id="services" className="py-24 text-center bg-white">
    <h2 className="text-4xl font-bold text-gray-800 mb-8">Our Services</h2>
    <div className="flex flex-wrap justify-center gap-8">
      {[
        { id: 1, title: "AI-Powered Chatbot", description: "An intelligent chatbot to assist students with learning queries." },
        { id: 2, title: "Interactive Learning", description: "Engage with interactive quizzes, flashcards, and study materials." },
        { id: 3, title: "24/7 Assistance", description: "Get instant help from the chatbot anytime, anywhere." }
      ].map((service) => (
        <div key={service.id} className="max-w-xs p-6 bg-gray-100 rounded-lg shadow-md">
          <h3 className="text-xl font-bold">{service.title}</h3>
          <p className="mt-2">{service.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Services;