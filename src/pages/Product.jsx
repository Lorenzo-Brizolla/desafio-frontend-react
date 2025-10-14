import { useState, useEffect } from "react";
import "../css/Product.css";
import { useParams, Link } from "react-router-dom";
import DadosProduto from "../components/DadosProduto";
import dados from "../../db.json";

export function Product() {
  const [quantidade, setQuantidade] = useState(1);
  const [produto, setProduto] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    if (dados && dados.produtos) {
      const encontrado = dados.produtos.find((p) => String(p.id) === String(id));
      setProduto(encontrado || null);
    }
  }, [id]);

  return (
    <main>
      <div className="container product__container">
        <Link to="/" className="product__link">
          Voltar para o início
        </Link>

        <section className="product">
          <DadosProduto productData={produto} />
        </section>
      </div>
    </main>
  );
}
