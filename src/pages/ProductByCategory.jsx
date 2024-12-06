import { useLoaderData } from "react-router-dom";
import CardProduct from "../components/cardProduct/cardProduct";

const ProductByCategory = () => {
const {data} = useLoaderData();

return(

    <div className="container">
        <div className="row">
            {data.length > 0 ? (data.map((element) =>(
                
                <CardProduct element={element}/>
                
            ) )
            ) : <h3> No Product found</h3>
            
            }
        </div>
    </div>
)
    
}

export default ProductByCategory;