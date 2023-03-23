import { SnackbarProvider } from "notistack";
import React, { useEffect } from "react";
import BASEURL from "./BASE_URL";
import Navbar from "./components/Navbar";
import Router from "./Routes";
import axios from "axios";
import { addProducts } from "./redux/action";
import { useDispatch } from "react-redux";

function App() {
  const addProductDispatch = useDispatch();

  const fetchProductDetails = async () => {
    const response = await axios.get(BASEURL);

    if (response.status === 200) {
      // setProductsData(response.data);
      localStorage.setItem("products", JSON.stringify(response.data));
      addProductDispatch(addProducts(response.data));
    }
  };

  useEffect(() => {
    fetchProductDetails();
  }, []);

  return (
    <>
      <SnackbarProvider maxSnack={3}>
        <Navbar />
        <Router />
      </SnackbarProvider>
    </>
  );
}

export default App;
