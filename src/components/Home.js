import {
  Grid,
  Pagination,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
import products from "../products.json";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";

const Home = () => {
  const [productsData, setProductsData] = useState(products.products);
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState("default");
  const rowsPerPage = 10;

  const handleChangePage = (event, value) => {
    setPage(value);
    goToTop();
  };
  const fetchProductDetails = async () => {
    const response = await axios.get(`https://fakestoreapi.com/products`);
  };

  useEffect(() => {
    // fetchProductDetails();
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleSortChange = (e) => {
    const value = e.target.value;
    if (value === "default") {
      let data = products.products;
      data = data.sort((a, b) => a.id - b.id);
      setProductsData(data);
      setSort("default");
    }

    if (value === "ascending") {
      let data = products.products;

      data = data.sort((a, b) => a.price - b.price);
      setProductsData(data);
      setSort("ascending");
    }

    if (value === "descending") {
      let data = products.products;

      data = data.sort((a, b) => b.price - a.price);
      setSort("descending");
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
          {productsData
            .slice(
              (page - 1) * rowsPerPage,
              (page - 1) * rowsPerPage + rowsPerPage
            )
            .map((row, i) => (
              <Grid item xs={4} key={i}>
                <ProductCard data={row} />
              </Grid>
            ))}
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
