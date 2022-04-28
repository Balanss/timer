import React from 'react';
import Items from "../Items";
import Product from "./Product";



function createDate(date){
  let time = new Date()
  const time1 = time.getMonth()+1
  let t = new Date()
  const time2 = t.getDate()





  if(date.month === time1){
    return(

<div className="all-items">
 <Product
   time={date.name}
   month={date.month}
   day={date.day}
   dates={date.dates - time2}

   />


</div>

    )
  }
  else {
    return null;
  }





}



function App(){





return( <div className="hold-all">

 {Items.map(createDate)}


</div>
)
}

export default App;
