import Grid from "../../components/Grid";
import photo1 from "../../public/jungle/jungle1.jpg";
import photo2 from "../../public/jungle/jungle2.jpg";
import photo3 from "../../public/jungle/jungle3.jpg";
import photo4 from "../../public/jungle/jungle4.jpg";

const Jungle = () => {
  return (
    <div>
      <h1>Jungle Page</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti vel
        saepe suscipit, alias vitae sapiente perferendis repellat! Ut, iusto
        porro.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur iure
        veritatis quidem. Rem, beatae iste!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
        sapiente?
      </p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, nemo.</p>
      <Grid photo1={photo1} photo2={photo2} photo3={photo3} photo4={photo4} />
    </div>
  );
};

export default Jungle;
