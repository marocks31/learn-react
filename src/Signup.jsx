import axios from "axios";

export function Signup() {
  const handleSubmit = (event) => {
    event.preventDefault(); //prevents from refreshing or moving to different page
    const params = new FormData(event.target); //grab params/data from the form
    axios.post("http://localhost:3000/users", params) //how to submit params, pass params as argument to back end 
    .then((response) => { console.log(response); //.then because we don't know how long it will take, console log the response should show errors or 'user sucessfully created'
    event.target.reset(); //reset form after 'signup' button click, reset is built in JS function
    })
    .catch((errors) => { //catch errors and print to console
      console.log(errors.response.data.errors);
    });
  };

  return (
    <div id="signup">
    <h1>Sign up!</h1>
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