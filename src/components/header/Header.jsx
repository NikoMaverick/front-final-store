import Navbar from "../NavBar";
const Header = () => {
    
    return (
        <>
            <div className="container">
                <div className='row'>
                    <div className='col-md-7'>
                        <figure >
                            <a href="/"> <img alt="futbolRetro" src="../src/assets/LogoFutbolRetro.png" title="futbolRetro"/></a>
                        </figure>
                    </div>
                    <Navbar></Navbar>
                 </div>
            </div>
        </>
    );
}

export default Header;