"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Nav() {
  const [showSocial, setShowSocial] = useState(false);

  const handleSocialClick = () => {
    setShowSocial(!showSocial);
  };

  return (
    <div className="bg-gradient-to-b from-[#55b3] to-[#55B3E6] text-white py-4 px-10 flex items-center justify-between sticky">
      <Link href="#">
        <div className="flex items-center">
          <div className="flex items-left flex-col">
            <h1 className="text-2xl font-bold mb-[-2] ">Adak</h1>
            <h1 className="text-2xl font-bold mt-[-1]">Haddad</h1>
          </div>
          <h1 className="text-4xl font-bold mx-1">&lt;&gt;</h1>
          <h1 className="text-2xl font-bold">Portfolio</h1>
        </div>
      </Link>

      <ul className="flex ml-6">
        <li className="mx-4">
          <Link href="#contact">
            <h1 className="hover:text-gray-300">Contact</h1>
          </Link>
        </li>
        <li className="mx-4">
          <a
            href="https://www.instagram.com/alhaddadmuqtada"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition-colors duration-300"
          >
            <FaInstagram />
          </a>
        </li>
        <li className="mx-4">
          <a
            href="https://www.linkedin.com/in/muhammad-muqtada-alhaddad-b02b44195/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition-colors duration-300"
          >
            <FaLinkedin />
          </a>
        </li>
        <li className="mx-4">
          <a
            href="https://github.com/AdakHaddad"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition-colors duration-300"
          >
            <FaGithub />
          </a>
        </li>
      </ul>
    </div>
  );
}
