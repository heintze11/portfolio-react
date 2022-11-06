const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
        <div className="navbar-brand text-warning ml-4">Levi Heintzelman's Portfolio</div>
        
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
                <a className="nav-link" href="#">About </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Projects</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
            </li>   
            </ul>
            
        </div>
    </nav>
  );
};

export default Header;
