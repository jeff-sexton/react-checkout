import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  modal: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`,
  },
}));

const CheckoutBox = ({ cartContents }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const submitPayment = () => {
    const submission = {
      lineItems: cartContents.items,
      mode: "payment",
      successUrl: "https://your-website.com/success",
      cancelUrl: "https://your-website.com/canceled",
    };

    console.log(submission);
  };

  const body = (
    <div className={classes.modal}>
      <h2 id="checkout-modal-title">Checkout</h2>
      <p id="checkout-modal-description">
        Your total comes to ${cartContents.total / 100.0}
      </p>

      <Button onClick={submitPayment} variant="contained" color="primary">
        Submit Payment
      </Button>
    </div>
  );
  return (
    <div>
      <Button onClick={handleOpen} variant="contained" color="primary">
        Checkout
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="checkout-modal-title"
        aria-describedby="checkout-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
};

export default CheckoutBox;
