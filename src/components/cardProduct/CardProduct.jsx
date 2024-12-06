import { Link } from "react-router-dom";
import ImageCard from "../image/ImageCard";


const CardProduct = (props) => {
    const element = props.element;
    const index = props.index;

    return(
        <div key={index} className="col-md-4 mt-4">
            <div className="card" style={{width: '18rem', height: '30rem', margin:'0 auto'}}>
                <ImageCard pictureUrls={element.image}></ImageCard>
                    <div className="card-body">
                        <h2 className="card-title">{element.team}</h2>
                        <h2 className="card-subtitle mb-2 text-muted">{element.year}</h2>
                        <Link to={`/products/${element._id}`}>Ver</Link>
                    </div>
            </div>
        </div>
    )
}

export default CardProduct;