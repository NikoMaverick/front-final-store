import {useLoaderData} from 'react-router-dom';
import CardProduct from '../components/cardProduct/cardProduct';
const Home = () => {
    const {data} = useLoaderData();

return(

    <div className="container">
        <div className="row">
            {data.length > 0 ? (data.map((element,index) =>(
                
                <CardProduct element={element} index={index}/>
                
            ) )
            ) : <h3> No Product found</h3>
            
            }
        </div>
    </div>
)
}

export default Home;