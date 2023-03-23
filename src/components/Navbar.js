import React, { useState, useEffect } from "react";
import { AppBar, Badge, Grid, Toolbar, Typography } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [cartCount, setCartCount] = useState(0);

  const stateCartCount = useSelector((state) => state.cartCount);

  const handleCartCount = () => {
    setCartCount(stateCartCount);
  };

  useEffect(() => {
    handleCartCount();
  });

  return (
    <>
      <AppBar
        sx={{
          backgroundColor: "#1b2741",
        }}
      >
        <Toolbar>
          <Grid container sx={{ placeItems: "center" }}>
            <Grid item xs={2}>
              <Typography variant="h6" gutterBottom sx={{ ml: 5 }}>
                <Link
                  to="/react-redux-ecom/"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  E-Cart
                </Link>
              </Typography>
            </Grid>
            <Grid item xs={3}></Grid>
            <Grid item xs={3} style={{ display: "flex" }}>
              <Typography variant="body2" gutterBottom sx={{ ml: 5 }}>
                <Link
                  to="/react-redux-ecom/"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  Products
                </Link>
              </Typography>
              <Typography variant="body2" gutterBottom sx={{ ml: 5 }}>
                <Link
                  to="/react-redux-ecom/add-product"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  Add Products
                </Link>
              </Typography>
            </Grid>
            <Grid item xs={3}></Grid>
            <Grid item xs={1}>
              <div className="cart-wrapper">
                <Link
                  to="/react-redux-ecom/cart-details"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  <Badge
                    badgeContent={cartCount}
                    color="error"
                    style={{ cursor: "pointer" }}
                  >
                    <AddShoppingCartIcon color="white" />
                  </Badge>
                </Link>
              </div>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
