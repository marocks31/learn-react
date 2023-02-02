import axios from "axios";

export function Login() {
  const handleSubmit = (event) => {
    event.preventDefault(); //prevents from refreshing or moving to different page
    const params = new FormData(event.target); //grab params/data from the form, FormData is a vanilla JS function 
    axios.post("http://localhost:3000/sessions", params) //how to submit params, pass params as argument to back end 
    .then((response) => { console.log(response); //.then because we don't know how long it will take, console log the response should show errors or 'user sucessfully created'
    event.target.reset(); //reset form after 'login' button click, reset is built in JS function
    })
    .catch((errors) => { //catch errors and print to console
      console.log(errors.response.data.errors);
    });
  };

  return (
    <div id="login">
    <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Email: <input name="email" type="email" className="form-control"/>
        </div>
        <div>
          Password <input name="password" type="password" className="form-control"/>
        </div>
        <button type="submit" className="btn btn-dark mt-3">Login</button>
      </form>
    </div>
  )
}