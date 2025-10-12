import PlantImage from "../assets/Plant.png";
import CowImage from "../assets/Cow.png";

export function CardProduto({productData}) {

  function formatarPreco(precoCentavos) {
    return (precoCentavos / 100).toFixed(2).replace('.', ',');
  }

  return (
    <a href={`/product/${productData.id}`} className="products__list--item">
      <img src={productData.imagem} alt={productData.nome} />
      <h3 className="products__list--price">
        R$ {formatarPreco(productData.preco.por)}
        <span>R$ {formatarPreco(productData.preco.de)}</span>
      </h3>
      <h4 className="products__list--name">
        {productData.nome}
      </h4>
        {productData.vegano == true ? <div className="product__tag">
      <img src={PlantImage} alt="" />
      <span>Vegano</span>
    </div> : <div className="product__tag">
      <img src={CowImage} alt="" />
      <span>Contém lactose</span>
    </div>}
    </a>
  );
}
