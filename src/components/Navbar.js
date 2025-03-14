import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/events">Events</Link>
    </nav>
  );
};

export default Navbar;
