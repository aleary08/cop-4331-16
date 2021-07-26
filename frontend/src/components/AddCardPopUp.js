import React, { useState } from 'react';
import axios from 'axios';
import GridItem from "./Grid/GridItem.js";
import GridContainer from "./Grid/GridContainer.js";
import Table from "./Table/Table.js";
//import Tasks from "../../components/Tasks/Tasks.js";
//import CustomTabs from "../../components/CustomTabs/CustomTabs.js";
//import Danger from "../../components/Typography/Danger.js";
import Card from "./Card/Card.js";
import CardHeader from "./Card/CardHeader.js";
import CardIcon from "./Card/CardIcon.js";
import CardBody from "./Card/CardBody.js";
import CardFooter from "./Card/CardFooter.js";
import { makeStyles } from "@material-ui/core/styles";
import styles from "../assets/jss/material-dashboard-react/views/dashboardStyle.js";
import Update from "@material-ui/icons/Update";
import Search from "@material-ui/icons/Search";
// core components
import CustomInput from "./CustomInput/CustomInput.js";
import Button from "./CustomButtons/Button.js";
import Box from '@material-ui/core/Box';
import Edit from "@material-ui/icons/Edit";
import Close from "@material-ui/icons/Close";
import Check from "@material-ui/icons/Check";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";

function CardUI()
{

    var bp = require('./Path.js');
    var storage = require('../tokenStorage.js');
    const jwt = require("jsonwebtoken");
    
    var card = '';
    var search = '';
    var Name = '';
    var Brand = '';
    var Model='';
    var Category='';
    var Replacement='';
    var Location=''; 
    var num = 1;
    //document.getElementById('addSerialNumber').addEventListener("click",addInput);

    const [message,setMessage] = useState('');
    const [searchResults,setResults] = useState('');
    const [cardList,setCardList] = useState('');

    const useStyles = makeStyles(styles);
    const classes = useStyles();

    var editButton = <Edit
    className={
      classes.tableActionButtonIcon + " " + classes.edit
    }/>

    var buttons = 
    <Box>
        <Tooltip
            id="tooltip-top"
            title="Edit"
            placement="top"
            classes={{ tooltip: classes.tooltip }}
        >
            <IconButton
                aria-label="Close"
                className={classes.tableActionButton}
            >     
                <Box pr={1}>
                    <Edit
                     className={
                     classes.tableActionButtonIcon + " " + classes.edit
                    }/>
                </Box>
            </IconButton>
        </Tooltip>
        <Tooltip
            id="tooltip-top"
            title="Delete"
            placement="top"
            classes={{ tooltip: classes.tooltip }}
         >
            <IconButton>
             <Box >
                <Close
                    className={
                    classes.tableActionButtonIcon + " " + classes.close
                    }
                />
            </Box>
            </IconButton>
        </Tooltip>
    </Box>
  

    var _ud = localStorage.getItem('user_data');
    var ud = JSON.parse(_ud);
    var userId = ud.id;
    var firstName = ud.firstName;
    var lastName = ud.lastName;
	
    // const addCard = async event => 
    // {
	//     event.preventDefault();
        

    //    var tok = storage.retrieveToken();
    //    var obj = {userId:userId,card:card.value,jwtToken:tok};
    //    var js = JSON.stringify(obj);

    //    alert("UserId: "+localStorage.getItem('user_data'));

    //     var config = 
    //     {
    //         method: 'post',
    //         url: bp.buildPath('api/addcard'),	
    //         headers: 
    //         {
    //             'Content-Type': 'application/json'
    //         },
    //         data: js
    //     };
    
    //     axios(config)
    //         .then(function (response) 
    //     {
    //         var res = response.data;
    //         var retTok = res.jwtToken;
    
    //         if( res.error.length > 0 )
    //         {
    //             setMessage( "Error:" + res.error );
    //         }
    //         else
    //         {
    //             setMessage('Card has been added');
    //             storage.storeToken( {accessToken:retTok} );
    //         }
    //     })
    //     .catch(function (error) 
    //     {
    //         console.log(error);
    //     });

	// };
    const addItem = async event => 
    {
       event.preventDefault();

     var tok = storage.retrieveToken();

       var input = document.getElementsByName('arr');
      // alert("Length: "+ input.length);
       var SN = [];
       for (var i = 0; i < input.length; i++) {
        var a = input[i];
        SN.push(a.value);
       var k = k + "array[" + i + "].value= "
                           + a.value + " ";
    }
  //  alert("input:" +SN);
      
       alert("UserId: "+userId);
       var obj = {userId: userId, Name:Name.value, Brand:Brand.value, Model:Model.value, Category:Category.value, Location:Location.value, Quantity:input.length, Replacement:Replacement.value, Serial: SN, jwtToken:tok }
      var js = JSON.stringify(obj);
     // alert("JS to API: "+js);
    

       var config = 
       {
           method: 'post',
           url: bp.buildPath('api/additem'),	
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
   
           if( res.error.length > 0 )
           {
               setMessage( "API Error:" + res.error );
           }
           else
           {
               setMessage('Item has been added');
               // storage.storeToken( {accessToken:retTok} );
           }
       })
       .catch(function (error) 
       {
           console.log(error);
       });

    };
    const addSerialNumber = async event => 
    {
     //   alert ("Adding s/n");
    //    var newInput = '<input type="text"  placeholder="Serial Number" name="input'+num+'"/><br> <br>';
    var newInput = '<input type="text"  placeholder="Serial Number" name="arr"/><br> <br>';
        document.getElementById('demo').innerHTML += newInput;  
        num++;
    };

    // const searchCard = async event => 
    // {
    //     event.preventDefault();
        		
    //     var tok = storage.retrieveToken();
    //     var obj = {userId:userId,search:search.value,jwtToken:tok};
    //     var js = JSON.stringify(obj);

    //     var config = 
    //     {
    //         method: 'post',
    //         url: bp.buildPath('api/searchcards'),	
    //         headers: 
    //         {
    //             'Content-Type': 'application/json'
    //         },
    //         data: js
    //     };
    
    //     axios(config)
    //         .then(function (response) 
    //     {
    //         var res = response.data;
    //         var retTok = res.jwtToken;
    
    //         if( res.error.length > 0 )
    //         {
    //             setMessage( "API Error:" + res.error );
    //         }
    //         else
    //         {
    //             var _results = res.results;
    //             var resultText = '';
    //             for( var i=0; i<_results.length; i++ )
    //             {
    //                 resultText += _results[i];
    //                 if( i < _results.length - 1 )
    //                 {
    //                     resultText += ', ';
    //                 }
    //             }
    //             setResults('Card(s) have been retrieved');
    //             setCardList(resultText);
    //             storage.storeToken( {accessToken:retTok} );
    //         }
    //     })
    //     .catch(function (error) 
    //     {
    //         console.log(error);
    //     });

    // };

    return(
        
    <GridContainer>
      <Box  mt = {-5} mb = {-2} pl={2} display= "inline-block">
      <div >
        
        
        <br /><br />
        
        <input type="text" id="cardText" placeholder="Name" 
            ref={(c) => Name = c} />
            <br />
            <input type="text" id="cardText" placeholder="Model" 
            ref={(c) => Model = c} />
            <br />
            <input type="text" id="cardText" placeholder="Category" 
            ref={(c) => Category = c} />
            <br />
            <input type="text" id="cardText" placeholder="Location" 
            ref={(c) => Location = c} />
            <br />
             <input type="text" id="cardText" placeholder="Brand" 
            ref={(c) => Brand = c} />
            <br />
            <input type="text" id="cardText" placeholder="Replacement" 
            ref={(c) => Replacement = c} />
         
            <div id="demo"> 
            <input type="text"  placeholder="SerialNumber" name="arr" />
            </div>
           
            <button type="button" id="addSerialNumber"  className="buttons" 
            onClick={addSerialNumber}> Add S/n </button>
            <br />
            <br />
        <button type="button" id="addCardButton" className="buttons" 
            onClick={addItem}> Add Item </button><br />
        <span id="cardAddResult">{message}</span>
        </div>
        </Box>
        </GridContainer>
    );
}

export default CardUI;
