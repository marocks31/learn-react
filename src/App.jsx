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

function CraftsIndex() {
  return (
    <div id="crafts-index">
      <h1>All crafts</h1>
      <div className="crafts">
        <h1>Potato Dolls</h1>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq3h_G3rNfaCTvdqR-WXLnHWDks4qGJ9VrHw&usqp=CAU" alt="picture potato with a face and outfit"/>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <button>More info</button>
      </div>
      <div className="crafts">
        <h1>Painted rocks</h1>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfegGYg48PBQAGXtDmk8SqoetQWeY5EO4Ruh4-zBjzq61KPbv13-c460giPj4R6niLolQ&usqp=CAU" alt="picture of painted rocks"/>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <button>More info</button>
      </div>
      <div className="crafts">
        <h1>Shrinky Dink Crafts</h1>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHw8-giefeQTQSAXwD40aDxw4gixdEf9XrAg&usqp=CAU" alt="Shrinky Dink"/>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <button>More info</button>
      </div>
    </div>
  )
}

function Footer() {
  return (
    <footer>
      copyright 2023!
    </footer>
  )
}
function Home() {
  return (
    <div>
      <CraftsNew/>
      <CraftsIndex/>
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
