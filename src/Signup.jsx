import axios from "axios";
import { useState } from "react";

export function Signup() {
  const [errors, setErrors] = useState([]); //create a variable to hold errors

  const handleSubmit = (event) => {
    event.preventDefault(); //prevents from refreshing or moving to different page
    setErrors([]);
    const params = new FormData(event.target); //grab params/data from the form, FormData is a vanilla JS function 
    axios.post("http://localhost:3000/users", params) //how to submit params, pass params as argument to back end 
    .then((response) => { console.log(response.data); //.then because we don't know how long it will take, console log the response should show errors or 'user sucessfully created'
    event.target.reset(); //reset form after 'signup' button click, reset is built in JS function
    window.location.href = '/' //change this to hide a modal, redirect to a specific page, ect
    })
    .catch((error) => { //catch errors and print to console
      console.log(error.response.data.errors);
      setErrors(error.response.data.errors); //display errors to user
    });
  };

  return (
    <div id="signup">
    <h1>Sign up!</h1>
    <ul>
      {errors.map((error) => (
        <li id="error" key={error}>{error}</li>
      ))}
    </ul>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input name="name" type="text" className="form-control"/>
        </div>
        <div>
          Email: <input name="email" type="email" className="form-control"/>
        </div>
        <div>
          Password <input name="password" type="password" className="form-control"/>
        </div>
        <div>
          Password confirmation: <input name="password_confirmation" type="password" className="form-control"/>
        </div>
        <button type="submit" className="btn btn-dark mt-3">Signup</button>
      </form>
    </div>
  )
}