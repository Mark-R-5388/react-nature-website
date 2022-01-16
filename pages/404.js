import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);

  return (
    <div className="not_found">
      <h1>Oooooops....</h1>
      <h2>That page is not found</h2>
      <p>You Will be redirected to the homepage</p>
    </div>
  );
};

export default NotFound;
