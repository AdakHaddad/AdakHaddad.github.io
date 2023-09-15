import Head from "next/head";
import Nav from "@/components/nav";

export default function Home() {
  return (
    <>
      <Head>
        <title>AdakHaddad</title>
        <meta
          name="description"
          content="Muhammad Muqtada Alhaddad Portfolio"
        />
      </Head>
      <Nav />
      <section className="text-white py-10 px-4 md:py-16 md:px-0 text-center">
        <div className="flex flex-col items-center max-w-lg mx-auto">
          <h1 className="text-5xl md:text-8xl font-bold leading-tight">
            Hey there,
            <span className="text-yellow-500">
              I&apos;m Muhammad Muqtada Alhaddad
            </span>
          </h1>
          <p className="mt-4 text-base md:text-lg">
            A passionate developer and creative thinker with a love for building
            meaningful web experiences.
          </p>
          <p className="mt-6 text-base md:text-lg">
            Let&apos;s turn your ideas into reality.
          </p>
        </div>
      </section>

      <section className="py-10 px-4 md:py-16 md:px-0 text-center">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-white">
            Past Projects
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6">
              <a
                href="https://bingke61.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-semibold text-blue-500 hover:underline"
              >
                Bingke 61
                <p className="mt-4 text-gray-600">
                  Design a simple order page for Bingke 61 cake shop
                </p>
              </a>
            </div>
            <div className="bg-white rounded-lg p-6">
              <a
                href="https://konekteti22.web.app"
                target="_blank"
                rel="noopener noreferrer"
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
    </>
  );
}
