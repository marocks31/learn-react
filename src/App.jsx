import axios from "axios";
import React, { useState, useEffect } from 'react';

// functional components
function Header() {
  return (
    <div>
      <header>
      {/* when you use a pound sign it will link to elements with that id on the page */}
        <a href="#">Home</a> | <a href="#crafts-index">All crafts</a>
      </header>
    </div>
  );
}

function CraftsNew() {
  return (
    <div id="crafts-new">
        <h1>New craft</h1>
        <form>  
          <div>
            Name: <input type="text"/>
          </div>
          <div>
            Description: <input type="text"/>
          </div>
          <div>
            Materials: <input type="text"/>
          </div>
          <div>
            Image: <input type="text"/>
          </div>
          <button>Create craft</button>
        </form>
      </div>
  )
}

function CraftsIndex(props) {
  console.log(props.myCrafts);
  return (
    <div id="crafts-index">
      <h1>All crafts</h1>
      {props.myCrafts.map((craft) => (
      <div key={craft.id} className="crafts">
        <h2>{craft.name}</h2> 
        <img src={craft.image} alt="diy craft" />
        <h5>Description: {craft.description}</h5>
        <h5>Materials: {craft.materials}</h5>
      </div>
      ))}
    </div>
  );
}

function Footer() {
  return (
    <footer>
      copyright 2023!
    </footer>
  )
}
function Home() {
  // crafts is variable, setCrafts is method to change variable
  // useState hook keeps variable reactive and updates DOM if craft is added or deleted
  const [crafts, setCrafts] = useState([]);
  //function that grabs data
  const handleIndexCrafts = () => {
    //.then ensures that you get the data before moving on
    axios.get("http://localhost:3000/crafts.json").then
    ((response) => {
      console.log(response.data);
      setCrafts(response.data);
    });
  };
  //first arguement is function you want to run, second is an array of dependencies that react uses to determine when to run the first function
  useEffect(handleIndexCrafts, []);

  return (
    <div>
      <CraftsNew/>
      <CraftsIndex myCrafts={crafts}/>
      <button onClick={handleIndexCrafts}>Load crafts</button>
    </div>
  )
}

function App() {
  return (
      <div>
       <Header/>
       <Home/>
       <Footer/>
    </div>
  );
}

export default App
