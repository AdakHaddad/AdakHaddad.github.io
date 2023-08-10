import Nav from "@/components/nav";
import styles from "@/styles/Home.module.css";
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
    <>
      <Head>
        <title>AdakHaddad</title>
        <meta
          name="description"
          content="Muhammad Muqtada Alhaddad Portfolio"
        />
        <Nav />
      </Head>

      <div className=" flex-col text-center justify-center space-y-4 my-10">
        <h1 className="text-4xl  text-blue-500">Hello!</h1>
        <h1 className=" text-lg">🦚⛵ Dahulu 🏊‍♀️🏊‍♀️ Kemudian ;{")"}</h1>
        <h1 className="text-sm text-gray mt-60">🌠Scroll for More...🌠</h1>
      </div>

      <div className={styles.container}>
        <h1 className=" text-4xl">Past Project</h1>
        <div className={styles.cardContainer}>
          <div className={`${styles.card} ${isVisible ? styles.fadeIn : ""}`}>
            <a href="bingke61.vercel.app" alt="Bingke 61 Website">
              Bingke 61
            </a>
            <p>Design a simple order page for Bingke 61 cake shop </p>
          </div>
          <div className={`${styles.card} ${isVisible ? styles.fadeIn : ""}`}>
            <a href="">Konekteti</a>
            <p>Deploying an election mechanism with Firebase Hosting.</p>
          </div>
          {/* Add more cards */}
        </div>
      </div>
    </>
  );
}
