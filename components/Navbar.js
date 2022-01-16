import Link from "next/link";

import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/logo.png" width={50} height={50} />
      </div>
      <ul>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/climates/climatechoice">
          <a>Climates</a>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
