import closeImage from '../assets/X.svg'
import deleteImage from '../assets/Trash.svg'
import plantImage from '../assets/Plant.png'
import plusImage  from '../assets/Plus.svg'
import minusImage  from '../assets/Minus.svg'
import '../css/cart.css'
import NumberInput from '../components/NumberInput'

export function Cart() {
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
   {/*        <div className="cart__product">
            <img
              src="/product-01.png"
              alt=""
              className="cart__productImage"
            />

            <div className="cart__productInfo">
              <div className="cart__productRow">
                <div className="cart__productColumn">
                  <h2 className="cart__productName">Café Espresso</h2>

                  <div className="product__tag">
                    <img src={plantImage} alt="vegano" />
                    <span>Vegano</span>
                  </div>
                </div>

                <button className="cart__productDelete">
                  <img src={deleteImage} alt="Deletar produto" />
                </button>
              </div>

              <div className="cart__productRow">
                <h3 className="cart__productPrice">R$ 10,00</h3>

                <section className="product__quantity">
                  <button type="button" className="product__quantityMinus">
                    <img src={plusImage} alt="mais um" />
                  </button>
                  <input type="text" readOnly className="product__quantityInput" value={1} />
                  <button type="button" className="product__quantityPlus">
                    <img src={minusImage} alt="menos um" />
                  </button>
                </section>
              </div>
            </div>
          </div> */}
          <NumberInput />

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
  )
}
