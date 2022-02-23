import React from "react";
import Nav from './test.js'
import InputPair from './Inputpair';
function aTest(){

   return (
   <h1>This is test </h1>
   );
}


export function App() {
	return (
		
      <div>
<InputPair />
         <InputPair />
      	<h1>mate Welcome Nigel {new Date().toString()}</h1>
			<div style={{border:"11px red solid", display:"grid",gridTemplateColumns:"max-content max-content"}}>
			aThis is ./App.js
         
         <Nav />
         </div>
		</div>
	);
}


