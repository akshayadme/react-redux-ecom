import React, { useState } from "react";
import { Grid, Stack, Item, Button } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StarIcon from "@mui/icons-material/Star";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import { addToCart } from "../redux/action";
import { useDispatch } from "react-redux";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";

const ProductDetails = ({ product }) => {
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const [cartAdded, setCartAdded] = useState(false);

  const addToCartDispatch = useDispatch();

  const handleAddToCart = () => {
    setCartAdded(true);
    addToCartDispatch(addToCart(product.product));

    enqueueSnackbar("Product Added to Cart!", {
      variant: "success",
      autoHideDuration: 3000,
      anchorOrigin: { vertical: "bottom", horizontal: "right" },
    });
  };

  return (
    <div className="product-details">
      <Grid container className="product-row" sx={{ mt: 10 }}>
        <Grid item xs={1}></Grid>
        <Grid item xs={5} className="left-sec">
          <img src={product.product.thumbnail} />
        </Grid>
        <Grid item xs={5} className="right-sec">
          <h1>{product.product.title}</h1>
          <p
            style={{ display: "flex", alignItems: "center", color: "#a4a4a4" }}
          >
            {product.product.category} <KeyboardArrowRightIcon />{" "}
            {product.product.brand}
          </p>
          <p style={{ margin: "20px 0" }}>{product.product.description}</p>
          <div className="rating" style={{ margin: "20px 0 10px" }}>
            {[...Array(5)].map((star, index) => {
              index += 1;
              return index <= Math.round(4.2) ? (
                <StarIcon key={index} />
              ) : (
                <StarOutlineIcon key={index} />
              );
            })}
          </div>
          <div className="price" style={{ margin: "0", width: "160px" }}>
            <p className="discount-price" style={{ fontSize: "2rem" }}>
              $ {product.product.price}
            </p>
            <p className="original-price">
              $
              {parseInt(
                (product.product.price / 100) *
                  product.product.discountPercentage +
                  product.product.price
              )}
            </p>
          </div>
          <div className="cart-button" style={{ margin: "20px 0" }}>
            <Button
              variant="contained"
              className="addtocart"
              onClick={handleAddToCart}
              disabled={cartAdded}
            >
              {cartAdded ? "Product Added" : "Add to Cart"}
            </Button>

            <Button
              variant="outlined"
              className="gotocart"
              onClick={() => navigate("/react-redux-ecom/cart-details")}
            >
              Go to Cart
            </Button>
          </div>
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
    </div>
  );
};

export default ProductDetails;
