import {useRouteError, Link} from "react-router-dom"
import Header from "../components/header/Header.jsx";


const NotFound = () => {
  const error = useRouteError();

  return (
    <div>
      <Header />
      <div className="noFound">
        <h1>404</h1>
        <p>Página no encontrada</p>
        <p>{error.statusText || error.message}</p>
        <div className="noFoundBtn">
          <Link to="/">Volver al Home</Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;