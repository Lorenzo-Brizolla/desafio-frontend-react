export default function TextInput() {
  return (
    <section className="product__observation">
      <label htmlFor="observation">Observações sobre o pedido</label>
      <textarea
        rows={3}
        name="observation"
        id="observation"
        placeholder="Digite suas observações. Ex.: Enviar açúcar"
      ></textarea>
    </section>
  );
}
