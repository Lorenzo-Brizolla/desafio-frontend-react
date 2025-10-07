import { useState } from "react";
import PlantImage from "../assets/Plant.png";
import "../css/Product.css";
import Button from "../components/Button";
import NumberInput from "../components/NumberInput"; // importa o componente

export function Product() {
  const [quantidade, setQuantidade] = useState(1);

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
              src="/product-01.png"
              className="product__image"
              alt="produto 1"
            />
          </div>

          <div className="product__data">
            <h1 className="product__title">Café Espresso</h1>
            <h2 className="product__price">R$ 0,00</h2>

            {/* Criar componente Vegano */}
            <div className="product__tag">
              <img src={PlantImage} alt="planta" />
              <span>Vegano</span>
            </div>

            <p className="product__description">
              Imagine um café espresso como um abraço acolhedor em uma xícara.
              Com sua cor profunda e rica, ele é o convite perfeito para um
              momento de pausa. O aroma intenso que sobe suavemente é como um
              caloroso cumprimento, prometendo um instante de prazer e
              concentração...
            </p>

            <form>
              <section className="product__observation">
                <label htmlFor="observation">
                  Observações sobre o pedido
                </label>
                <textarea
                  rows={3}
                  name="observation"
                  id="observation"
                  placeholder="Digite suas observações. Ex.: Enviar açúcar"
                ></textarea>
              </section>

              <div className="product__buy">
                <NumberInput initial={1} onChange={(qtd) => console.log("Qtd produto:", qtd)} />
                <Button />
              </div>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}
