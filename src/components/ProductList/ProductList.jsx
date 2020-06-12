import React from "react";
import Product from "./Product";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  section: {
    minHeight: "100vh",
  },
}));

const ProductList = ({ products }) => {
  const classes = useStyles();

  const productComponents = products.map((product) => (
    <Product key={product.id} product={product} />
  ));

  return (
    <section className={classes.section}>
      <Grid container className={classes.root} spacing={2}>
        {productComponents}
      </Grid>
    </section>
  );
};

export default ProductList;
