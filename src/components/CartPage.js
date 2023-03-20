import React from "react";
import {
  Container,
  IconButton,
  TextField,
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

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function CartDetails() {
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
              <TableCell align="center">
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
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">
                  <TextField
                    id="outlined-basic"
                    label="Quantity"
                    variant="outlined"
                    type="number"
                    size="small"
                    defaultValue="1"
                  />
                </TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">
                  <IconButton aria-label="delete" color="error">
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
