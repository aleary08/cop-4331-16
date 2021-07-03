import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

import NavBar from '../components/NavBar';
import background from "../img/Topo.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundImage: `url(${background})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
}));

const LoginPage = () =>
{
    const classes = useStyles();
    return(
      <div className={classes.root}>
        <CssBaseline />
        <NavBar />
      </div>
    );
};

export default LoginPage;
