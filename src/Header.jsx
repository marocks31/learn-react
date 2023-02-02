export function Header() {
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Craftz ✂️</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                {/* when you use a pound sign it will link to elements with that id on the page */}
                <a className="nav-link active" aria-current="page" href="#">Home</a>
                <a className="nav-link" href="#crafts-index">All crafts</a>
                <a className="nav-link" href="#crafts-new">Create craft</a>
                <a className="nav-link" href="#">Signup</a>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}