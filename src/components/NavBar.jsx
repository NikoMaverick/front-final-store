import { NavLink } from "react-router-dom";



const Navbar = () => {
    return (
      <nav className="nav-Product" id="nav-Product">
        <ul className="navProduct" id="navProduct">
            <li><NavLink to="/products">Home</NavLink></li>
            <li><NavLink to="/products/category/spain">España</NavLink></li>
            <li><NavLink to="/products/category/europa">Europa</NavLink></li>
            <li><NavLink to="/products/category/seleccion">Selecciones</NavLink></li>
            <li><NavLink to="/products/category/mundo">Resto del mundo</NavLink></li>
            <li><NavLink to="/products/category/campeones">Oliver & Benji</NavLink></li>
            <li><NavLink to="/dashboard/">Iniciar Sesión</NavLink></li>
        </ul>
      </nav>
    );
};

export default Navbar;


            
     