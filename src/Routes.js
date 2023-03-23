import { Navigate, useRoutes, useLocation } from "react-router-dom";
import AddProducts from "./components/AddProducts";
import CartPage from "./components/CartPage";
import Home from "./components/Home";
import ProductDetails from "./components/ProductDetails";

export default function Router() {
  const location = useLocation();

  return useRoutes([
    { path: "/react-redux-ecom/", element: <Home /> },
    { path: "/react-redux-ecom/add-product", element: <AddProducts /> },
    {
      path: "/react-redux-ecom/edit-product",
      element: <AddProducts productData={location.state} />,
    },
    {
      path: "/react-redux-ecom/product-details",
      element: <ProductDetails product={location.state} />,
    },
    { path: "/react-redux-ecom/cart-details", element: <CartPage /> },
  ]);
}
