import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NewProductForm = () => {
  const [formData, setFormData] = useState({
    team: '',
    year: '',
    description: '',
    category: '',
    country: '',
    league: '',
    image: '',
    size: '',
    price: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); 

    try {
      const response = await fetch(`${import.meta.env.VITE_APP_API_URL}/dashboard/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Error al crear el producto');
      }

      const product = await response.json();
      {alert('Producto creado correctamente')};
      navigate(`/dashboard/${product._id}`); 
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      {error && <p style={{ color: 'red', backgroundColor: 'white' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <h2 className='createH2' >Crear Nuevo Producto</h2>
        <div>
          <label>Team:</label>
          <input
            type="text"
            name="team"
            value={formData.team}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Year:</label>
          <input
            type="number"
            name="year"
            value={formData.year}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Category:</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option value="">Añada categoria</option>
            <option value="spain">España</option>
            <option value="europa">Europa</option>
            <option value="seleccion">Selecciones</option>
            <option value="mundo">Resto del Mundo</option>
            <option value="campeones">Oliver y Benji</option>
          </select>
        </div>
        <div>
          <label>Country:</label>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>League:</label>
          <input
            type="text"
            name="league"
            value={formData.league}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Image URL:</label>
          <input
            type="url"
            name="image"
            value={formData.image}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Size:</label>
          <select
            name="size"
            value={formData.size}
            onChange={handleChange}
            required
          >
            <option value="">Añada talla</option>
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="XXL">XXL</option>
          </select>
        </div>
        <div>
          <label>Price:</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Crear Producto</button>
      </form>
    </div>
  );
};

export default NewProductForm;