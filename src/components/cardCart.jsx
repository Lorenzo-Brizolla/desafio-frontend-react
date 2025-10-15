import PlantImage from "../assets/Plant.png";
import CowImage from "../assets/Cow.png";
import deleteImage from "../assets/Trash.svg";
import NumberInput from "./NumberInput";

export function CardCart({ productData }) {
    
  function formatarPreco(precoCentavos) {
    return (precoCentavos / 100).toFixed(2).replace(".", ",");
  }

  

  return (
    <div className="cart__product">
      <img src={productData.imagem} alt="" className="cart__productImage" />

      <div className="cart__productInfo">
        <div className="cart__productRow">
          <div className="cart__productColumn">
            <h2 className="cart__productName">{productData.nome}</h2>

            {productData.vegano === true ? (
              <div className="product__tag">
                <img src={PlantImage} alt="vegano" />
                <span>Vegano</span>
              </div>
            ) : (
              <div className="product__tag">
                <img src={CowImage} alt="lactose" />
                <span>Contém Lactose</span>
              </div>
            )}
          </div>

          <button className="cart__productDelete">
            <img src={deleteImage} alt="Deletar produto" />
          </button>
        </div>

        <div className="cart__productRow">
          <h3 className="cart__productPrice">
            R$ {formatarPreco(productData.preco.por)}
          </h3>
          <NumberInput />
        </div>
      </div>
    </div>
  );
}
