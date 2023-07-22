import React from "react";

const WebProject = ({ title, description, url }) => {
  return (
    <div className="web-project">
      <div className="flex items-center mb-4">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer"
        >
          <div className="website-preview overflow-hidden bg-gray-900 rounded-md aspect-w-16 aspect-h-9">
            <iframe
              src={url}
              title={title}
              className="w-full h-full border-0"
              style={{ transform: "scale(0.5)", transformOrigin: "top left" }}
            />
          </div>
        </a>
        <div className="ml-4">
          <h2 className="text-2xl font-bold text-gray-800 cursor-pointer">
            {title}
          </h2>
          <p className="text-gray-500 text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default WebProject;
