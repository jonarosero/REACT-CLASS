const ProductList = ({ products }) => {
    return (
        <div>
            {products.map((product) => (
                <div key={product.id}>
                    <h3>{product.title}</h3>
                    <p>Precio: ${product.price}</p>
                    <p>{product.description}</p>
                    <hr />
                </div>
            ))}
        </div>
    );
};

export default ProductList;
