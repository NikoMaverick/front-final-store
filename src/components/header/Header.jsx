import Navbar from "../NavBar.jsx";
const Header = () => {
    
    return (
        <>
            <div className="headerContainer">
                <div className='headerTop'>
                    <div className='logoContainer'>
                        <p>FUTBOL</p>
                        <figure className="logo">
                            <a href="/"><img alt="futbolRetro" src="../assets/LogoFutbolRetro.png" title="futbolRetro"/></a>
                        </figure>
                        <p>RETRO</p>
                    </div>
                 </div>
            </div>
            <div className="nav-Product" >
                <Navbar></Navbar>
            </div>
        </>
    );
}

export default Header;


