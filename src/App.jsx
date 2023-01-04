function App() {
  return (
      <div>
        <header>
        {/* when you use a pound sign it will link to elements with that id on the page */}
          <a href="#">Home</a> | <a href="#crafts-index">All crafts</a>
        </header>
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
        <div id="crafts-index">
          <h1>All crafts</h1>
          <div className="crafts">
            <h1>Potato Dolls</h1>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq3h_G3rNfaCTvdqR-WXLnHWDks4qGJ9VrHw&usqp=CAU" alt="picture of button card"/>
            <p>Make a doll out of potatoes</p>
            <button>More info</button>
          </div>
          <div className="crafts">
            <h1>Painted rocks</h1>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfegGYg48PBQAGXtDmk8SqoetQWeY5EO4Ruh4-zBjzq61KPbv13-c460giPj4R6niLolQ&usqp=CAU" alt="picture of button card"/>
            <p>Paint rocks</p>
            <button>More info</button>
          </div>
        </div>
        <footer>
          copyright 2023!
        </footer>
    </div>
  );
}

export default App
