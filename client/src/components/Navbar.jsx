import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-black/30 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-r from-purple-600 to-red-600 flex items-center justify-center text-lg sm:text-xl">
              🤖
            </div>

            <h1 className="text-lg sm:text-2xl font-bold text-white text-center sm:text-left">
              AI Image Generator
            </h1>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap justify-center gap-3 w-full sm:w-auto">

            <Link
              to="/"
              className="px-4 py-2 rounded-lg hover:bg-purple-600 duration-300 text-sm sm:text-base"
            >
              Home
            </Link>

            <Link
              to="/history"
              className="px-4 py-2 rounded-lg hover:bg-purple-600 duration-300 text-sm sm:text-base"
            >
              History
            </Link>

            <Link
              to="/login"
              className="bg-gradient-to-r from-purple-600 to-red-600 px-5 py-2 rounded-xl font-semibold hover:scale-105 duration-300 text-sm sm:text-base"
            >
              Login
            </Link>

          </div>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;