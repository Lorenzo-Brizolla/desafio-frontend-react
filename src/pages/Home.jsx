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
              <CardProduto/>
            </div>
          </div>
        </section>
        <section className="products">
          <div className="container">
            <h2 className="products__title">Gelados</h2>
            <div className="products__list"></div>
          </div>
        </section>
      </main>
    </>
  );
}
