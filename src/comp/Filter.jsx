import React, {useState} from 'react';
import Items from "../Items";
import Product from "./Product";
import { Container,Row,Col} from "react-bootstrap";


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

    {return <Col xs={6} md={6} lg={3} className="filter-col" key={key} >


 <div className= 'filter-items'>

 <Product time = {val.name}
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
