import './style.css';

function Navbar() {
    return (
      <nav className="navbar navbar-expand-md bg-primary main-nav">

        <div className="container-fluid">

          <a href="link" className="nav-logo-text">
            <h4>LEGENDS MAKER</h4>
          </a>

          <div className="collapse navbar-collapse">

            <ul className="navbar-nav offset-md-2 main-menu">
              <li>
                <a href="link" className='active'> HOME </a>
              </li>
              <li>
                <a href="link"> GAMES </a>
              </li>
              <li>
                <a href="link"> BOOKS </a>
              </li>
            </ul>

          </div>

        </div>

      </nav>
    );
  }
  
  export default Navbar;
  