import React from 'react';
import Items from "../Items";
import Product from "./Product";




function createDate(date){
  let time = new Date()
  const time1 = time.getMonth()+1
  let t = new Date()
  const time2 = t.getDate()
  let y = new Date()
  const time3 = y.getFullYear()
  let doubleMonth = new Date()
  const dm = doubleMonth.getMonth()+2



  if((date.month == time1 && (date.year === time3))   ){
    return(
      <div className="all-items">
       <Product
         time={date.name}
         month={date.month}
         year={date.year}
         day={date.day}
         dates={date.dates - time2}
         />


      </div>


    )
  }
  else  {
    return null;
  };



}



function App(){





return( <div className="hold-all">

 {Items.map(createDate)}


</div>
)
}

export default App;
