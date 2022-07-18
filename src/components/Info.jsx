import React from "react";

function Info(props) {
    return (
        <div>
        <p className="bio">{props.bio}</p>

<div className="user-info">
    <div className="info-box">
        <p>Repos</p>
        <h1 className="info-recieved">{props.repos}</h1>
    </div>

    <div className="info-box">
        <p>Followers</p>
        <h1 className="info-recieved">{props.followers}</h1>
    </div>

    <div className="info-box">
        <p>Following</p>
        <h1 className="info-recieved">{props.following}</h1>
    </div>
</div>
</div>
    )
}

export default Info; 