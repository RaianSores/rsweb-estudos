import React from 'react';
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@material-ui/core';

import useStyles from './styles';

const CartItem = () => {
  const classes = useStyles();

  return (
    <Card className="cart-item">
      <CardMedia className={classes.media} />
      <CardContent className={classes.cardContent}>
        <Typography variant="h4">Nome item</Typography>
        <Typography variant="h5">Total</Typography>
      </CardContent>
      <CardActions className={classes.cartActions}>
        <div className={classes.buttons}>
          <Button type="button" size="small">-</Button>
          <Typography>&nbsp; Quantidade &nbsp;</Typography>
          <Button type="button" size="small">+</Button>
        </div>
        <Button variant="contained" type="button" color="secondary">Remove</Button>
      </CardActions>
    </Card>
  );
};

export default CartItem;