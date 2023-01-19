import React from 'react';


export function CraftsIndex(props) {
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
