import { Link } from "react-router-dom";
import ImageCard from "../image/ImageCard.jsx";


const CardProduct = (props) => {
    const element = props.element;
    const index = props.index;

    return(
        <div className="productCard">
            <ImageCard key={element.image} pictureUrls={element.image}></ImageCard>
                <div className="leyend">
                    <h2>{element.team}</h2>
                    <h3>Temporada {element.year}</h3>
                </div>
            <Link to={`/products/${element._id}`} className="homeBtn">Ver</Link>
        </div>
    )
}

export default CardProduct;