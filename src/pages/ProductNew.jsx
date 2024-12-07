import { useState } from 'react';
import NewProductForm from '../form/NewProductForm';

const ProductNew = () => {
  const [products, setProducts] = useState([]);

  const addProduct = (newProduct) => {
    setProducts((prevProducts) => [...prevProducts, newProduct]);
  };
  return (
    <div className="container">
      <div className="row">
        <NewProductForm addProduct={addProduct} />
        <h3>Producto creado</h3>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <h2>{product.team} ({product.year})</h2>
              <p>{product.description}</p>
              <p>Precio: {product.price} EUR</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductNew;