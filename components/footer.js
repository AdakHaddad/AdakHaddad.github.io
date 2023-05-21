import React, { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const composedMessage = `Email: ${email}\n\nMessage: ${message}`;
    // Send the composed message to muhammadmuqtada@gmail.com
    console.log(composedMessage);
    // You can replace the console.log with your email sending functionality
  };

  return (
    <footer className="bg-gray-800 text-white py-4 px-6">
      <h2 className="text-lg font-bold mb-2">
        Suarakan saran atau kritik anda
      </h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={handleEmailChange}
          className="bg-gray-700 text-white px-4 py-2 rounded-md mb-2"
          required
        />
        <textarea
          placeholder="Your Message"
          value={message}
          onChange={handleMessageChange}
          className="bg-gray-700 text-white px-4 py-2 rounded-md mb-2"
          rows="4"
          required
        ></textarea>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Send
        </button>
      </form>
      <p className="text-sm">© 2023 Your Website. All rights reserved.</p>
    </footer>
  );
}
