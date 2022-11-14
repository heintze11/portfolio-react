const Navbar = ({ currentPage, handlePageChange}) => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-secondary"
    >
      <div className="container">
        <h1 className=" text-warning title">Levi Heintzelman's Portfolio</h1>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className={currentPage === 'About' ? 'nav-link active' : 'nav-link'} href="#About" onClick={() => handlePageChange('About')}>
                About Me
              </a>
            </li>
            <li className="nav-item">
              <a className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'} href="#portfolio" onClick={() => handlePageChange('Portfolio')}>
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'} href="#resume" onClick={() => handlePageChange('Resume')}>
                Resume
              </a>
            </li>
            <li className="nav-item">
              <a className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'} href="#contact" onClick={() => handlePageChange('Contact')}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
