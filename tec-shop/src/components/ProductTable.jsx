import { useState } from 'react';

const ProductTable = ({ products, onDelete, onUpdate }) => {
    const [editingProduct, setEditingProduct] = useState(null);

    // Actualizar el producto editado
    const handleUpdate = (e, id) => {
        e.preventDefault();
        onUpdate(id, editingProduct);
        setEditingProduct(null);
    };

    return (
        <table border="1" cellPadding="10">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Producto</th>
                    <th>Precio</th>
                    <th>Descripción</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product) => (
                    <tr key={product.id}>
                        <td>{product.id}</td>
                        <td>
                            {editingProduct && editingProduct.id === product.id ? (
                                <input
                                    type="text"
                                    value={editingProduct.title}
                                    onChange={(e) =>
                                        setEditingProduct({ ...editingProduct, title: e.target.value })
                                    }
                                />
                            ) : (
                                product.title
                            )}
                        </td>
                        <td>
                            {editingProduct && editingProduct.id === product.id ? (
                                <input
                                    type="number"
                                    value={editingProduct.price}
                                    onChange={(e) =>
                                        setEditingProduct({ ...editingProduct, price: parseFloat(e.target.value) })
                                    }
                                />
                            ) : (
                                `$${product.price}`
                            )}
                        </td>
                        <td>
                            {editingProduct && editingProduct.id === product.id ? (
                                <input
                                    type="text"
                                    value={editingProduct.description}
                                    onChange={(e) =>
                                        setEditingProduct({ ...editingProduct, description: e.target.value })
                                    }
                                />
                            ) : (
                                product.description
                            )}
                        </td>
                        <td>
                            {editingProduct && editingProduct.id === product.id ? (
                                <>
                                    <button onClick={(e) => handleUpdate(e, product.id)}>Guardar</button>
                                    <button onClick={() => setEditingProduct(null)}>Cancelar</button>
                                </>
                            ) : (
                                <>
                                    <button onClick={() => setEditingProduct(product)}>Editar</button>
                                    <button onClick={() => onDelete(product.id)}>Eliminar</button>
                                </>
                            )}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ProductTable;
