import Nav from "@/components/nav";
import { useState, useEffect } from "react";
import Head from "next/head";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <Head>
        <title>AdakHaddad</title>
        <meta
          name="description"
          content="Muhammad Muqtada Alhaddad Portfolio"
        />
        <Nav />
      </Head>
      <section className=" text-white py-16 text-center">
        <div className="flex-col max-w-lg mx-auto">
          <h1 className="text-8xl md:text-5xl font-bold ">
            Hey there,
            <span className="text-yellow-500">
              I'm Muhammad Muqtada Alhaddad
            </span>
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            A passionate developer and creative thinker with a love for building
            meaningful web experiences.
          </p>
          <p className="mt-6 text-lg md:text-xl">
            Let's turn your ideas into reality.
          </p>
        </div>
      </section>

      <section className="py-16 text-center">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-white">Past Projects</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              className={`bg-white rounded-lg p-6 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8 transform transition-all duration-1000"
              }`}
            >
              <a
                href="bingke61.vercel.app"
                alt="Bingke 61 Website"
                className="text-2xl font-semibold text-blue-500 hover:underline"
              >
                Bingke 61
                <p className="mt-4 text-gray-600">
                  Design a simple order page for Bingke 61 cake shop
                </p>
              </a>
            </div>
            <div
              className={`bg-white rounded-lg p-6 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8 transform transition-all duration-1000"
              }`}
            >
              <a
                href="konekteti22.web.app"
                alt="KPU KMTETI 2022 Lead Election Website"
                className="text-2xl font-semibold text-blue-500 hover:underline"
              >
                Konekteti
                <p className="mt-4 text-gray-600">
                  Deploying an election mechanism with Firebase Hosting.
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
