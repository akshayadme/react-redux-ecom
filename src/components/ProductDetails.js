import React from "react";
import { Grid, Stack, Item, Button } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StarIcon from "@mui/icons-material/Star";
import StarOutlineIcon from "@mui/icons-material/StarOutline";

const ProductDetails = () => {
  return (
    <div className="product-details">
      <Grid container className="product-row" sx={{ mt: 10 }}>
        <Grid item xs={1}></Grid>
        <Grid item xs={5} className="left-sec">
          <img src="https://i.dummyjson.com/data/products/1/thumbnail.jpg" />
          <div className="small-img">
            <div className="img-col">
              <img
                src="https://i.dummyjson.com/data/products/1/1.jpg"
                width="100%"
              />
            </div>
            <div className="img-col">
              <img
                src="https://i.dummyjson.com/data/products/1/2.jpg"
                width="100%"
              />
            </div>
            <div className="img-col">
              <img
                src="https://i.dummyjson.com/data/products/1/3.jpg"
                width="100%"
              />
            </div>
            <div className="img-col">
              <img
                src="https://i.dummyjson.com/data/products/1/4.jpg"
                width="100%"
              />
            </div>
          </div>
        </Grid>
        <Grid item xs={5} className="right-sec">
          <h1>Iphone 9</h1>
          <p
            style={{ display: "flex", alignItems: "center", color: "#a4a4a4" }}
          >
            Apple <KeyboardArrowRightIcon /> Iphone
          </p>
          <p style={{ margin: "20px 0" }}>
            Samsung's new variant which goes beyond Galaxy to the Universe
          </p>
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
              $ {1500}
            </p>
            <p className="original-price">
              ${parseInt((1500 / 100) * 13 + 1500)}
            </p>
          </div>
          <div className="cart-button" style={{ margin: "20px 0" }}>
            <Button variant="contained" className="addtocart">
              Add to Cart
            </Button>

            <Button variant="outlined" className="gotocart">
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
