import PlantImage from "../assets/Plant.png";
import CowImage from "../assets/Cow.png";

export default function DadosProduto() {
  return (
    <>
      <div className="product__container--image">
        <img src="" className="product__image" alt="" />
      </div>
      <div className="product__data">
        <h1 className="product__title"></h1>
        <h2 className="product__price"></h2>
        <div className="product__tag">
          <img src={PlantImage} alt="planta" />
          <span>Vegano</span>
        </div>

        <p className="product__description"></p>
      </div>
    </>
  );
}
