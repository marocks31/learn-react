import axios from "axios";
import React, { useState, useEffect } from 'react';
import { CraftsNew } from "./CraftsNew";
import { CraftsIndex } from "./CraftsIndex";

export function Home() {
  // crafts is variable, setCrafts is method to change variable
  // useState hook keeps variable reactive and updates DOM if craft is added or deleted
  const [crafts, setCrafts] = useState([]);
  //function that grabs data
  const handleIndexCrafts = () => {
    //.then ensures that you get the data before moving on
    axios.get("http://localhost:3000/crafts.json").then((response) => {
      console.log(response.data);
      setCrafts(response.data);
    });
  };
  //first arguement is function you want to run, second is an array of dependencies that react uses to determine when to run the first function
  useEffect(handleIndexCrafts, []);

  return (
    <div>
      <CraftsNew />
      <CraftsIndex myCrafts={crafts} />
      <button onClick={handleIndexCrafts}>Load crafts</button>
    </div>
  );
}
