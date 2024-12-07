import { Link } from "react-router-dom";
import ImageCard from "../image/ImageCard";


const CardProductDetail = (props) => {
    const element = props.element;
    const index = props.index;

    return(
        <div className="product-card">
            <ImageCard pictureUrls={element.image}></ImageCard>
            <div className="leyend">
            <h2>{element.team}{element.year}</h2>
            <p>{element.description}</p>
            <p>Categoria: {element.category}</p>
            <p>Pais: {element.country}</p>
            <p>Liga: {element.league}</p>
            <p><strong>{element.price}</strong></p>
          </div>
          <div className="size-basket">
            <select name="size" className="sizeProduct" id="sizeProduct">
              <option value="" disabled="" selected="">Talla</option>
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
            <button className="deleteBtn" id="deleteProduct">Borrar</button>
          </div>

        </div>
    )
}

export default CardProductDetail;


