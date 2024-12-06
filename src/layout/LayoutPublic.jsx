import { Outlet, useNavigation } from "react-router-dom";
import Header from '../components/header/Header';


const LayoutPublic = () => {
    const navigation = useNavigation();
    return(
        <>
        <Header></Header>
        <main style={{margin:'0 auto', minHeight:'70vh'}}>
        {navigation.state === 'loading' ? (
            <div className="aletr alert-info my-5"> Loading...</div>
        ) : <Outlet/>}
            
            </main>
        </>
    )
}

export default LayoutPublic;