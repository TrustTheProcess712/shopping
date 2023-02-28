import { Link } from "react-router-dom";

const NavBar = ({ header }) => {
  return (
    <nav className='navbar'>
      <h1>{header}</h1>
      <div className='navbar-links'>
        <Link to='/'>Home</Link>
        <Link to='/basket'>Basket</Link>
      </div>
    </nav>
  );
};

export default NavBar;
