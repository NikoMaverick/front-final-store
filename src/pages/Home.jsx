import {useLoaderData} from 'react-router-dom';
import CardProduct from '../components/cardProduct/CardProduct.jsx';


const Home = () => {
    const {data} = useLoaderData();

return(
    <div className="product-card">
        {data.length > 0 ? (data.map((element,index) =>(
             <CardProduct key={data.id} element={element} index={index}/>
        ) )
        ) : <h3> No Product found</h3>
        }
    </div>
)
}

export default Home;