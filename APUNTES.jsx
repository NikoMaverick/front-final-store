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


