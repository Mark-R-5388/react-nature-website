import Head from "next/head";
import Background from "../public/backgrounds/about-background.jpg";

const About = () => {
  return (
    <>
      <Head>
        <title>Nature Site | About</title>
      </Head>

      <main className="container">
        <img className="main-image" src={Background.src} alt="white clouds" />
        <div className="content-container">
          <h1>About Page</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse id
            cumque iste, magni aspernatur voluptatem odit nisi minima modi
            deserunt, blanditiis officiis! Atque provident esse, minima mollitia
            temporibus accusamus expedita?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            provident veritatis eveniet similique, minus possimus quas. Hic
            placeat fugit sunt!
          </p>
        </div>
      </main>
    </>
  );
};

export default About;
