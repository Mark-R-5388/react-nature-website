import Grid from "../../components/Grid";
import photo1 from "../../public/desert/desert1.jpg";
import photo2 from "../../public/desert/desert2.jpg";
import photo3 from "../../public/desert/desert3.jpg";
import photo4 from "../../public/desert/desert4.jpg";

const Desert = () => {
  return (
    <main>
      <h1>Desert Page</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum quo
        praesentium vitae maiores illum, laboriosam recusandae dolorum quam nam
        molestiae!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa magni
        cupiditate quibusdam? Obcaecati, consequatur dolore?
      </p>

      <Grid photo1={photo1} photo2={photo2} photo3={photo3} photo4={photo4} />
    </main>
  );
};

export default Desert;
