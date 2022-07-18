
import React, { useState } from "react";
import axios from "./axios";


function Search(props) {

const [dataObtained, setdataObtained] = useState();

    function handleChange(e) {
setdataObtained(e.target.value);


    }

    function handleSubmit(e) {

        e.preventDefault();
        
axios.post("/", {username: dataObtained})
.then(response => {

props.perform();

})

   

    }



return (
    <div className="searchContainer">
    <div className="search-box">
    <form onSubmit={handleSubmit} action="/" method="post">
    <i className="fa-solid fa-magnifying-glass mag-glass"></i>
    <input onChange={handleChange} type="text" name="data" className="search-area" placeholder="Search GitHub username" spellCheck="false" value={dataObtained}></input>
    <button type="submit" className="search-button btn btn-primary">Search</button>
    </form>
</div>
</div>
)
}

export default Search;