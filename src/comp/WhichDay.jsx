import React from 'react';
import Items from "../Items";
import Product from "./Product";





function createDay (dag){
  let t = new Date()
  const time2 = t.getDate()
  const totalDate = time2 - dag.dates
  console.log(totalDate)






if (totalDate <= 7){
  return  <Product dates={dag.dates-7} />
} else {
  return null
}

}




  function WhichDay(){


return  <div> {Items.map(createDay)} </div>


  }

  export default WhichDay;
