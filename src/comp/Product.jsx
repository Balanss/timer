import React from 'react';





function Product(props){

if(props.dates === 0)
  return( <div className="hold-text">
  <h2 className="h2"> {props.time}  </h2>
  <p className="yellow-warning">  {props.month} / {props.day} /{props.year} {props.stats} </p>
  <p className="warning">  Check today!! </p>

  </div>)
  else if (props.dates === 1){
    return(
      <div className="hold-text">
      <h2 className="h2"> {props.time}  </h2>
      <p className="yellow-warning">  {props.month} / {props.day} /{props.year} {props.stats} </p>
      <p className="warning"> {props.dates} Day left for THT!! </p>

      </div>
    )
  } else if (props.dates > 0){ return(

    <div className="hold-text">
    <h2 className="h2"> {props.time}  </h2>
    <p className="yellow-warning">  {props.month} / {props.day} /{props.year} {props.stats} </p>
    <p className="warning"> {props.dates} Days left for THT!! </p>

    </div>
  )
}


}



export default Product;
