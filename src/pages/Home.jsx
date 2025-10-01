import PlantImage from "../assets/Plant.png";
import CowImage from "../assets/Cow.png";
import "../css/Home.css";
import { CardProduto } from "../components/CardProduto";

export function Home() {
  return (
    <>
      <main>
        <section className="slogan">
          <div className="container">
            <h1 className="slogan__title">
              Fragrância e sabor elevado ao cubo
            </h1>
            <p className="slogan__text">
              Explore nossa variedade de blends exclusivos e saboreie a
              perfeição em cada gole.
            </p>
          </div>
        </section>
        <section className="products">
          <div className="container">
            <h2 className="products__title">Clássicos</h2>
            <div className="products__list">
              <CardProduto />
              <a href={`/product/1`} className="products__list--item">
                <img src="/product-01.png" alt="" />
                <h3 className="products__list--price">
                  R$ 0,00 <span>R$ 0,00</span>
                </h3>
                <h4 className="products__list--name">Espresso</h4>
                <div className="product__tag">
                  <img src={PlantImage} alt="planta" />
                  <span>Vegano</span>
                </div>
              </a>

              <a href={`/product/1`} className="products__list--item">
                <img src="/product-02.png" alt="" />
                <h3 className="products__list--price">
                  R$ 0,00 <span>R$ 0,00</span>
                </h3>
                <h4 className="products__list--name">Americano</h4>
                <div className="product__tag">
                  <img src={PlantImage} alt="planta" />
                  <span>Vegano</span>
                </div>
              </a>
              <a href={`/product/1`} className="products__list--item">
                <img src="./product-03.png" alt="" />
                <h3 className="products__list--price">
                  R$ 8,00 <span>R$ 10,00</span>
                </h3>
                <h4 className="products__list--name">Café com leite</h4>
                <div className="product__tag">
                  <img src={CowImage} alt="Lactose" />
                  <span>Contém lactose</span>
                </div>
              </a>
              <a href={`/product/1`} className="products__list--item">
                <img src="/product-04.png" alt="" />
                <h3 className="products__list--price">R$ 10,00</h3>
                <h4 className="products__list--name">Cappuccino</h4>
                <div className="product__tag">
                  <img src={CowImage} alt="Lactose" />
                  <span>Contém lactose</span>
                </div>
              </a>
              <a href={`/product/1`} className="products__list--item">
                <img src="/product-05.png" alt="" />
                <h3 className="products__list--price">
                  R$ 0,00 <span>R$ 0,00</span>
                </h3>
                <h4 className="products__list--name">Latte</h4>
                <div className="product__tag">
                  <img src={CowImage} alt="Lactose" />
                  <span>Contém lactose</span>
                </div>
              </a>
              <a href={`/product/1`} className="products__list--item">
                <img src="/product-06.png" alt="" />
                <h3 className="products__list--price">
                  R$ 8,00 <span>R$ 10,00</span>
                </h3>
                <h4 className="products__list--name">Macchiato</h4>
                <div className="product__tag">
                  <img src={CowImage} alt="Lactose" />
                  <span>Contém lactose</span>
                </div>
              </a>
              <a href={`/product/1`} className="products__list--item">
                <img src="/product-07.png" alt="" />
                <h3 className="products__list--price">
                  R$ 8,00 <span>R$ 10,00</span>
                </h3>
                <h4 className="products__list--name">Mocha</h4>
                <div className="product__tag">
                  <img src={CowImage} alt="Lactose" />
                  <span>Contém lactose</span>
                </div>
              </a>
              <a href={`/product/1`} className="products__list--item">
                <img src="/product-08.png" alt="" />
                <h3 className="products__list--price">
                  R$ 8,00 <span>R$ 10,00</span>
                </h3>
                <h4 className="products__list--name">Irish Coffee</h4>
                <div className="product__tag">
                  <img src={CowImage} alt="Lactose" />
                  <span>Contém lactose</span>
                </div>
              </a>
            </div>
          </div>
        </section>

        <section className="products">
          <div className="container">
            <h2 className="products__title">Gelados</h2>
            <div className="products__list">
              <a href={`/product/1`} className="products__list--item">
                <img src="/product-09.png" alt="" />
                <h3 className="products__list--price">
                  R$ 0,00 <span>R$ 0,00</span>
                </h3>
                <h4 className="products__list--name">Cold Brew</h4>
                <div className="product__tag">
                  <img src={PlantImage} alt="planta" />
                  <span>Vegano</span>
                </div>
              </a>
              <a href={`/product/1`} className="products__list--item">
                <img src="/product-10.png" alt="" />
                <h3 className="products__list--price">
                  R$ 0,00 <span>R$ 0,00</span>
                </h3>
                <h4 className="products__list--name">Frappuccino</h4>
                <div className="product__tag">
                  <img src={CowImage} alt="Lactose" />
                  <span>Contém lactose</span>
                </div>
              </a>
              <a href={`/product/1`} className="products__list--item">
                <img src="/product-11.png" alt="" />
                <h3 className="products__list--price">
                  R$ 0,00 <span>R$ 0,00</span>
                </h3>
                <h4 className="products__list--name">
                  Café gelado com laranja e tônica
                </h4>
                <div className="product__tag">
                  <img src={PlantImage} alt="planta" />
                  <span>Vegano</span>
                </div>
              </a>
              <a href={`/product/1`} className="products__list--item">
                <img src="/product-12.png" alt="" />
                <h3 className="products__list--price">
                  R$ 0,00 <span>R$ 0,00</span>
                </h3>
                <h4 className="products__list--name">Milk shake de café</h4>
                <div className="product__tag">
                  <img src={CowImage} alt="Lactose" />
                  <span>Contém lactose</span>
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
