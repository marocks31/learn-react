import React from 'react';


export function CraftsNew() {
  return (
    <div id="crafts-new">
      <h1>Submit a new craft:</h1>
      <form>
        <div>
          Name: <input className="form-control" type="text"/>
        </div>
        <div>
          Description: <input className="form-control" type="text"/>
        </div>
        <div>
          Materials: <input className="form-control" type="text"/>
        </div>
        <div>
          Image: <input className="form-control" type="text"/>
        </div>
        <button className="btn btn-primary mt-3">Create craft</button>
      </form>
    </div>
  );
}
