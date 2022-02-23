
require('file-loader?name=[name].[ext]!./index.html');
import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
//import react from 'react.png'


const myIcon = new Image()
myIcon=react
const page = (
   <div>
   
   <img src='./assets/images/react.png' alt="asdf" />
      <h1>Funs facts aboutd Reacat</h1>
   <ol>
      <li><h4>Was first released in 2013</h4></li>
      <li>Was originally created by Jordan Walke</li>
      <li>Has well over 100K stars on Github</li>
      <li>Is maintained by Facebook</li>
      <li>sPowers thousands of enterprice apps, including mobidle apps</li>
   </ol>
   </div>)
const appElement=document.getElementById('root');

ReactDOM.render(page,appElement);

