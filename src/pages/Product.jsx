import { useState } from "react";
import PlantImage from "../assets/Plant.png";
import CowImage from "../assets/Cow.png";
import "../css/Product.css";
import Button from "../components/Button";
import NumberInput from "../components/NumberInput"; // importa o componente
/* import { useParams } from "react-router-dom"; */

export function Product({ productData }) {
  const [quantidade, setQuantidade] = useState(1);

  function formatarPreco(precoCentavos) {
    return (precoCentavos / 100).toFixed(2).replace(".", ",");
  }

  /*   const { id } = useParams();
  console.log('ID do produto:', id); */
  return (
    <main>
      <div className="container product__container">
        <a href="/" className="product__link">
          Voltar para o início
        </a>

        <section className="product">
          {/* componente DadosProduto */}
          <div className="product__container--image">
            <img
              src={productData.imagem}
              className="product__image"
              alt="produto 1"
            />
          </div>

          <div className="product__data">
            <h1 className="product__title">{productData.nome}</h1>
            <h2 className="product__price">
              R$ {formatarPreco(productData.preco.por)}
            </h2>

            {productData.vegano === true ? (
              <div className="product-tag">
                <img src={PlantImage} alt="planta" />
                <span>Vegano</span>
              </div>
            ) : (
              <div className="product-tag">
                <img src={CowImage} alt="leite" />
                <span>Contém Lactose</span>
              </div>
            )}
            <p className="product__description">
              {productData.descricao}
            </p>

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
        </section>
      </div>
    </main>
  );
}
