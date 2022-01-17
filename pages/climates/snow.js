import Grid from "../../components/Grid";
import photo1 from "../../public/snow/snow2.jpg";
import photo2 from "../../public/snow/snow-1.jpg";
import photo3 from "../../public/snow/snow3.jpg";
import photo4 from "../../public/snow/snow4.jpg";

const Snow = () => {
  return (
    <div>
      <h1>Snow Page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit distinctio
        dolorem incidunt qui eum quam in maxime, dicta molestias officiis.
      </p>
      <Grid photo1={photo1} photo2={photo2} photo3={photo3} photo4={photo4} />
    </div>
  );
};

export default Snow;
