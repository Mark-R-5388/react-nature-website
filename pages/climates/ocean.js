import Grid from "../../components/Grid";
import photo1 from "../../public/ocean/ocean1.jpg";
import photo2 from "../../public/ocean/ocean2.jpg";
import photo3 from "../../public/ocean/ocean3.jpg";
import photo4 from "../../public/ocean/ocean4.jpg";

const Ocean = () => {
  return (
    <div>
      <h1>Ocean Page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione in
        laudantium ducimus numquam minus? Aspernatur perferendis voluptas
        similique. Aut, quo.
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni quaerat
        ex consequuntur odio corrupti blanditiis.
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, ipsam?
      </p>
      <Grid photo1={photo1} photo2={photo2} photo3={photo3} photo4={photo4} />
    </div>
  );
};

export default Ocean;
