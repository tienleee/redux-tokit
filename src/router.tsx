import { Navigate, createBrowserRouter } from "react-router-dom";
import Products from "./pages/admin/Products";
import LayoutAdmin from "./LayOut/LayoutAdmin";
import ProductAdd from "./pages/admin/addProduct";
import ProductEdit from "./pages/admin/editProduct";
import Header from "./components/layOut/header";
import Banner from "./components/layOut/banner";
import List from "./components/listProducts";
import DeiltalProduct from "./components/deiltalProduct";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <div>  <Header/>
          
         <Banner/>
         <List/>

        </div>,
    },
    {
        path:"/deiltalProduct/:id",
        element:<div>
            <Header/>
            <DeiltalProduct/>
        </div>,
    },
    {
        path: "/about",
        element: <div>About!</div>,
    },
    {
        path: "/admin",
        element: (
            <div>
               <LayoutAdmin/>
                
            </div>
        ),
        children: [
            {
                index: true,
                element: <Navigate to="dashboard" />,
            },
            {
                path: "dashboard",
                element: (
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
                    </div>
                ),
            },
            {
                path: "product",
                element: <Products/>,
            },
            {
                path: "product/add",
                element: <ProductAdd/>,
            },
            
            {
                path: "product/:id/edit",
                element: <ProductEdit/>,
            },
        ],
    },
]);