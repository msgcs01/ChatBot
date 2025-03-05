import React, { useState } from "react";
import Message from "./Message";

const ChatMain = () => {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I assist you today?", sender: "bot" },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const handleSend = () => {
    if (newMessage.trim() !== "") {
      setMessages([
        ...messages,
        { text: newMessage, sender: "user" },
        { text: "This is a bot response", sender: "bot" },
      ]);
      setNewMessage("");
    }
  };

  return (
    <div className="flex h-screen justify-center bg-gray-100">
      <div className="w-full max-w-2xl p-4 bg-white rounded-2xl shadow-lg mt-8">
        <div className="h-[80vh] overflow-y-auto p-4 space-y-4">
          {messages.map((message, index) => (
            <Message key={index} text={message.text} sender={message.sender} />
          ))}
        </div>

        <div className="flex items-center space-x-2 mt-4">
          <input
            type="text"
            className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Type a message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <button
            onClick={handleSend}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatMain;
