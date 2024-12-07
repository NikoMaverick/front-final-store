import { Outlet, useNavigation } from "react-router-dom";
import Header from '../components/header/Header.jsx';


const LayoutPublic = () => {
    const navigation = useNavigation();
    return(
        <>
        <Header></Header>
        <main style={{margin:'0 auto', minHeight:'70vh'}}>
            {navigation.state === 'loading' ? (
                <div className="loanding">
                    <div className="loader"></div>
                    <p>Loanding...</p>
                </div>
            ) : <Outlet/>}
        </main>
        </>
    )
}

export default LayoutPublic;