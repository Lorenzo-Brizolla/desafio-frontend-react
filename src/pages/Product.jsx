import PlantImage from "../assets/Plant.png";
import MinusImage from "../assets/Minus.svg";
import PlusImage from "../assets/Plus.svg";
import "../css/Product.css";
import Button from "../components/Button";

export function Product() {
  return (
    <>
      <main>
        <div className="container product__container">
          <a href="/" className="product__link">
            Voltar para o início
          </a>
          <section className="product">
            {/* componente DadosProduto  */}
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
                concentração. Ao dar o primeiro gole, a textura aveludada e o
                sabor robusto envolvem o paladar, oferecendo um equilíbrio
                encantador entre a doçura e a leve amargura. É um prazer
                pequeno, mas incrivelmente satisfatório, ideal para um rápido
                reequilíbrio durante o dia. Cada xícara é uma pausa deliciosa,
                um momento só seu, para recarregar e seguir em frente com
                renovada energia e tranquilidade.
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
                  {/* Componente da quantidade */}
                  {/* <section className="product__quantity">
                    <button className="product__quantity--minus">
                      <img src={MinusImage} alt="mais um" />
                    </button>
                    <input
                      type="text"
                      className="product__quantity--input"
                      value="1"
                    />
                    <button className="product__quantity--plus">
                      <img src={PlusImage} alt="menos um" />
                    </button>
                  </section> */}
                  <Button/>
                </div>
              </form>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
