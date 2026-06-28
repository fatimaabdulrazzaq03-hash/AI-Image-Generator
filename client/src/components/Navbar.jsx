import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-black/30 border-b border-gray-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">

        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-r from-purple-600 to-red-600 flex items-center justify-center text-xl">
            🤖
          </div>

          <h1 className="text-2xl font-bold text-white">
            AI Image Generator
          </h1>
        </div>

        <div className="flex gap-4">

          <Link
            to="/"
            className="px-5 py-2 rounded-lg hover:bg-purple-600 duration-300"
          >
            Home
          </Link>

          <Link
            to="/history"
            className="px-5 py-2 rounded-lg hover:bg-purple-600 duration-300"
          >
            History
          </Link>

          <Link
            to="/login"
            className="bg-gradient-to-r from-purple-600 to-red-600 px-6 py-2 rounded-xl font-semibold hover:scale-105 duration-300"
          >
            Login
          </Link>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;