import express from "express";
import axios from "axios";
import cors from "cors";

const app = express();
const PORT = 9000;


app.use(express.json());
app.use(express.static("public"));

app.use(cors());

let someData; 


app.get("/", (req, res) => {
  res.send("Server 9000 says HI!");
})


app.post("/", cors(), async (req, res) => {
  const username = req.body.username;
 

  const processData = async () => {
try {
    const response = await axios.get("https://api.github.com/users/" + username);

 return  someData = {
  userName: response.data.login,
  imageURL: response.data.avatar_url,
  repos: response.data.public_repos,
  followers: response.data.followers,
  following: response.data.following,
  dateJoined: response.data.created_at,
  bio: response.data.bio,
  website: response.data.html_url,
  location: response.data.location,
  twitter: response.data.twitter_username,
  company: response.data.company,
  name: response.data.name
}
   


  }catch(err) {return someData = "Not a valid username" }
  }
  
 
  await processData();
  res.end();



})


app.get("/users", (req, res) => {
  res.send(someData);
  
  
})


app.listen(PORT, () => {
   console.log("Server running on port 9000");
})



