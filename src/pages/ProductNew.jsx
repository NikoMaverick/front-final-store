import {useLoaderData} from 'react-router-dom';
import NewProductForm from '../form/NewProductForm';


const ProductNew = () => {
    const {data} = useLoaderData();

return(

    <div className="container">
            <div className="row">
                <NewProductForm data={data} />
                <h3>No Product found</h3>
            </div>
        </div>
)
}

export default ProductNew;