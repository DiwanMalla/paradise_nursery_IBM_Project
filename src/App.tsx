import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RouterLayout from "./RouterLayout/RouterLayout";
import LandingPage from "./Pages/LandingPage";
import ProductListing from "./Pages/ProductPage";
import ShoppingCart from "./Pages/ShoppingCart";
import { CartProvider } from "./useContext/cartContext";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RouterLayout />,
      children: [
        { path: "/", element: <LandingPage /> },
        { path: "/home", element: <ProductListing /> },
        {
          path: "/cart",
          element: <ShoppingCart />,
        },
      ],
    },
  ]);
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
};

export default App;
