const Header = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-secondary"
    >
      <div className="container">
        <h1 className=" text-warning">Levi Heintzelman's Portfolio</h1>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link text-light" href="#">
                About Me
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#">
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#">
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
