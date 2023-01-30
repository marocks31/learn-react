import React from 'react';


export function CraftsNew() {
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
  );
}
