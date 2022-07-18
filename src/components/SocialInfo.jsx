
import React from "react";

function SocialInfo(props) {
    return(
        <div className="social-info">

<div className="location">

<p className="social-text"><i class="fa-solid fa-location-dot"></i> {props.location}</p>
</div>

<div className="twitter">

    <p className="social-text"><i class="fa-brands fa-twitter"></i> {props.twitter}</p>
</div>

<div className="link">

<p className="social-text"><i class="fa-solid fa-link"></i> {props.website}</p>
</div>

<div className="website">

    <p className="social-text"><i class="fa-solid fa-building"></i> {props.company} </p>
</div>

</div>
    )
}

export default SocialInfo;