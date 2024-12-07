import { Link } from "react-router-dom";
import ImageCard from "../image/ImageCard";


const CardProduct = (props) => {
    const element = props.element;
    const index = props.index;

    return(
        <div key={index} className="productCard">
            <div>
                <ImageCard pictureUrls={element.image}></ImageCard>
                    <div className="leyend">
                        <h2>{element.team}</h2>
                        <h3>Temporada {element.year}</h3>
                    </div>
                    <Link to={`/products/${element._id}`} className="homeBtn">Ver</Link>
            </div>
        </div>
    )
}

export default CardProduct;