import PlantImage from "../assets/Plant.png";
import CowImage from "../assets/Cow.png";

export function CardProduto(productData, {vegano}) {

  return (
    <a href="" className="products__list--item">
      <img src="" alt="" />
      <h3 className="products__list--price">
        <span></span>
      </h3>
      <h4 className="products__list--name">
      </h4>
        {vegano == true ? <div className="product__tag">
      <img src={PlantImage} alt="" />Z
      <span>Vegano</span>
    </div> : <div className="product__tag">
      <img src={CowImage} alt="" />
      <span>Contém lactose</span>
    </div>}
    </a>
  );
}
