import PlantImage from "../assets/Plant.png";
import CowImage from "../assets/Cow.png";
import NumberInput from "./NumberInput";
import Button from "./Button";
import "../css/product.css";
import { useState } from "react";

export default function DadosProduto({ productData }) {
     const [quantidade, setQuantidade] = useState(1);
  if (!productData) {
    return <div>Produto não encontrado.</div>;
  }

  function formatarPreco(precoCentavos) {
    return (precoCentavos / 100).toFixed(2).replace(".", ",");
  }

  function handleAddToCart(event) {
    event.preventDefault();

    const itemCarrinho = {
      id: productData.id,
      nome: productData.nome,
      preco: productData.preco.por,
      quantidade: quantidade,
      vegano: productData.vegano,
    };

    console.log("Adicionado ao carrinho:", itemCarrinho);
    alert(`${quantidade}X ${itemCarrinho.nome} adicionado(s) ao carrinho!`)
  }

  return (
    <>
      <div className="product__container--image">
        <img
          src={`/${productData.imagem}`}
          className="product__image"
          alt={productData.nome}
        />
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
        <form onSubmit={handleAddToCart}>
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
              onChange={(qtd) => setQuantidade(qtd)/* console.log("Qtd produto:", qtd) */}
            />
            <Button  textButton={"Comprar"} type="submit"/>
          </div>
        </form>
      </div>
    </>
  );
}
