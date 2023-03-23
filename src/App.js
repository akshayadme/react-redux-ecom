import { SnackbarProvider } from "notistack";
import React, { useEffect } from "react";
import BASEURL from "./BASE_URL";
import Navbar from "./components/Navbar";
import Router from "./Routes";
import axios from "axios";
import { addProducts } from "./redux/action";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function App() {
  const addProductDispatch = useDispatch();
  const navigate = useNavigate();
  const fetchProductDetails = async () => {
    const response = await axios.get(BASEURL);

    if (response.status === 200) {
      addProductDispatch(addProducts(response.data));

      navigate("/react-redux-ecom/");
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
