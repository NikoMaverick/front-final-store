import { createBrowserRouter } from "react-router-dom";
import { loaderProductHome, loaderProductByCategory, loaderProductDetail } from "../service/ProductService.jsx";
import LayoutPublic from "../layout/LayoutPublic.jsx";
import Home from "../pages/Home.jsx";
import NotFound from "../pages/NotFound.jsx";
import ProductByCategory from '../pages/ProductByCategory.jsx';
import ProductDetail from "../pages/ProductDetail.jsx";
import ProductNew from "../pages/ProductNew.jsx";




export const router = createBrowserRouter([
    {
        path: '/',
        element: <LayoutPublic />,
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
                path: "/products/:_id",
                element: <ProductDetail/>,
                loader: ({ params }) => loaderProductDetail(params._id)
            },
            {
                path: "/products/category/:category",
                element: <ProductByCategory/>,
                loader: ({ params }) => loaderProductByCategory(params.category)
            },
            
            //Dashboard
            {
                path: "/dashboard",
                element: <Home/>,
                loader: loaderProductHome
            },
            {
                path: "/dashboard/category/:category",
                element: <ProductByCategory/>,
                loader: ({ params }) => loaderProductByCategory(params.category)
            },
            {
                path: "/dashboard/:_id",
                element: <ProductDetail/>,
                loader: ({ params }) => loaderProductDetail(params._id)
            },
            {
                path: "/dashboard/new",
                element: <ProductNew/>
            },
            
            /*
            {
                path: "/dashboard/:productId/edit",
                element: <ProductEdit/>,
                loader: ({ params }) => loaderProductEdit(params._id)
            }*/
            
        ]
    }
]);



