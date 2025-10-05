import deleteImage from "../assets/Trash.svg";

export default function () {
  <div lassName="cart__product">
    <img src="" alt="" className="cart__productImage" />

    <div className="cart__productInfo">
      <div className="cart__productRow">
        <div className="cart__productColumn">
          <h2 className="cart__productName">Café Espresso</h2>

          {/* <div className="product__tag">
            <img src={plantImage} alt="vegano" />
            <span>Vegano</span>
          </div> */}
        </div>

        <button className="cart__productDelete">
          <img src={deleteImage} alt="Deletar produto" />
        </button>
      </div>

      <div className="cart__productRow">
        <h3 className="cart__productPrice"></h3>

        {/* <section className="product__quantity">
          <button type="button" className="product__quantityMinus">
            <img src={plusImage} alt="mais um" />
          </button>
          <input
            type="text"
            readOnly
            className="product__quantityInput"
            value={1}
          />
          <button type="button" className="product__quantityPlus">
            <img src={minusImage} alt="menos um" />
          </button>
        </section> */}
        
      </div>
    </div>
  </div>;
}
