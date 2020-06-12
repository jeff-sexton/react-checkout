import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    minHeight: 275,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  addButton: {
    marginLeft: "auto",
  },
});

const Product = ({ product }) => {
  const classes = useStyles();

  const { id, title, thumbnailUrl, priceCents } = product;

  const addToCart = () => {
    const cart = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : {};

    if (cart[id]) {
      cart[id].quantity += 1;
      cart[id].total = cart[id].quantity * priceCents;
    } else {
      cart[id] = {
        product,
        quantity: 1,
        price: priceCents,
        total: priceCents,
      };
    }

    localStorage.setItem("cart", JSON.stringify(cart));
  };

  return (
    <Grid item md={3} sm={6} xs={12}>
      <Card className={classes.root} variant="outlined">
        <CardMedia
          className={classes.media}
          image={thumbnailUrl}
          title="Product"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {title}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            ${priceCents / 100}
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton
            className={classes.addButton}
            onClick={addToCart}
            color="inherit"
          >
            <AddShoppingCartIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Product;
