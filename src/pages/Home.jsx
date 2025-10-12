import PlantImage from "../assets/Plant.png";
import CowImage from "../assets/Cow.png";
import "../css/Home.css";
import dados from "../../db.json";
import { CardProduto } from "../components/CardProduto";
import { use, useState } from "react";

export function Home() {
  const { produtos } = dados;

  const produtosClassicos = produtos.filter((produto) => {
    return produto.categoria === "classicos";
  });

  const produtosGelados = produtos.filter((produto) => {
    return produto.categoria === "gelados";
  });

/*   const [produtoClassicosData, setProdutoClassicos] = useState([
    {
      id: produtosClassicos.id,
      nome: produtosClassicos.nome,
      imagem: produtosClassicos.imagem,
      descricao: produtosClassicos.descricao,
      preco: {
        de: produtosClassicos.preco.de,
        por: produtosClassicos.preco.por,
      },
      vegano: produtosClassicos.vegano,
      categoria: produtosClassicos.categoria,
    },
  ]); */
/* 
    const [produtoGeladosData, setProdutoGelados] = useState([
    {
      id: produtosGelados.id,
      nome: produtosGelados.nome,
      imagem: produtosGelados.imagem,
      descricao: produtosGelados.descricao,
      preco: {
        de: produtosGelados.preco.de,
        por: produtosGelados.preco.por,
      },
      vegano: produtoGelados.vegano,
      categoria: produtoGelados.categoria,
    },
  ]); */

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
              {produtosClassicos.map((produtoClassico) => {
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
              {produtosGelados.map((produtoGelado) => {
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
