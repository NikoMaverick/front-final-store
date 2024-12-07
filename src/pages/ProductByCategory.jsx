import { useLoaderData } from "react-router-dom";
import CardProduct from "../components/cardProduct/CardProduct.jsx"

const ProductByCategory = () => {
const {data} = useLoaderData();

return(
    <div className="product-card">
        {data.length > 0 ? (data.map((element) =>(
            <CardProduct element={element}/>  
        ) )
        ) : <h3> No Product found</h3>
        }
    </div>
   
)
    
}

export default ProductByCategory;