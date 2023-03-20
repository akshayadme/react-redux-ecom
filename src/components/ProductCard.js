import React from "react";
import StarIcon from "@mui/icons-material/Star";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Button, IconButton } from "@mui/material";
import { Link } from "react-router-dom";

const ProductCard = ({ data }) => {
  return (
    <div className="product">
      <div className="action-button">
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="label"
        >
          <input hidden accept="image/*" type="file" />
          <ModeEditIcon />
        </IconButton>
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="label"
        >
          <input hidden accept="image/*" type="file" />
          <DeleteForeverIcon />
        </IconButton>
      </div>
      <div className="image">
        <img src={data.images[0]} alt="" />
      </div>
      <div className="info">
        <div className="title">
          <h3>{data.title}</h3>
        </div>
        <div className="price">
          <p className="discount-price">$ {data.price}</p>
          <p className="original-price">
            $
            {parseInt(
              (data.price / 100) * data.discountPercentage + data.price
            )}
          </p>
        </div>
      </div>

      <div className="cart-button">
        <Button variant="contained" className="addtocart">
          Add to Cart
        </Button>
        <Link
          to="/product-details"
          style={{ textDecoration: "none", color: "#fff" }}
        >
          <Button variant="outlined" className="gotocart">
            View Details
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
