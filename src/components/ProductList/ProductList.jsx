import React from "react";
import Product from "./Product";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const ProductList = ({ products }) => {
  const classes = useStyles();

  const productComponents = products.map((product) => (
    <Product key={product.id} product={product} />
  ));

  return (
    <section>
      <Grid container className={classes.root} spacing={2}>
        {productComponents}
      </Grid>
    </section>
  );
};

export default ProductList;
