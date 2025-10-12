import closeImage from "../assets/X.svg";
import deleteImage from "../assets/Trash.svg";
import plantImage from "../assets/Plant.png";
import plusImage from "../assets/Plus.svg";
import minusImage from "../assets/Minus.svg";
import dados from "../../db.json";
import "../css/cart.css";
import { cardCart } from "./cardCart";
import { useState } from "react";

export function Cart() {
  const { produtos } = dados;
  const [produtosCarrinho, setProdutosCarrinho] = useState([
    {
      id: "6b9f",
      idProduto: "4",
      nome: "Café com leite",
      imagem: "./image/product-04.png",
      preco: 1000,
      vegano: false,
      quantidade: "3",
      observacao: "",
    },
  ]);

  return (
    <div className="cart">
      <section className="cart__header">
        <h3 className="cart__title">Seu carrinho</h3>
        <button className="cart__close">
          <img src={closeImage} alt="fechar carrinho" />
        </button>
      </section>
      <section className="cart__body">
        <div className="cart__info">
          <h4 className="cart__quantityItems">5 itens</h4>
          <a href="#" className="cart__deleteAll">
            Excluir Tudo
          </a>
        </div>
        <div className="cart__products">
          {produtos.map((produto) => {
            return (
              <cardCart productData={produto} key={produto.id} />
            );
          })}
          
        </div>
      </section>
      <section className="cart__footer">
        <div className="cart__footerRow cart__footerSubtotal">
          <h3 className="cart__footerTitle">Subtotal</h3>
          <h3 className="cart__footerPrice">R$ 1500,00</h3>
        </div>
        <div className="cart__footerRow cart__footerDelivery">
          <h3 className="cart__footerTitle">Entrega</h3>
          <h3 className="cart__footerPrice">R$ 0,00</h3>
        </div>
        <div className="cart__footerRow cart__footerTotal">
          <h3 className="cart__footerTitle">Total</h3>
          <h3 className="cart__footerPrice">R$ 1500,00</h3>
        </div>
        <div className="cart__footerRow cart__footerBuy">
          <button type="button" className="cart__buy">
            Finalizar compra
          </button>
        </div>
      </section>
    </div>
  );
}
