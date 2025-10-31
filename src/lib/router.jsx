import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Login from "../pages/Login";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import OrderComplete from "../pages/OrderComplete";

export const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <App />,
            children: [
                { index: true, element: <Home /> },
                { path: 'products', element: <Products /> },
                { path: 'login', element: <Login /> },
                { path: 'cart', element: <Cart /> },
                { path: 'checkout', element: <Checkout /> },
                { path: 'OrderComplete', element: <OrderComplete /> },
            ],
        },
    ],
    {
        basename: '/SupaSweet',  // repo name
    }
)
