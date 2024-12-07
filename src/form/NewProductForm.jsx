import { useState } from 'react';

const NewProductForm = ({ addProduct }) => {
    const [formData, setFormData] = useState({
      team: '',
      year: '',
      description: '',
      category: '',
      country: '',
      league: '',
      image: null,
      size: '',
      price: '',
    });
  
    const handleChange = (e) => {
      const { name, value, type, files } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: type === 'file' ? files[0] : value,
      }));
    };
  
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const formDataToSend = new FormData();

        for (const [key, value] of Object.entries(formData)) {
          formDataToSend.append(key, value);
        }
        try {
          const res = await fetch(`${import.meta.env.VITE_APP_API_URL}dashboard`, {
            method: 'POST',
            body: formDataToSend,
          });
          if (!res.ok) {
            throw new Error('Error, el producto no se ha creado');
          }
          const result = await res.json();
          console.log('El producto se a creado:', result);
         /* window.location.href = `/products/${result._id}`;*/
        } catch (error) {
          console.error('Error al acceder al producto:', error);
        }
      };
  
    return (
      <>
        <form onSubmit={handleSubmit}>
  <div>
    <h2 className="createH2">Añadir Producto</h2>
  </div>
  <label htmlFor="team">Equipo</label>
  <input type="text" id="team" name="team" value={formData.team} onChange={handleChange} required />

  <label htmlFor="year">Temporada</label>
  <input type="text" id="year" name="year" value={formData.year} onChange={handleChange} required />

  <label htmlFor="description">Descripción</label>
  <textarea id="description" name="description" value={formData.description} onChange={handleChange} required />

  <label htmlFor="category">Categoría</label>
  <select name="category" id="category" value={formData.category} onChange={handleChange} required>
    <option value="">Añada categoria</option>
    <option value="spain">España</option>
    <option value="europa">Europa</option>
    <option value="seleccion">Selecciones</option>
    <option value="mundo">Resto del Mundo</option>
    <option value="campeones">Oliver y Benji</option>
  </select>

  <label htmlFor="country">País</label>
  <input type="text" id="country" name="country" value={formData.country} onChange={handleChange} required />

  <label htmlFor="league">Liga</label>
  <input type="text" id="league" name="league" value={formData.league} onChange={handleChange} required />

  <label htmlFor="image">Imagen</label>
  <input type="file" id="image" name="image" onChange={handleChange} />

  <label htmlFor="size">Talla</label>
  <select name="size" id="size" value={formData.size} onChange={handleChange} required>
    <option value="">Añada talla</option>
    <option value="XS">XS</option>
    <option value="S">S</option>
    <option value="M">M</option>
    <option value="L">L</option>
    <option value="XL">XL</option>
    <option value="XXL">XXL</option>
  </select>

  <label htmlFor="price">Precio</label>
  <input type="number" id="price" name="price" min="0" value={formData.price} onChange={handleChange} required />

  <button type="submit">Añadir producto</button>
</form>
      </>
    );
  };
  
  export default NewProductForm;

