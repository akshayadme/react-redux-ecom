import React from "react";
import {
  AppBar,
  Box,
  Button,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <AppBar
        sx={{
          backgroundImage:
            "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)",
        }}
      >
        <Toolbar>
          <Grid container sx={{ placeItems: "center" }}>
            <Grid item xs={2}>
              <Typography variant="h6" gutterBottom sx={{ ml: 5 }}>
                E-Cart
              </Typography>
            </Grid>
            <Grid item xs={3}></Grid>
            <Grid item xs={4}>
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                <Link to="/" style={{ textDecoration: "none" }}>
                  <Button
                    sx={{
                      my: 2,
                      color: "white",
                      display: "block",
                      border: "none",
                      borderRadius: "0",
                    }}
                  >
                    Products
                  </Button>
                </Link>
                <Link to="/add-product" style={{ textDecoration: "none" }}>
                  <Button
                    sx={{
                      my: 2,
                      color: "white",
                      display: "block",
                      border: "none",
                      borderRadius: "0",
                    }}
                  >
                    Add Products
                  </Button>
                </Link>
              </Box>
            </Grid>
            <Grid item xs={2}></Grid>
            <Grid item xs={1} sx={{ justifyContent: "flex-end" }}>
              <IconButton aria-label="add to shopping cart">
                <AddShoppingCartIcon style={{ color: "white" }} />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
