import React, { useState } from 'react';
import axios from 'axios';
import md5 from './md5.js';
import GridItem from "./Grid/GridItem.js";
import GridContainer from "./Grid/GridContainer.js";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: "30%",
  },
}));

function Login()
{

    var bp = require('./Path.js');
    var storage = require('../tokenStorage.js');

    var loginName;
    var loginPassword;
  
    const [message,setMessage] = useState('');
    const classes = useStyles();
    

    const doLogin = async event => 
    {
        event.preventDefault();
        var hash = md5( loginPassword.value );
        var obj = {login:loginName.value,password:hash};
        
       
        var js = JSON.stringify(obj);
        alert (js);
        var config = 
        {
            method: 'post',
            url: bp.buildPath('api/login'),	
            headers: 
            {
                'Content-Type': 'application/json'
            },
            data: js
        };

        axios(config)
            .then(function (response) 
        {
            var res = response.data;
            console.log(res.arr + "we are here");
            var acessToken = res.token;
          alert(JSON.stringify(acessToken));
            
            if (res.error) 
            {
                setMessage('User/Password combination incorrect');
            }
            else 
            {	
                storage.storeToken(acessToken);
              //  alert("res stored: "+ res.token.id);
                var jwt = require('jsonwebtoken');
    
                var ud = jwt.decode(storage.retrieveToken(),{complete:true});
                var userId = ud.payload.userId;
                var firstName = ud.payload.firstName;
                var lastName = ud.payload.lastName;
                //  alert(userId);
                var user = {firstName:firstName,lastName:lastName,id:userId}

                localStorage.setItem('user_data', JSON.stringify(user));
                window.location.href = '/dashboard';
            }
        })
        .catch(function (error) 
        {
            console.log(error);
        });
    }
    

    return(
        

<div id="loginDiv">
        <span id="inner-title">PLEASE LOG IN</span><br />
        <input type="text" id="loginName" placeholder="Username" ref={(c) => loginName = c}  /><br />
        <input type="password" id="loginPassword" placeholder="Password" ref={(c) => loginPassword = c} /><br />
        <input type="submit" id="loginButton" className="buttons" value = "Do It"
          onClick={doLogin} />
        <span style={{color: "white"}} id="loginResult">{message}</span>
     </div>
      
      
    );
};

export default Login;
