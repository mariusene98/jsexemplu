import React from 'react';
import logo from './logo.svg';
import './App.css';

function Film(props) {
  
  return (

    <div>
      <img src={logo} className="App-logo" alt="logo" />
    film: {props.film}
    </div>
    
    )
    

}
 function Nav(props) {
   
   return (
     <div>
       numele utilizatorului: {props.username}

     </div>
   )
 }


function App() {
  var username = "marius";
  var film = "X-MAN"
  return (
    <div className="App">
      <Film film={film}/>
      <Nav username={username}/>  
    </div>
  );
}

export default App;
