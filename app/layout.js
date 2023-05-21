export const metadata = {
  title: "Adak Haddad",
  description: "Adak Website",
};
import Head from "next/head";

export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={metadata.description} />
        <title>{metadata.title}</title>
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=optional"
          rel="stylesheet"
        />
        <link href="../public/Assets/Fonts/Poppins" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
    </>
  );
}
