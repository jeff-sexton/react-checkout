import React, { useEffect, useState } from "react";

import CheckoutBox from "./CheckoutBox";

import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  root: {
    width: 700,
    margin: "auto",
  },
  table: {
    minWidth: 650,
  },
  section: {
    minHeight: '100vh',
  },
});

const Cart = () => {
  const classes = useStyles();

  const [cartContents, setCartContents] = useState({ items: [], total: 0 });

  useEffect(() => {
    const cart = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : {};

    const cartArray = [];
    let total = 0;

    for (const itemId in cart) {
      total += cart[itemId].total;
      cartArray.push(cart[itemId]);
    }

    setCartContents({ items: cartArray, total });

    console.log(cart);
  }, []);

  const cartRows = cartContents.items.map((item) => (
    <TableRow key={item.product.id}>
      <TableCell component="th" scope="row">
        {item.product.title}
      </TableCell>
      <TableCell align="right">${item.price / 100.0}</TableCell>
      <TableCell align="right">{item.quantity}</TableCell>
      <TableCell align="right">${item.total / 100.0}</TableCell>
    </TableRow>
  ));

  return (
    <section className={classes.section}>
      Cart
      <TableContainer className={classes.root} component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Quantity</TableCell>
              <TableCell align="right">Total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cartRows}
            <TableRow>
              <TableCell>Total</TableCell>
              <TableCell />
              <TableCell />
              <TableCell>${cartContents.total / 100.0}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <CheckoutBox cartContents={cartContents} />
    </section>
  );
};

export default Cart;
