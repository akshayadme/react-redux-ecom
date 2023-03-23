import React, { useState } from "react";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Button, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ data, handleAddToCart, handleDeleteProduct }) => {
  const navigate = useNavigate();
  const [cartAdded, setCartAdded] = useState(false);

  const navigateToProductDetails = () => {
    navigate("product-details", {
      state: {
        product: data,
      },
    });
  };

  const navigateToEdit = () => {
    navigate("/react-redux-ecom/edit-product", {
      state: {
        id: data.id,
        price: data.price,
        title: data.title,
        category: data.category,
        description: data.description,
        thumbnail: data.thumbnail,
        discountPercentage: data.discountPercentage,
        brand: data.brand,
      },
    });
  };

  return (
    <div className="product">
      <div className="action-button">
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="label"
          onClick={navigateToEdit}
        >
          <ModeEditIcon />
        </IconButton>
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="label"
          onClick={() => handleDeleteProduct(data)}
        >
          <DeleteForeverIcon />
        </IconButton>
      </div>
      <div className="image">
        <img src={data.thumbnail} alt="" />
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
        {!cartAdded ? (
          <Button
            variant="contained"
            className="addtocart"
            onClick={() => {
              handleAddToCart(data);
              setCartAdded(true);
            }}
          >
            Add to Cart
          </Button>
        ) : (
          <Button
            variant="outlined"
            className="gotocart"
            onClick={() => {
              navigate("/react-redux-ecom/cart-details");
            }}
          >
            Go to Cart
          </Button>
        )}

        <Button
          variant="outlined"
          className="gotocart"
          onClick={navigateToProductDetails}
        >
          View Details
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
