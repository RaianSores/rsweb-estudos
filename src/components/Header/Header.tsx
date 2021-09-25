import * as React from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Link from 'next/link';

import styles from '../Header/Header.module.scss';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 2,
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={styles.container}>
      <AppBar position="absolute">
        <Toolbar>
          <Typography variant="h5" className={classes.title} component="div">
            <Link href="/">
              <Button color="inherit">
                <img src="favicon.ico" alt="Mindset" />
                <h1>Mindset</h1>
              </Button>
            </Link>
          </Typography>
          <Button color="inherit">
            <Link href="/Login">
              <a> Sign in</a>
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}