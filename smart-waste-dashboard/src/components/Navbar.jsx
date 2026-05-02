import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-green-600 text-white p-4 flex gap-6">
      <Link to="/">Home</Link>
      <Link to="/learn">Learn</Link>
      <Link to="/tracker">Tracker</Link>
    </nav>
  );
}

export default Navbar;
