import * as React from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Profile } from "../Profile/Profile";
import { createMuiTheme, Menu, MenuItem, MuiThemeProvider } from "@material-ui/core";
import PopupState, { bindMenu, bindTrigger } from "material-ui-popup-state";

import styles from '../Header/Header.module.scss';

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

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#00FF80',
      main: '#00CC66',
      dark: '#00994D',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

export default function Header() {
  const classes = useStyles();

  return (
    <div className={styles.container}>
      <AppBar position="absolute">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MuiThemeProvider theme={theme}>
              <PopupState variant="popover" popupId="popup-menu">
                {(popupState) => (
                  <React.Fragment>
                    <Button variant="contained" {...bindTrigger(popupState)} color="primary">
                      <MenuIcon color="action" />
                    </Button>
                    <Menu {...bindMenu(popupState)}>
                      <MenuItem onClick={popupState.close}>Home</MenuItem>
                      <MenuItem onClick={popupState.close}>Dashboard</MenuItem>
                      <MenuItem onClick={popupState.close}>Contatos</MenuItem>
                    </Menu>
                  </React.Fragment>
                )}
              </PopupState>
            </MuiThemeProvider>

          </IconButton>
          <Typography variant="h5" className={classes.title} component="div">
            Mindset
          </Typography>
          <Profile />
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}