import { createBrowserRouter } from "react-router-dom";
import { loaderProductHome, loaderProductByCategory, loaderProductDetail, loaderProductNew } from "../service/ProductService";
import LayoutPublic from "../layout/LayoutPublic";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import ProductByCategory from '../pages/ProductByCategory';
import ProductDetail from "../pages/ProductDetail";
import ProductNew from "../pages/ProductNew";
//import CreateProduct from "../components/create/CreateProduct";



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
                path: "/products/:_Id",
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
                path: "/dashboard/new",
                element: <ProductNew/>,
                loader: loaderProductNew
            },
            {
                path: "/dashboard/category/:category",
                element: <ProductByCategory/>,
                loader: ({ params }) => loaderProductByCategory(params.category)
            },
            /*
            {
                path: "/dashboard",
                element: <CreateProduct/>,
                loader: loaderCreateProduct
            },*/

            {
                path: "/dashboard/:_Id",
                element: <ProductDetail/>,
                loader: ({ params }) => loaderProductDetail(params._id)
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



