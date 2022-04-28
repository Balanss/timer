import React from 'react';

function Product(props){

return(

  <div className="hold-text">
<h2> {props.time}  </h2>
<p className="yellow-warning">  {props.month} / {props.day} </p>
<p className="warning"> {props.dates} Days left for THT!! </p>
<p> {props.year} </p>
 </div>
)

}

export default Product;
