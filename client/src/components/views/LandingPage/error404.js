
import React, {Component} from 'react';

import img from "../../photos/notFound.png";


class error extends Component{
  
render() {
  return (

    <div className='page'  >
    <img src={img} style ={{height:400,width:1000,margin:170}}/>
    
    
    </div>
  );
}}

export default error  ;