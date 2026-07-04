import { Plane } from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/30 bg-white/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto h-16 px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Plane className="h-6 w-6 text-blue-600" />

          <span className="text-xl font-bold">Local Lens</span>
        </Link>

        <nav className="flex items-center gap-4">
          <Link to="/" className="text-sm hover:text-blue-600">
            Home
          </Link>

          <Button>
            <Link to="/create">Plan Trip</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
