import Head from "next/head";
import Background from "../public/backgrounds/homepage-background.jpg";
export default function Home() {
  console.log(Background);
  return (
    <>
      <Head>
        <title>Nature Site | Home</title>
      </Head>
      <main className="container">
        <img className="main-image" src={Background.src} alt="white clouds" />
        <div className="content-container">
          <h1>Nature Homepage</h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ea
            consequuntur molestias officiis voluptatum, deleniti perspiciatis!
            Vel aperiam tempore libero atque voluptate voluptatem dicta
            doloremque? Dignissimos, deserunt. Velit, quidem ipsa.
          </p>
        </div>
      </main>
    </>
  );
}
