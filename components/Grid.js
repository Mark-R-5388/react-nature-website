const Grid = ({ photo1, photo2, photo3, photo4 }) => {
  return (
    <div className="grid_container">
      <img className="grid_item_1" src={photo1.src} alt="photo1" />
      <img className="grid_item_2" src={photo2.src} alt="photo2" />
      <img className="grid_item_3" src={photo3.src} alt="photo3" />
      <img className="grid_item_4" src={photo4.src} alt="photo4" />
    </div>
  );
};

export default Grid;
