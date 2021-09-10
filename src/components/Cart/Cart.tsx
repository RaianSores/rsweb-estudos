import React from 'react';
import { Container, Typography, Button, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

import CartItem from './CartItem/CartItem';
import useStyles from './styles';

const Cart = () => {
  const classes = useStyles();
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