import Nav from "@/components/nav.js";
import Website from "@/components/website.js";
import TODOS from "@/components/TodoKMTETI";

// import TicTacToe from "@/components/tictactoe";
// import Footer from "@/components/footer";
export default function Home() {
  return (
    <div>
      <Nav />
      <TODOS />
      <Website
        title="Bingka61"
        screenshotUrl="https://i.ibb.co/XsBgK9z/bingka61-vercel-app.png"
        url="https://bingka61.vercel.app"
      />
      {/* Minus fitur upload website project dengan autentikasi (tanpa edit source code) */}
      {/* <Footer /> */}
      {/* <TicTacToe /> */}
    </div>
  );
}
