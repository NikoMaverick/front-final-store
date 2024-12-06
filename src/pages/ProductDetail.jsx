import { useLoaderData } from "react-router-dom";
import CardProductDetail from "../components/cardProductDetail/CardProductDetail";

const ProductDetail = () => {
const {data} = useLoaderData();

return(

    <div className="container">
        <div className="row">
                
            <CardProductDetail element={data}/>
                
            
            
            
        </div>
    </div>
)
    
}

export default ProductDetail;