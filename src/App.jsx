import { useState } from "react";

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
  const [crafts, setCrafts] = useState([
    {
      name: "Potato Dolls",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      materials: "potatoes",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq3h_G3rNfaCTvdqR-WXLnHWDks4qGJ9VrHw&usqp=CAU",
    },
    {
      name: "Painted rocks",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      materials: "rocks and paint",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfegGYg48PBQAGXtDmk8SqoetQWeY5EO4Ruh4-zBjzq61KPbv13-c460giPj4R6niLolQ&usqp=CAU"
    },
    {
      name: "Shrinky Dink Crafts",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      materials: "markers, oven, shrinky dink paper",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHw8-giefeQTQSAXwD40aDxw4gixdEf9XrAg&usqp=CAU",
    },
    ]);
  return (
    <div>
      <CraftsNew/>
      <CraftsIndex myCrafts={crafts}/>
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
