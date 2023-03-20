import React from "react";
import { Button, Container, Grid, Stack, TextField } from "@mui/material";

const AddProducts = () => {
  return (
    <Container sx={{ mt: 10 }}>
      <div className="cart-page">
        <div className="header">
          <h1>Add Products</h1>
        </div>
      </div>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            required
            id="outlined-required"
            label="Title"
            name="title"
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            id="outlined-disabled"
            label="Category"
            name="category"
            fullWidth
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
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            id="outlined-disabled"
            label="Price"
            name="price"
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            id="outlined-disabled"
            label="Discount Percentage"
            name="discountPercentage"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="outlined-disabled"
            label="Image URL"
            name="image"
            fullWidth
          />
        </Grid>
      </Grid>
      <Stack direction="row" spacing={2} sx={{ mt: 2 }} className="cart-button">
        <Button variant="contained" className="addtocart">
          Submit
        </Button>
        <Button variant="outlined" className="gotocart">
          Cancel
        </Button>
      </Stack>
    </Container>
  );
};

export default AddProducts;
