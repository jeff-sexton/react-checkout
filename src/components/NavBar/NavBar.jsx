import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

import HomeIcon from '@material-ui/icons/Home';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import { PRODUCTS, CART } from "../App";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const NavBar = ({ setVisualMode }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton onClick={() => setVisualMode(PRODUCTS)} edge="start" className={classes.menuButton} color="inherit">
            <HomeIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Perk Shopping
          </Typography>

          <IconButton onClick={() => setVisualMode(CART)} color="inherit">
            <ShoppingCartIcon/>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;

// <nav>
//   <button onClick={() => setVisualMode(PRODUCTS)}>Products</button>
//   NavBar
//   <button onClick={() => setVisualMode(CART)}>Cart</button>
// </nav>