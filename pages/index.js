import React from "react";
import Head from "next/head";
import Nav from "@/components/nav";
import Typewriter from "typewriter-effect";
import Web from "@/components/web";
export default function Home() {
  return (
    <>
      <Head>
        <title>AdakHaddad</title>
        <meta
          name="description"
          content="Muhammad Muqtada Alhaddad's Portfolio"
        />
      </Head>
      <Nav />
      <section className="mb-30 text-white py-10 px-1 md:py-16 md:px-0 text-center">
        <div className="flex flex-col items-center max-w-7xl mx-auto ">
          <span className=" text-3xl md:text-6xl font-bold ">
            <Typewriter
              options={{
                strings: [
                  `Hey There👋`,
                  `I'm Muhammad Muqtada Alhaddad`,
                  `Long Life Student📚`,
                  `Tech Enthusiast🤖`,
                ],
                speed: 5,
                deleteSpeed: 5,
                loop: true,
                autoStart: true,
              }}
            />
          </span>
        </div>
      </section>
      <section className=" py-10 px-4 md:py-16 md:px-0 text-center bg-slate-950 bg-opacity-10 rounded-md ">
        <Web />
      </section>
      <section className="py-10 px-4 md:py-16 md:px-0 text-left">
        <div className="container mx-auto grid flex-row">
          <div className="flex items-center">
            <img
              src="/Assets/spark.gif"
              alt="SparkAR"
              width="12%"
              className="fade-in rounded-xl "
            />
            <div className="ml-4  px-4 md:py-16 font-bold md:px-4 bg-white rounded-lg">
              <h1 className="text-3xl md:text-4xl  text-teal-300">SparkAR</h1>
              <p>I also created filter on Instagram too 😎</p>
            </div>
            <img
              src="/Assets/SparkAR.png"
              alt="SparkAR"
              width="50%"
              className="place-items-end"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="p-4 md:py-16 md:px-4 font-bold  place-items-center flex gap-2  text-white bg-slate-950 bg-opacity-10 rounded-md">
          <p className=" text-lg">
            You can see my CV and certifications on this
          </p>
          <a
            href="https://drive.google.com/drive/folders/1o25A-zP3hmc919RxK0gSwIaVrmPYOnlD?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="hover:bg-white p-1 bg-teal-300 hover:text-teal-300 text-white rounded w-fit ">
              Google Drive
            </div>
          </a>
        </div>
      </section>
    </>
  );
}
