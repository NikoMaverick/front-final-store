import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
    const location = useLocation();
    const isDashboard = location.pathname.startsWith("/dashboard");
    return (
        <nav className="nav-Product" id="nav-Product">
            <ul className="navProduct" id="navProduct">
                {isDashboard ? (
                    <>
                        <li><NavLink to="/dashboard">Home</NavLink></li>
                        <li><NavLink to="/dashboard/category/spain">España</NavLink></li>
                        <li><NavLink to="/dashboard/category/europa">Europa</NavLink></li>
                        <li><NavLink to="/dashboard/category/seleccion">Selecciones</NavLink></li>
                        <li><NavLink to="/dashboard/category/mundo">Resto del mundo</NavLink></li>
                        <li><NavLink to="/dashboard/category/campeones">Oliver & Benji</NavLink></li>
                        <li><NavLink to="/dashboard/new">Nuevo producto</NavLink></li>
                        <li><NavLink to="/products">Cerrar Sesión</NavLink></li>
                    </>
                ) : (
                    <>
                        <li><NavLink to="/products">Home</NavLink></li>
                        <li><NavLink to="/products/category/spain">España</NavLink></li>
                        <li><NavLink to="/products/category/europa">Europa</NavLink></li>
                        <li><NavLink to="/products/category/seleccion">Selecciones</NavLink></li>
                        <li><NavLink to="/products/category/mundo">Resto del mundo</NavLink></li>
                        <li><NavLink to="/products/category/campeones">Oliver & Benji</NavLink></li>
                        <li><NavLink to="/dashboard/">Iniciar Sesión</NavLink></li>
                    </>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;


     