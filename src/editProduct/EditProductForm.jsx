import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"


const EditProductForm = () => {
    const { id } = useParams(); 
  const [formData, setFormData] = useState({
    team: "",
    year: "",
    description: "",
    category: "",
    country: "",
    league: "",
    image: "",
    size: "",
    price: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_APP_API_URL}/dashboard/${id}`);
        if (!response.ok) {
          throw new Error("No se pudo cargar el producto");
        }
        const product = await response.json();
        setFormData(product); 
      } catch (err) {
        setError(err.message);
      }
    };
    fetchProduct();
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); 

    try {
      const response = await fetch(`${import.meta.env.VITE_APP_API_URL}/dashboard/${id}`, {
        method: "PUT", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Error al actualizar el producto");
      }

      const updatedProduct = await response.json();
      alert("Producto actualizado correctamente");
      navigate(`/dashboard/${id}`); 
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      {error && <p style={{ color: "red", backgroundColor: "white" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <h2 className="editH2">Editar Producto</h2>
        <div>
          <label>Equipo</label>
          <input
            type="text"
            name="team"
            value={formData.team}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Temporada</label>
          <input
            type="number"
            name="year"
            value={formData.year}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Descripción</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Categoria</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option value="">Seleccionar categoría</option>
            <option value="spain">España</option>
            <option value="europa">Europa</option>
            <option value="seleccion">Selecciones</option>
            <option value="mundo">Resto del Mundo</option>
            <option value="campeones">Oliver y Benji</option>
          </select>
        </div>
        <div>
          <label>Pais</label>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Liga</label>
          <input
            type="text"
            name="league"
            value={formData.league}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Imagen</label>
          <input
            type="file"
            name="image"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Talla</label>
          <select
            name="size"
            value={formData.size}
            onChange={handleChange}
            required
          >
            <option value="">Seleccionar talla</option>
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
        <button  type="submit">Actualizar Producto</button>
      </form>
    </div>
  );
};


export default EditProductForm