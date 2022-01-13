import "./Navbar.css";
import Logo from "../../images/logo.svg"
const Navbar = () => {
  return (
    <header className="navbar">
      <div className="nav-logo-container">
          <img src={Logo} alt="Logo"/>
      </div>
      <nav>
          <ul className="nav-list">
              <li className="nav-item">Home</li>
              <li className="nav-item">About</li>
              <li className="nav-item">Contact</li>
              <li className="nav-item">Blog</li>
              <li className="nav-item">Careers</li>
          </ul>
      </nav>
      <div className="nav-cta-container">
          <button className="nav-cta">Request Invite</button>
      </div>
    </header>
  );
};

export default Navbar;
