import Link from "next/link";

import Head from "next/head";
import jungleMain from "../../public/jungle/jungle-main.jpg";
import desertMain from "../../public/desert/desert-main.jpg";
import oceanMain from "../../public/ocean/ocean-main.jpg";
import snowMain from "../../public/snow/snow-main.jpg";

const Climate = () => {
  return (
    <>
      <Head>
        <title>Nature Site | Climates</title>
      </Head>
      <main className="climate-container">
        <h1>Climate Page</h1>
        <p>Click a climate to go to its page</p>

        <ul className="climate_links">
          <Link href="/climates/jungle">
            <a className="climate_link_item">
              <span>Jungle</span>
              <img src={jungleMain.src} alt="main jungle" />
            </a>
          </Link>
          <Link href="/climates/desert">
            <a className="climate_link_item">
              <span>desert</span>
              <img src={desertMain.src} alt="main desert" />
            </a>
          </Link>
          <Link href="/climates/ocean">
            <a className="climate_link_item">
              <span>ocean</span>
              <img src={oceanMain.src} alt="main ocean" />
            </a>
          </Link>
          <Link href="/climates/snow">
            <a className="climate_link_item">
              <span>snow</span>
              <img src={snowMain.src} alt="main snow" />
            </a>
          </Link>
        </ul>
      </main>
    </>
  );
};

export default Climate;
