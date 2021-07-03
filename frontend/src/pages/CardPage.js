import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import PageTitle from '../components/PageTitle';
import LoggedInName from '../components/LoggedInName';
import CardUI from '../components/CardUI';
import Portal from '../components/Portal';
import background from "../img/Topo.jpg";


import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// core components
// import Admin from "../layouts/Admin.js";
// import RTL from "../layouts/RTL.js";

/* import "../assets/css/material-dashboard-react.css?v=1.10.0";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/admin" component={Admin} />
      <Route path="/rtl" component={RTL} />
      <Redirect from="/" to="/admin/dashboard" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
); */

const useStyles = makeStyles((theme) => ({
    root: {
      minHeight: '100vh',
      backgroundImage: `url(${background})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    },
  }));

const CardPage = () =>
{
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <PageTitle />
            <LoggedInName />
            <Portal />
            {/* <CardUI /> */}
            
        </div>
    );
}

export default CardPage;
