import React, { useState } from "react";
import { Button, Container, Grid, Stack, TextField } from "@mui/material";
import axios from "axios";
import BASEURL from "../BASE_URL";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addProducts } from "../redux/action";
import { useSnackbar } from "notistack";
import { useEffect } from "react";

const AddProducts = ({ productData }) => {
  const { enqueueSnackbar } = useSnackbar();
  const params = useLocation();

  const products = useSelector((state) => state.products);
  const addProductDispatch = useDispatch();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [discountPercentage, setDiscountPercentage] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [thumbnail, setThumbmail] = useState("");
  const [brand, setBrand] = useState("");

  const handleAddProduct = async (e) => {
    e.preventDefault();
    const data = {
      id: Date.now(),
      title,
      price: parseInt(price),
      category,
      thumbnail,
      description,
      discountPercentage: parseInt(discountPercentage),
      brand,
    };

    const response = await axios.post(BASEURL, data);

    if (response.status === 201) {
      addProductDispatch(addProducts([...products, data]));
      navigate("/react-redux-ecom/");
    }

    enqueueSnackbar("Product Added Successfully!", {
      variant: "success",
      autoHideDuration: 3000,
      anchorOrigin: { vertical: "bottom", horizontal: "right" },
    });

    setTitle("");
    setCategory("");
    setDescription("");
    setThumbmail("");
    setPrice("");
    setDiscountPercentage("");
  };

  const handleEditProduct = async (e) => {
    e.preventDefault();

    const data = {
      id: productData.id,
      title,
      price: parseInt(price),
      category,
      thumbnail,
      description,
      discountPercentage: parseInt(discountPercentage),
      brand,
    };

    const response = await axios.put(`${BASEURL}/${productData.id}`, data);

    if (response.status === 200) {
      const filteredProducts = products.filter(
        (el) => el.id !== productData.id
      );

      addProductDispatch(addProducts([...filteredProducts, data]));
      navigate("/react-redux-ecom/");
    }

    enqueueSnackbar("Product Updated Successfully!", {
      variant: "success",
      autoHideDuration: 3000,
      anchorOrigin: { vertical: "bottom", horizontal: "right" },
    });

    setTitle("");
    setCategory("");
    setDescription("");
    setThumbmail("");
    setPrice("");
    setDiscountPercentage("");
  };

  useEffect(() => {
    if (productData) {
      setTitle(productData.title);
      setCategory(productData.category);
      setDescription(productData.description);
      setThumbmail(productData.thumbnail);
      setPrice(productData.price);
      setDiscountPercentage(productData.discountPercentage);
      setBrand(productData.brand);
    }
  }, []);

  return (
    <Container sx={{ mt: 10 }}>
      <div className="cart-page">
        <div className="header">
          <h1>Add Products</h1>
        </div>
      </div>
      <form
        onSubmit={(e) => {
          params.pathname === "/react-redux-ecom/edit-product"
            ? handleEditProduct(e)
            : handleAddProduct(e);
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              required
              id="outlined-required"
              label="Title"
              name="title"
              fullWidth
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              id="outlined-disabled"
              label="Category"
              name="category"
              fullWidth
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="outlined-disabled"
              label="Description"
              name="description"
              fullWidth
              multiline
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              id="outlined-disabled"
              label="Price"
              name="price"
              fullWidth
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              id="outlined-disabled"
              label="Discount Percentage"
              name="discountPercentage"
              fullWidth
              value={discountPercentage}
              onChange={(e) => setDiscountPercentage(e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              id="outlined-disabled"
              label="Image URL"
              name="image"
              fullWidth
              value={thumbnail}
              onChange={(e) => setThumbmail(e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              id="outlined-disabled"
              label="Brand"
              name="brand"
              fullWidth
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
            />
          </Grid>
        </Grid>
        <Stack
          direction="row"
          spacing={2}
          sx={{ mt: 2 }}
          className="cart-button"
        >
          <Button variant="contained" className="addtocart" type="submit">
            Submit
          </Button>
          <Button variant="outlined" className="gotocart">
            Cancel
          </Button>
        </Stack>
      </form>
    </Container>
  );
};

export default AddProducts;
