import { Navigate, useRoutes } from "react-router-dom";
import AddProducts from "./components/AddProducts";
import CartPage from "./components/CartPage";
import Home from "./components/Home";
import ProductDetails from "./components/ProductDetails";

export default function Router() {
  return useRoutes([
    { path: "/", element: <Home /> },
    { path: "/add-product", element: <AddProducts /> },
    { path: "/product-details", element: <ProductDetails /> },
    { path: "/cart-details", element: <CartPage /> },
  ]);
}
