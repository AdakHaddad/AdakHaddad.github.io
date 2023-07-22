import Nav from "@/components/nav.js";
import WebsiteProject from "@/components/webProject.js";
import TODOS from "@/components/TodoKMTETI";
import Head from "next/head";

export default function Home() {
  const webProjects = [
    {
      title: "Bingka61",
      description: "Web project description",
      url: "https://bingke61.vercel.app",
    },
    // Add more web projects here
  ];

  return (
    <>
      <Head>
        <title>Your Home Page Title</title>
        <meta name="description" content="Your Home Page Description" />
      </Head>
      <Nav />
      <TODOS />
      {webProjects.map((project, index) => (
        <WebsiteProject
          key={index}
          title={project.title}
          description={project.description}
          url={project.url}
        />
      ))}
    </>
  );
}
