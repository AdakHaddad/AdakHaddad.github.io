import React from "react";

const WebsitePreview = ({ title, url }) => {
  return (
    <div className="bg-white rounded-lg hover:bg-slate-100">
      <div className="iframe-container">
        <iframe
          title={title}
          src={url}
          style={{
            border: "none",
            overflow: "hidden",
            width: "100%",
            height: "50vh",
          }}
        ></iframe>
      </div>
    </div>
  );
};

const Web = () => {
  const websites = [
    { title: "Konekteti", url: "https://konekteti22.web.app" },
    { title: "Bingke 61", url: "https://bingke61.vercel.app" },
    { title: "Al-amin Yogyakarta", url: "https://alaminyk.vercel.app" },
  ];

  const descriptions = [
    "Deploying an election mechanism with Firebase Hosting",
    "Designed a simple order page for Bingke 61 cake shop",
    "Designed organization profile page",
  ];

  const websiteDescriptionPairs = websites.map((website, index) => {
    const description = descriptions[index];
    const isLeftAligned = index % 2 === 0;

    return (
      <div
        key={index}
        className={`flex ${
          isLeftAligned ? "flex-row" : "flex-row-reverse"
        } items-center justify-between bg-black py-8 gap-10 bg-opacity-50`}
      >
        <div className="w-1/2 ">
          <WebsitePreview title={website.title} url={website.url} />
        </div>
        <div
          className={`w-1/2 px-6 ${
            index % 2 === 0 ? "text-right" : "text-left"
          } text-gray-600`}
        >
          <p className="font-bold text-2xl mb-2 text-white">{website.title}</p>
          <p className="text-lg text-white">{description}</p>
        </div>
      </div>
    );
  });

  return (
    <div>
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-white">
        Past Projects
      </h1>
      <div className="grid grid-cols-1  relative">
        {websiteDescriptionPairs}
      </div>
    </div>
  );
};

export default Web;
