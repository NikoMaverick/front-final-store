import { createBrowserRouter } from "react-router-dom";
import { loaderProductHome, loaderProductByCategory, loaderProductDetail, loaderProductEdit } from "../service/ProductService";
import LayoutPublic from "../layout/LayoutPublic";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import ProductByCategory from '../pages/ProductByCategory';
import ProductDetail from "../pages/ProductDetail";



export const router = createBrowserRouter([
    {
        path: '/',
        element: <LayoutPublic></LayoutPublic>,
        errorElement: <NotFound/>,
        children: [
            {
                path: "/",
                element: <Home/>,
                loader: loaderProductHome
            },
            {
                path: "/products",
                element: <Home/>,
                loader: loaderProductHome
            },
            {
                path: "/products/category/:category",
                element: <ProductByCategory/>,
                loader: ({ params }) => loaderProductByCategory(params.category)
            },
            {
                path: "/products/:productId",
                element: <ProductDetail/>,
                loader: ({ params }) => loaderProductDetail(params._id)
            },
            /*
            {
                path: "/dashboard/new",
                element: <ProductEdit/>,
                loader: ({ params }) => loaderProductEdit(params._id)
            }
            /*
            {
                path: "/dashboard/:productId/edit",
                element: <ProductEdit/>,
                loader: ({ params }) => loaderProductEdit(params._id)
            }*/
        ]
    }
]);



