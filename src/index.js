
//require('file-loader?name=[name].[ext]!./index.html');
import React from 'react';
import ReactDOM from 'react-dom';



const d = new Date()
let seconds=d.getSeconds();


const page = (
   <div>

   <img src='/assets/images/react.png' width='40px' alt="asdf" />
      <h1>Funs factds aboutd sResacat</h1>
   <ol>
      <li><h4>Was first released in 2013</h4></li>
      <li>Was originally created by Jordan Walke</li>
      <li>Has well over 100K stars on Github</li>
      <li>Is maintained by Facebookd</li>
      <li>sPowers thousands of enterprice apps, including mobidle apps</li>
   </ol>
   </div>)
const appElement=document.getElementById('root');
document.getElementsByTagName("title")[0].text=seconds;
ReactDOM.render(page,appElement);
