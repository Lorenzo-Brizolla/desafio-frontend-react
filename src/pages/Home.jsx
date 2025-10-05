import PlantImage from "../assets/Plant.png";
import CowImage from "../assets/Cow.png";
import "../css/Home.css";
import dados from "../../db.json";
import { CardProduto } from "../components/CardProduto";

export function Home() {
  const { produtos } = dados;

  const produtosClassicos = produtos.filter((produto) => {
    return produto.categoria === "classicos";
  });

  const produtosGelados = produtos.filter((produto) => {
    return produto.categoria === "gelados";
  });

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
              {produtosClassicos.map((produtosClassicos) => {
                return (
                  <CardProduto
                    productData={produtosClassicos}
                    key={produtosClassicos.id}
                  />
                );
              })}
            </div>
            <h2 className="products__title">Gelados</h2>
            <div className="products__list">
              {produtosGelados.map((produtosGelados) => {
                return (
                  <CardProduto
                    productData={produtosGelados}
                    key={produtosGelados.id}
                  />
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
