export function Signup() {
  return (
    <div id="signup">
    <h1>Sign up!</h1>
      <form method="POST" action="http://localhost:3000/users">
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