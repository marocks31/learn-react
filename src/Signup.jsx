export function Signup() {
  return (
    <div id="signup">
    <h1>Sign up!</h1>
      <form>
        <div>
          Name: <input type="text" className="form-control"/>
        </div>
        <div>
          Email: <input type="email" className="form-control"/>
        </div>
        <div>
          Password <input type="password" className="form-control"/>
        </div>
        <div>
          Password confirmation: <input type="password" className="form-control"/>
        </div>
        <button type="submit" className="btn btn-primary mt-3">Signup</button>
      </form>
    </div>
  )
}