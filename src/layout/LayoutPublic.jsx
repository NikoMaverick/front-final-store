import { Outlet, useNavigation } from "react-router-dom";
import Header from '../components/header/Header.jsx';



const LayoutPublic = () => {
    const navigation = useNavigation();
    return(
        <>
        <Header />
        <main>
            {navigation.state === 'loading' ? (
                <div className="loanding">
                    <div className="porteria"></div>
                    <div className="loader"></div>
                    <p>Loanding...</p>
                </div>
            ) : <Outlet/>}
        </main>
        </>
    )
}

export default LayoutPublic;


