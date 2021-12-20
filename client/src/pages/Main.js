// import React, { useState } from 'react';
import axios from 'axios';
import Banner from '../components/Banner'

axios.defaults.withCredentials = true;

function Main (props) { 
    return (
      <div>
       <h1></h1>
      <div><Banner /></div>      
      </div>
      
    );
  }
  
  export default Main;