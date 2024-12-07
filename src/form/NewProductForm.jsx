import { useState } from 'react';

const NewProductForm = ({ data }) => {
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
            [name]: type === 'file' ? files[0] : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Formulario enviado', formData);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <h2 className="createH2">Añadir Producto</h2>
                </div>

                <label htmlFor="team">Equipo</label>
                <input
                    type="text"
                    id="team"
                    name="team"
                    value={formData.team}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="year">Temporada</label>
                <input
                    type="text"
                    id="year"
                    name="year"
                    value={formData.year}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="description">Descripción</label>
                <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="category">Categoría</label>
                <select
                    name="category"
                    id="category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                >
                    <option value="" disabled>Añada categoria</option>
                    {[
                        { value: "spain", text: "España" },
                        { value: "europa", text: "Europa" },
                        { value: "seleccion", text: "Selecciones" },
                        { value: "mundo", text: "Resto del Mundo" },
                        { value: "campeones", text: "Oliver & Benji" }
                    ].map((category) => (
                        <option
                            key={category.value}
                            value={category.value}
                            disabled={category.disabled}
                            selected={category.selected}
                        >
                            {category.text}
                        </option>
                            ))}
                </select>

                <label htmlFor="country">País</label>
                <input
                    type="text"
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="league">Liga</label>
                <input
                    type="text"
                    id="league"
                    name="league"
                    value={formData.league}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="image">Imagen</label>
                <input
                    type="file"
                    id="image"
                    name="image"
                    onChange={handleChange}
                />

                <label htmlFor="size">Talla</label>
                <select
                    name="size"
                    id="size"
                    value={formData.size}
                    onChange={handleChange}
                    required
                >
                <option value="" disabled>Añada talla</option>
    
                {[
                    { value: "XS", text: "XS" },
                    { value: "S", text: "S" },
                    { value: "M", text: "M" },
                    { value: "L", text: "L" },
                    { value: "XL", text: "XL" },
                    { value: "XXL", text: "XXL" }
                ].map((size) => (
                <option
                    key={size.value}
                    value={size.value}
                    disabled={size.disabled}
                    selected={size.selected}
                >
                    {size.text}
                </option>
                    ))}
                </select>

                <label htmlFor="price">Precio</label>
                <input
                    type="number"
                    id="price"
                    name="price"
                    min="0"
                    value={formData.price}
                    onChange={handleChange}
                    required
                />

                <button type="submit">Añadir producto</button>
                
                
            </form>
            
        </>
        
    );
    
    
};

export default NewProductForm;

