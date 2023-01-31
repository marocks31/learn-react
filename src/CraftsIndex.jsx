import React from 'react';

export function CraftsIndex(props) {
  return (
    <div id="crafts-index">
      <h1>All crafts</h1>
      {props.myCrafts.map((craft) => (
        <div key={craft.id} className="crafts">
          <div className="card" style={{ width: '30rem' }}>
            <img src={craft.image} alt="diy craft"/>
            <div className="card-body">
              <h5 className="card-title">{craft.name}</h5>
              <p className="card-text">{craft.description}</p>
              <button onClick={() => props.onSelectCraft(craft)}>More info</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
