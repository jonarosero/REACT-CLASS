const Producto = (props) => {
  const product = props.product;

  return <div>
    <h3>Producto: {product.title}</h3>
    <img src={product.image} width={100}></img>
    <p>Precio: <strong>{product.price}</strong></p>
    <p>{product.description}</p>
  </div>;
};

export default Producto;
