import closeImage from "../assets/X.svg";
import "../css/cart.css";
import dados from "../../db.json";
import { CardCart } from "./cardCart";
import { useCart } from "../contexts/CartContext";

export function Cart() {
  const { produtos } = dados;
  const { isOpen, closeCart } = useCart();

  const produtosCarrinho = produtos.slice(0, 3);

  return (
    <div id="cart-panel" className={`cart ${isOpen ? "cart--open" : ""}`} aria-hidden={!isOpen}>
      <section className="cart__header">
        <h3 className="cart__title">Seu carrinho</h3>
        <button className="cart__close" onClick={closeCart} aria-label="Fechar carrinho">
          <img src={closeImage} alt="fechar carrinho" />
        </button>
      </section>
      <section className="cart__body">
        <div className="cart__info">
          <h4 className="cart__quantityItems">{produtosCarrinho.length} itens</h4>
          <button className="cart__deleteAll">Excluir Tudo</button>
        </div>
        <div className="cart__products">
          {produtosCarrinho.map((produto) => {
            return <CardCart productData={produto} key={produto.id} />;
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

                  