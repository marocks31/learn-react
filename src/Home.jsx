import axios from "axios";
import { useState, useEffect } from 'react';
import { CraftsNew } from "./CraftsNew";
import { CraftsIndex } from "./CraftsIndex";
import { CraftsShow } from "./CraftsShow";
import { Modal } from "./Modal";
import { Signup } from "./Signup";
import { Login } from "./Login";

export function Home() {
  // crafts is variable, setCrafts is method to change variable
  // useState hook keeps variable reactive and updates DOM if craft is added or deleted
  const [crafts, setCrafts] = useState([]);
  const [isCraftShowModalVisable, setIsCraftShowModalVisable] = useState(false);
  const [currentCraft, setCurrentCraft] = useState({});

  //function that grabs data
  const handleIndexCrafts = () => {
    //.then ensures that you get the data before moving on
    axios.get("http://localhost:3000/crafts.json").then((response) => {
      console.log(response.data);
      setCrafts(response.data);
    });
  };

  const handleShowCraft = (craft) => {
    setIsCraftShowModalVisable(true);
    setCurrentCraft(craft);
  }

  const handleHideCraftModal = () => {
    setIsCraftShowModalVisable(false);
  }
  //first arguement is function you want to run, second is an array of dependencies that react uses to determine when to run the first function
  useEffect(handleIndexCrafts, []);

  return (
    <div className="container">
      <Signup/>
      <Login/>
      <CraftsNew />
      <CraftsIndex myCrafts={crafts} onSelectCraft={handleShowCraft}/>
      <Modal show={isCraftShowModalVisable} onClose={handleHideCraftModal}>
        <CraftsShow craft={currentCraft}/>
      </Modal>
    </div>
  );
}
