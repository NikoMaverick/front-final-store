import {useLoaderData} from 'react-router-dom';
import CreateProduct from '../components/create/CreateProduct';


const ProductCreate = () => {
    const {data} = useLoaderData();

return(

    <div className="product-card">
        <CreateProduct data={data} />
        <h3>No Product found</h3>
    </div>
)
}

export default ProductCreate;