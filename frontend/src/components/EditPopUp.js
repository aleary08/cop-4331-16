// CardUI() contains the main page for adding, searching, editing, and deleting assets.

import React, { useState, useEffect } from 'react';
import {Form} from "react-bootstrap"
import axios from 'axios';
import Box from '@material-ui/core/Box';
import Grid from "@material-ui/core/Grid";
import GridItem from "./Grid/GridItem.js";
import GridContainer from "./Grid/GridContainer.js";
import background from "../img/Topo.jpg";
import Edit from '@material-ui/icons/Edit';
import Book from './Book.js';


function EditPopUp(props)
{
    //alert(global.theFlag);
    var bp = require('./Path.js');
    var storage = require('../tokenStorage.js');
    const jwt = require("jsonwebtoken");
    const { tableHead, tableData, tableHeaderColor } = props;
    const styles = {
        paperContainer: {
            backgroundImage: `url(${background})`,
            color: 'white',
            borderRadius: 10,
           
        },
        coolButton: {
            borderRadius: 10,
            textAlign:'center',
            marginRight:40,
            marginLeft:40,
            marginTop:10,
            
        }
    };
    
    var card = '';
    var search = '';
    var Name = '';
    var Brand = '';
    var Model='';
    var Category='';
    var Replacement='';
    var Location=''; 
    var Serial=''
    var flag = 0;
    //document.getElementById('addSerialNumber').addEventListener("click",addInput);

    const [message,setMessage] = useState('');
    const [searchResults,setResults] = useState('');
    const [cardList,setCardList] = useState('');
    const [name, setState] = useState('');
    

    var _ud = localStorage.getItem('user_data');
    var ud = JSON.parse(_ud);
    var userId = ud.id;
    var firstName = ud.firstName;
    var lastName = ud.lastName;
	
    function handleChange(e) {
        console.log(e.target.value);
      }

    const editItem = async event => 
    {
      
       var tok = storage.retrieveToken();

       var input = document.getElementsByName('arr');
    
       flag = props.itemid;
       

       
       var _ud = localStorage.getItem('user_data');
       var ud = JSON.parse(_ud);
       var userId = ud.id;
       alert("UserId: "+userId);
 
       alert("flag is: " +flag);
       
   
      
     
      var tok = storage.retrieveToken();
      // Currently sending a string
      var obj = {userId: userId, Name:Name.value, Brand:Brand.value, Model:Model.value, 
        Category: Category.value, Location:Location.value, 
        Replacement:Replacement.value, Serial: Serial.value, itemId:global.theFlag, jwtToken:tok }

      var js = JSON.stringify(obj);
      //alert(js);

       var config = 
       {
           method: 'post',
           url: bp.buildPath('api/edititem'),	
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
            // var retTok = res.jwtToken;
            alert(Object.values(res));
   
           if( res.error.length > 0 )
           {
               setMessage( "API Error:" + res.error );
           }
           else
           {
            // _theResults = res.results;
            // alert(_theResults);
               setMessage('Item has been edited');
               
               // storage.storeToken( {accessToken:retTok} );
           }
       })
       .catch(function (error) 
       {
           console.log(error);
       });
       

    };

    

    
    return(
        <div style={styles.paperContainer} id="cardPopUp">
           
        
        {/* <input style={styles.paperContainer} type="text" id="cardText" value={global.theName} 
            ref={(c) => Name = c} /> */}
            <Form.Control style={styles.paperContainer} defaultValue={global.theName} onChange={(e) => setState(e.target.value)} ref={(c) => Name = c}  />
            
            <br />
            
            <Form.Control style={styles.paperContainer} defaultValue={global.theModel} onChange={(e) => setState(e.target.value)} ref={(c) => Model = c}  />
            <br />
            <Form.Control style={styles.paperContainer} defaultValue={global.theCategory} onChange={(e) => setState(e.target.value)} ref={(c) => Category = c}  />
            <br />
            
            <Form.Control style={styles.paperContainer} defaultValue={global.theLocation} onChange={(e) => setState(e.target.value)} ref={(c) => Location = c}  />
            <br />
             
            <Form.Control style={styles.paperContainer} defaultValue={global.theBrand} onChange={(e) => setState(e.target.value)} ref={(c) => Brand = c}  />
            <br />
            
            <Form.Control style={styles.paperContainer} defaultValue={global.theReplacement} onChange={(e) => setState(e.target.value)} ref={(c) => Replacement = c}  />
            <br />
            
            <Form.Control style={styles.paperContainer} defaultValue={global.theSerial} onChange={(e) => setState(e.target.value)} ref={(c) => Serial = c}  />
            <br />
            <br />
        <button onClick={editItem} style={styles.coolButton} type="button" id="addCardButton" className="buttons" 
            > Edit Item </button><br />
        <span id="cardAddResult">{message}</span>
        </div>
        // </Grid>
       
    );
}

export default EditPopUp;
