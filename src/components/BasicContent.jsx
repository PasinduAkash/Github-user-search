import React from "react";



function BasicContent(props) {


return (
    <div className="basic-content">


<img src={props.image} className="profile-pic" alt=""></img>


<div className="username-box">
<div>
    <h1 className="username-basic">{props.name}</h1>
    <p className="username">{props.userName}</p>
    </div>
    <p className="date-joined">{props.joined}</p>
</div>

</div>
)

}

export default BasicContent;