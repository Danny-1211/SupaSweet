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
        basename: '/SupaSweet', // 👈 一樣，跟 repo 名稱完全一樣
    }
)
