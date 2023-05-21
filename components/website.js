import React from "react";
import Image from "next/image";
export default function Website({ title, screenshotUrl, url }) {
  return (
    <div className="my-8 mx-8">
      <h2 className="text-3xl font-bold mb-4">My Project</h2>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="website-container relative hover:bg-gray-200 hover:shadow-lg transition duration-300 shadow-md"
      >
        <div className="website-screenshot mx-auto w-64 lg:w-96">
          <Image
            src={screenshotUrl}
            alt={title}
            width={800}
            height={600}
            className="w-full h-auto object-cover"
          />
          <div className="website-name p-2 absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white z-10">
            {title}
          </div>
        </div>
      </a>
    </div>
  );
}
