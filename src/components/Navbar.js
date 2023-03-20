import React from "react";
import { AppBar, Badge, Grid, Toolbar, Typography } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Link } from "react-router-dom";

const Navbar = () => {
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
                <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
                  E-Cart
                </Link>
              </Typography>
            </Grid>
            <Grid item xs={3}></Grid>
            <Grid item xs={4}></Grid>
            <Grid item xs={2}></Grid>
            <Grid item xs={1}>
              <div className="cart-wrapper">
                <Link
                  to="/cart-details"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  <Badge
                    badgeContent={4}
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
