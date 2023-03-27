function ProductRow({ product }) {
  return (
    <>
      <tr className={!product.inStock ? "text-danger" : "text-secondary"}>
        <td>{product.name}</td>
        <td>{product.price}</td>
      </tr>
    </>
  );
}

export default ProductRow;