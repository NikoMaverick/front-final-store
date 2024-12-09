import { Link } from "react-router-dom";
import { useState } from "react";
import ImageCard from "../image/ImageCard.jsx";
import { useNavigate } from "react-router-dom";


const CardProductDetail = ({ element, index }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const DeleteProduct = async (_id) => {
      setIsLoading(true);
      setError(null);
      try {
          const res = await fetch(`${import.meta.env.VITE_APP_API_URL}/dashboard/${_id}/delete`, {
              method: "DELETE",
          });

          if (res.status !== 200) {
              throw new Error("No se pudo eliminar el producto");
          }
          console.log("Producto borrado:");
          navigate("/products");

      } catch (error) {
          setError(error.message);
          console.error("Error al eliminar el producto:", error);
      } finally {
          setIsLoading(false);
      }
  };
  

    return(
        <div className="productDetail">
          <ImageCard pictureUrls={element.image}></ImageCard>
          <div className="leyend">
              <h2>{element.team} - {element.year}</h2>
              <p>{element.description}</p>
              <p>Pais: {element.country}</p>
              <p>Liga: {element.league}</p>
              <p><strong>Precio: {element.price}€</strong></p>
          </div>
          <div className="size-basket">
            <select name="size" className="sizeProduct" id="sizeProduct">
              <option value="" disabled="">Talla</option>
              <option value="XS">XS</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
              <option value="XXL">XXL</option>
            </select>
            
            <button type="submit">Añadir a la cesta</button>
          </div>
          <div className="editDelete">
            <Link to={`/dashboard/${element._id}/edit`} className="editBtn">Editar</Link>
            <button onClick={() => DeleteProduct(element._id)} className="deleteBtn" id="deleteProduct">Borrar</button>
          </div>

        </div>
    )
}

export default CardProductDetail;


