import { useEffect, useState } from 'react';
import ProductTable from './components/ProductTable';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';

const App = () => {
    const [products, setProducts] = useState([]);

    // Obtener todos los productos al cargar el componente
    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        const response = await fetch('https://api.escuelajs.co/api/v1/products');
        const data = await response.json();
        setProducts(data);
    };

    // Agregar un nuevo producto
    const addProduct = async (product) => {
        const response = await fetch('https://api.escuelajs.co/api/v1/products/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(product)
        });
        if (response.ok) {
            fetchProducts();
        }
    };

    // Actualizar un producto existente
    const updateProduct = async (id, updatedProduct) => {
        const response = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedProduct)
        });
        if (response.ok) {
            fetchProducts();
        }
    };

    // Eliminar un producto por ID
    const deleteProduct = async (id) => {
        await fetch(`https://api.escuelajs.co/api/v1/products/${id}`, {
            method: 'DELETE'
        });
        fetchProducts();
    };

    return (
        <div>
            <h1>Productos</h1>
            <ProductForm onAddProduct={addProduct} />
            <br/>
            <h2>Listado de Productos</h2>
            {/* <ProductList products={products}/> */}
            <ProductTable products={products} onDelete={deleteProduct} onUpdate={updateProduct} />
        </div>
    );
};

export default App;
