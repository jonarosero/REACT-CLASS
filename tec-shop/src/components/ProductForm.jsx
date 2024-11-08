import { useState } from 'react';

const ProductForm = ({ onAddProduct }) => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [categoryId, setCategoryId] = useState(1);
    const [image, setImage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddProduct({
            title,
            price: parseFloat(price),
            description,
            categoryId,
            images: [image]
        });
        setTitle('');
        setPrice('');
        setDescription('');
        setCategoryId(1);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Agregar Nuevo Producto</h2>
            <input
                type="text"
                placeholder="Título"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <input
                type="number"
                placeholder="Precio"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
            />
            <textarea
                placeholder="Descripción"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
            />
            <button type="submit">Agregar Producto</button>
        </form>
    );
};

export default ProductForm;
