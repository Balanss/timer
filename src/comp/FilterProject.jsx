import React from 'react';





function FilterProject(props){


return( <div className="hold-text">
<h2 className="filter-h2"> {props.time}  </h2>
<p className="filter-p">  {props.month} / {props.day} /{props.year} {props.stats} </p>

</div>
)

}

export default FilterProject;
