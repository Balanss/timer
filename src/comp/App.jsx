import React from 'react';
import Items from "../Items";
import Product from "./Product";








function createMonth(months) {

  let nextMonth = new Date()
  const time3 = nextMonth.getMonth() + 2


  if ((months.month === time3 && (months.dates < 7) && (months.dates > 25))) {
    return ( <
      div className = " all-items" >
      <Product time = {months.name}
      month ={months.month}
      day = {months.day}
      year = {months.year}

      />
       </div>
    )
  }


}





function createDate(date) {
  let time = new Date()
  const time1 = time.getMonth() + 1
  let t = new Date()
  const time2 = t.getDate() + 7
  const minusDay = t.getDate()
  let y = new Date()
  const time3 = y.getFullYear()





  if ((date.month === time1 && (date.year === time3) && (date.dates < time2) && (date.dates > 0))) {
    return (

<div className = "all-items" >
      <Product
       time = {date.name}
      month = {date.month}
      year = {date.year}
      day = {date.day}
      dates = {date.dates - minusDay }
      />
      </div>

    )
  } else {
    return null;
  };


}




function App() {





  return (


    <div className = "items-map" >
    {Items.map(createDate)  }
{Items.map(createMonth)}
</div>






  )
}

export default App;
