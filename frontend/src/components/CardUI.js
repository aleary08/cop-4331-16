import React, { useState } from 'react';
import axios from 'axios';

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

    var _ud = localStorage.getItem('user_data');
    var ud = JSON.parse(_ud);
    var userId = ud.id;
    var firstName = ud.firstName;
    var lastName = ud.lastName;
	
    const addCard = async event => 
    {
	    event.preventDefault();

       var tok = storage.retrieveToken();
       var obj = {userId:userId,card:card.value,jwtToken:tok};
       var js = JSON.stringify(obj);

        var config = 
        {
            method: 'post',
            url: bp.buildPath('api/addcard'),	
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
            var retTok = res.jwtToken;
    
            if( res.error.length > 0 )
            {
                setMessage( "Error:" + res.error );
            }
            else
            {
                setMessage('Card has been added');
                storage.storeToken( {accessToken:retTok} );
            }
        })
        .catch(function (error) 
        {
            console.log(error);
        });

	};
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

    const searchCard = async event => 
    {
        event.preventDefault();
        		
        var tok = storage.retrieveToken();
        var obj = {userId:userId,search:search.value,jwtToken:tok};
        var js = JSON.stringify(obj);

        var config = 
        {
            method: 'post',
            url: bp.buildPath('api/searchcards'),	
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
            var retTok = res.jwtToken;
    
            if( res.error.length > 0 )
            {
                setMessage( "API Error:" + res.error );
            }
            else
            {
                var _results = res.results;
                var resultText = '';
                for( var i=0; i<_results.length; i++ )
                {
                    resultText += _results[i];
                    if( i < _results.length - 1 )
                    {
                        resultText += ', ';
                    }
                }
                setResults('Card(s) have been retrieved');
                setCardList(resultText);
                storage.storeToken( {accessToken:retTok} );
            }
        })
        .catch(function (error) 
        {
            console.log(error);
        });

    };

    return(
        <div id="cardUIDiv">
        <br />
        <input type="text" id="searchText" placeholder="Card To Search For" 
            ref={(c) => search = c} />
        <button type="button" id="searchCardButton" className="buttons" 
            onClick={searchCard}> Search Card</button><br />
        <span id="cardSearchResult">{searchResults}</span>
        <p id="cardList">{cardList}</p><br /><br />
        <input type="text" id="cardText" placeholder="Card To Add" 
            ref={(c) => card = c} />
        <button type="button" id="addCardButton" className="buttons" 
            onClick={addCard}> Add Card </button><br />
        

        <input type="text" id="cardText" placeholder="Name" 
            ref={(c) => Name = c} />
            <input type="text" id="cardText" placeholder="Model" 
            ref={(c) => Model = c} />
            <input type="text" id="cardText" placeholder="Category" 
            ref={(c) => Category = c} />
            <input type="text" id="cardText" placeholder="Location" 
            ref={(c) => Location = c} />
             <input type="text" id="cardText" placeholder="Brand" 
            ref={(c) => Brand = c} />
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
    );
}

export default CardUI;
