import { useLoaderData } from "react-router-dom";
import CardProductDetail from "../components/cardProductDetail/CardProductDetail.jsx";


const ProductDetail = () => {
const {data} = useLoaderData();

return(
    <div className="product-card">
                
        <CardProductDetail element={data}/>

    </div>
)
};

export default ProductDetail;