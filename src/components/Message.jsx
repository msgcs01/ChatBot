import React from "react";

const Message = ({ text, sender }) => {
  return (
    <div
      className={`flex ${sender === "bot" ? "justify-start" : "justify-end"}`}
    >
      <div
        className={`max-w-lg p-4 rounded-xl text-sm ${
          sender === "bot"
            ? "bg-gray-200 text-gray-800"
            : "bg-blue-600 text-white"
        }`}
      >
        {text}
      </div>
    </div>
  );
};

export default Message;
