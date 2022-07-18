import React, { useEffect, useState } from "react";
import Search from "./search";
import BasicContent from "./BasicContent";
import Info from "./Info";
import SocialInfo from "./SocialInfo";
import axios from "./axios";

function App() {

    const [data, setData] = useState();

const [obtainInfo, setOnbtainInfo] = useState(false);    
const [wasDataSent, setwasDataSent] = useState(false);


function loadData() {
    setOnbtainInfo(true);
}


useEffect(() => {
    const getInfo = async () => {
        try {
            const response = await axios.get("/users");
           setData(response.data);
           setwasDataSent(true);
           setOnbtainInfo(false);
        } catch(err) {
            console.log(err);
        }
        
    }

    if(obtainInfo === true) {
        getInfo();
    }
}, [obtainInfo])



    return    (<div className="container">
            
    <h1>devfinder</h1>
    
    <Search perform={loadData} />

    {wasDataSent && 

        <main className="recieved-info">
    
    <BasicContent image={data.imageURL} name={data.name} userName={data.userName} joined={data.dateJoined}  />
    <Info bio={data.bio} followers={data.followers} following={data.following} repos={data.repos} />
    <SocialInfo  website={data.website} location={data.website} twitter={data.twitter} company={data.company} />
    
    </main>

    }
    
   
    
    </div>)



}

export default App;

