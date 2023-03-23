import { Navigate, useRoutes, useLocation } from "react-router-dom";
import AddProducts from "./components/AddProducts";
import CartPage from "./components/CartPage";
import Home from "./components/Home";
import ProductDetails from "./components/ProductDetails";

export default function Router() {
  const location = useLocation();

  return useRoutes([
    { path: "/", element: <Home /> },
    { path: "/add-product", element: <AddProducts /> },
    {
      path: "/edit-product",
      element: <AddProducts productData={location.state} />,
    },
    {
      path: "/product-details",
      element: <ProductDetails product={location.state} />,
    },
    { path: "/cart-details", element: <CartPage /> },
  ]);
}
