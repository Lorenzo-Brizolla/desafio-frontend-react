export default function Vegano({ vegano }) {
  return (
    <>
      {vegano === true ? (
        <div className="product__tag">
          <img src={PlantImage} alt="" />Z<span>Vegano</span>
        </div>
      ) : (
        <div className="product__tag">
          <img src={CowImage} alt="" />
          <span>Contém lactose</span>
        </div>
      )}
    </>
  );
}
