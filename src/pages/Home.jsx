import "../css/home.css";
import dados from "../../db.json";
import { CardProduto } from "../components/CardProduto";
import { useEffect, useState } from "react";

export function Home() {
  const [produtos, setProdutos] = useState([]);
  const [produtosClassicosData, setProdutosClassicosData] = useState([]);
  const [produtosGeladosData, setProdutosGeladosData] = useState([]);

  useEffect(() => {
    // carregar produtos do db.json (poderia vir de uma API no futuro)
    if (dados && dados.produtos) {
      setProdutos(dados.produtos);
    }
  }, []);

  useEffect(() => {
    const produtosClassicos = produtos.filter((produto) => {
      return produto.categoria === "classicos";
    });

    const produtosGelados = produtos.filter((produto) => {
      return produto.categoria === "gelados";
    });

    setProdutosClassicosData(produtosClassicos);
    setProdutosGeladosData(produtosGelados);
  }, [produtos]);

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
              {produtosClassicosData.map((produtoClassico) => {
                return (
                  <CardProduto
                    productData={produtoClassico}
                    key={produtoClassico.id}
                  />
                );
              })}
            </div>
            <h2 className="products__title">Gelados</h2>
            <div className="products__list">
              {produtosGeladosData.map((produtoGelado) => {
                return (
                  <CardProduto
                    productData={produtoGelado}
                    key={produtoGelado.id}
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
