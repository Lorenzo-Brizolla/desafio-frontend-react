import PlantImage from "../assets/Plant.png";
import CowImage from "../assets/Cow.png";
import NumberInput from "./NumberInput";
import Button from "./Button";

export default function DadosProduto({ productData }) {
  if (!productData) {
    return <div>Produto não encontrado.</div>;
  }

  function formatarPreco(precoCentavos) {
    return (precoCentavos / 100).toFixed(2).replace(".", ",");
  }

  return (
    <>
      <div className="product__container--image">
        <img src={productData.imagem} className="product__image" alt={productData.nome} />
      </div>
      <div className="product__data">
        <h1 className="product__title">{productData.nome}</h1>
        <h2 className="product__price">
          R$ {formatarPreco(productData.preco.por)}
        </h2>
        {productData.vegano === true ? (
          <div className="product__tag">
            <img src={PlantImage} alt="planta" />
            <span>Vegano</span>
          </div>
        ) : (
          <div className="product__tag">
            <img src={CowImage} alt="leite" />
            <span>Contém Lactose</span>
          </div>
        )}

        <p className="product__description">{productData.descricao}</p>
        <form>
          <section className="product__observation">
            <label htmlFor="observation">Observações sobre o pedido</label>
            <textarea
              rows={3}
              name="observation"
              id="observation"
              placeholder="Digite suas observações. Ex.: Enviar açúcar"
            ></textarea>
          </section>
          <div className="product__buy">
            <NumberInput
              initial={1}
              onChange={(qtd) => console.log("Qtd produto:", qtd)}
            />
            <Button />
          </div>
        </form>
      </div>
    </>
  );
}
