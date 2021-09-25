import React from 'react';
import { Container, Typography,  Grid } from '@material-ui/core';

import CartItem from './CartItem/CartItem';

const Cart = () => {

  return (
    <Container>
      <Typography>Carrinho de compras</Typography>
      <Grid>
        <CartItem></CartItem>
      </Grid>
    </Container>
  );
};

export default Cart;