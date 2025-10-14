import { useState } from "react";
import PlantImage from "../assets/Plant.png";
import CowImage from "../assets/Cow.png";
import "../css/Product.css";
import { useParams } from "react-router-dom";
import DadosProduto from "../components/DadosProduto";

export function Product() {
  const [quantidade, setQuantidade] = useState(1);

  function formatarPreco(precoCentavos) {
    return (precoCentavos / 100).toFixed(2).replace(".", ",");
  }

  const { id } = useParams();
  console.log("ID do produto:", id);
  return (
    <main>
      <div className="container product__container">
        <a href="/" className="product__link">
          Voltar para o início
        </a>

        <section className="product">
          <DadosProduto />
        </section>
      </div>
    </main>
  );
}
