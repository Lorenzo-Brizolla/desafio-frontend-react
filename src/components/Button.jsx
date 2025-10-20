import "../css/product.css";

export default function Button({textButton, type="button"}) {
    return (
        <button className="product__button" type={type}>{textButton}</button>
    )
}