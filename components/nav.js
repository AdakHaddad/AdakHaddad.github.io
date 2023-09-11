import React, { useState } from "react";
import Link from "next/link";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Nav() {
  const [showSocial, setShowSocial] = useState(false);

  const handleSocialClick = () => {
    setShowSocial(!showSocial);
  };

  return (
    <nav className="bg-black bg-opacity-10 text-white py-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/">
          <div className="text-3xl font-bold flex items-center space-x-2">
            <span className="text-yellow-500">Adak</span>
            <span>Haddad</span>
            <span className="text-4xl font-bold">&lt;&gt;</span>
            <span>Portfolio</span>
          </div>
        </Link>

        <ul className="flex space-x-6">
          <li>
            <a
              href="https://www.instagram.com/alhaddadmuqtada"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg hover:text-blue-500 transition-colors duration-300"
            >
              <FaInstagram />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/muhammad-muqtada-alhaddad-b02b44195/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg hover:text-blue-500 transition-colors duration-300"
            >
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/AdakHaddad"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg hover:text-blue-500 transition-colors duration-300"
            >
              <FaGithub />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
