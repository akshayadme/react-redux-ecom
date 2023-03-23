import React, { useState, useEffect } from "react";
import {
  Grid,
  Pagination,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Box,
  CircularProgress,
} from "@mui/material";
import axios from "axios";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import AddIcon from "@mui/icons-material/Add";
import BASEURL from "../BASE_URL";
import { addProducts, addToCart } from "../redux/action";
import { useSnackbar } from "notistack";

const Home = () => {
  // getting store data
  const data = useSelector((state) => state.products);

  // declare states
  const [productsData, setProductsData] = useState(data);
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState("default");
  const rowsPerPage = 10;

  const { enqueueSnackbar } = useSnackbar();

  // dispatch function
  const addToCartDispatch = useDispatch();
  const addProductDispatch = useDispatch();

  //  function to add to cart
  const handleAddToCart = (product) => {
    addToCartDispatch(addToCart(product));

    enqueueSnackbar("Product Added to Cart!", {
      variant: "success",
      autoHideDuration: 3000,
      anchorOrigin: { vertical: "bottom", horizontal: "right" },
    });
  };

  const handleChangePage = (event, value) => {
    setPage(value);
    goToTop();
  };

  useEffect(() => {
    if (data.length > 0) {
      setProductsData(data);
    }
  });

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // function to sort the products
  const handleSortChange = (e) => {
    const value = e.target.value;
    if (value === "default") {
      let data = productsData;
      data = data.sort((a, b) => a.id - b.id);
      setProductsData(data);
      setSort("default");
    }

    if (value === "ascending") {
      let data = productsData;

      data = data.sort((a, b) => a.price - b.price);
      setProductsData(data);
      setSort("ascending");
    }

    if (value === "descending") {
      let data = productsData;

      data = data.sort((a, b) => b.price - a.price);
      setSort("descending");
    }
  };

  // function to delete product
  const handleDeleteProduct = async (data) => {
    const response = await axios.delete(`${BASEURL}/${data.id}`);

    if (response.status === 200) {
      const filteredProducts = productsData.filter((el) => el.id !== data.id);

      addProductDispatch(addProducts([...filteredProducts]));

      enqueueSnackbar("Product Deleted Successfully!", {
        variant: "success",
        autoHideDuration: 3000,
        anchorOrigin: { vertical: "bottom", horizontal: "right" },
      });
    }
  };

  return (
    <>
      <div className="container">
        <div className="header">
          <h1>Our Products</h1>
        </div>
        <div className="top-section">
          <FormControl fullWidth style={{ width: "200px" }}>
            <InputLabel id="demo-simple-select-label">Sort By Price</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={sort}
              label="Sort By Price"
              onChange={handleSortChange}
              size="small"
            >
              <MenuItem value="default">Default</MenuItem>
              <MenuItem value="ascending"> Low to High</MenuItem>
              <MenuItem value="descending">High To Low</MenuItem>
            </Select>
          </FormControl>
          <Link
            to="/add-product"
            style={{ textDecoration: "none", color: "#fff" }}
          >
            <Button
              variant="contained"
              endIcon={<AddIcon />}
              style={{ backgroundColor: "#1b2741" }}
            >
              Add Product
            </Button>
          </Link>
        </div>
        <div className="products">
          {productsData.length === 0 ? (
            <Box
              sx={{
                display: "flex",
                width: "80vw",
                justifyContent: "center",
              }}
            >
              <CircularProgress color="inherit" />
            </Box>
          ) : (
            productsData
              .slice(
                (page - 1) * rowsPerPage,
                (page - 1) * rowsPerPage + rowsPerPage
              )
              .map((row, i) => (
                <Grid item xs={4} key={i}>
                  <ProductCard
                    data={row}
                    handleAddToCart={handleAddToCart}
                    handleDeleteProduct={handleDeleteProduct}
                  />
                </Grid>
              ))
          )}
        </div>

        <div className="pagination-section">
          <Pagination
            count={
              Math.floor(productsData.length / 10) +
              (productsData.length % 10 === 0 ? 0 : 1)
            }
            page={page}
            onChange={handleChangePage}
            variant="outlined"
            shape="rounded"
            sx={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "flex-end",
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
