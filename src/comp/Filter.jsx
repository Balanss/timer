import React, {useState} from 'react';
import Items from "../Items";
import { Container,Row,Col} from "react-bootstrap";
import FilterProject from "./FilterProject";


function Filter(){
const[searchTerm, setSearchTerm]=useState("");

return (

<Container fluid className="filter-container">
  <input className="input"  type = "text" placeholder = " ...  Search" onChange={event => {setSearchTerm(event.target.value)}} />
  <Row className=" filter-row" >


   {Items.filter((val)=>
  { if(searchTerm ===  ""){
    return null
  } else if (val.name.toLowerCase().startsWith(searchTerm.toLowerCase())) {
    return val
  }


}).slice(0,3).map((val, key) =>

    {return <Col xs={12} md={4} lg={4} className="filter-col" key={key} >


 <div className= 'filter-items'>

 <FilterProject time = {val.name}
 month ={val.month}
 day = {val.day}
 year = {val.year}
 />

 </div>



     < /Col>})}

    </Row>

</Container>

)


}

export default Filter;
