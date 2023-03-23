import React from "react";
import {
  Container,
  IconButton,
  Typography,
  Paper,
  TableRow,
  TableHead,
  TableContainer,
  TableCell,
  TableBody,
  Table,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementProductCount,
  incrementProductCount,
  removeFromCart,
  updateCartError,
} from "../redux/action";
import { useState } from "react";
import { useEffect } from "react";
import { useSnackbar } from "notistack";

export default function CartDetails() {
  const { enqueueSnackbar } = useSnackbar();
  const CartItem = useSelector((state) => state.cart);
  const CartError = useSelector((state) => state.cartError);

  const [cartItem, setCartItem] = useState(CartItem);

  const incCountDispatch = useDispatch();
  const decCountDispatch = useDispatch();
  const deleteCartDispatch = useDispatch();
  const showErrorDispatch = useDispatch();

  const showError = () => {
    enqueueSnackbar("Maximum/Minimum cart limit reached!", {
      variant: "error",
      autoHideDuration: 3000,
      anchorOrigin: { vertical: "bottom", horizontal: "right" },
    });

    showErrorDispatch(updateCartError());
  };

  useEffect(() => {
    if (CartError) {
      showError();
    }
  });

  const handleIncCount = (data) => {
    incCountDispatch(incrementProductCount(data));
  };

  const handleDecCount = (data) => {
    decCountDispatch(decrementProductCount(data));
  };

  const handleDeleteCart = (data) => {
    deleteCartDispatch(removeFromCart(data));
  };

  return (
    <Container fixed sx={{ mt: 10 }}>
      <div className="cart-page">
        <div className="header">
          <h1>Products Selected</h1>
        </div>
      </div>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant="h6" gutterBottom>
                  Product Name
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Typography variant="h6" gutterBottom>
                  Price
                </Typography>
              </TableCell>
              <TableCell align="left">
                <Typography variant="h6" gutterBottom>
                  Quantity
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Typography variant="h6" gutterBottom>
                  Total Price
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Typography variant="h6" gutterBottom>
                  Action
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {CartItem.map((row) => (
              <TableRow
                key={row.title}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.title}
                </TableCell>
                <TableCell align="right">{row.price}</TableCell>
                <TableCell align="right">
                  <div className="count-wrapper">
                    <span className="minus" onClick={() => handleDecCount(row)}>
                      -
                    </span>
                    <span className="num">{row.qty}</span>
                    <span className="plus" onClick={() => handleIncCount(row)}>
                      +
                    </span>
                  </div>
                </TableCell>
                <TableCell align="right">{row.totalPrice}</TableCell>
                <TableCell align="right">
                  <IconButton
                    aria-label="delete"
                    color="error"
                    onClick={() => handleDeleteCart(row)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
