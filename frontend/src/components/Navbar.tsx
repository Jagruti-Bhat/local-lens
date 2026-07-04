import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-8 py-4 flex justify-between">
      <Link to="/" className="text-2xl font-bold">
        AI Travel Planner
      </Link>

      <Link to="/create" className="bg-white text-blue-600 px-4 py-2 rounded">
        Create Trip
      </Link>
    </nav>
  );
}
