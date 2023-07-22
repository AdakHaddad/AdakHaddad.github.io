import React from "react";

const WebProject = ({ title, description, url }) => {
  return (
    <div className="p-4 bg-gray-800">
      <div className="my-4 text-[30px] text-center font-bold text-[#55B3E6]">
        My Project
      </div>
      <div className="flex items-center mb-4 bg-gray-600 w-1/2 rounded-md ">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer"
          alt={url}
        >
          <div className="website-preview overflow-hidden bg-gray-900 rounded-l-md  aspect-auto">
            <iframe
              src={url}
              title={title}
              className="w-full h-full border-0"
              style={{}}
            />
          </div>
        </a>
        <div className="ml-4">
          <h2 className="text-2xl font-bold text-[#55B3E6] cursor-pointer">
            {title}
          </h2>
          <p className=" text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default WebProject;
