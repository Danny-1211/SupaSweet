import { createBrowserRouter } from 'react-router-dom';
import App from '../App.jsx';
import Home from '../pages/Home.jsx';
import Products from '../pages/Products.jsx';
import Login from '../pages/Login.jsx';
import Cart from '../pages/Cart.jsx';
import Checkout from '../pages/Checkout.jsx';
import OrderComplete from '../pages/OrderComplete.jsx';
export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "products",
                element: <Products />
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "cart",
                element: <Cart />
            },
            {
                path: "checkout",
                element: <Checkout />
            },
            {
                path: "OrderComplete",
                element: <OrderComplete />
            }
        ]
    }
])