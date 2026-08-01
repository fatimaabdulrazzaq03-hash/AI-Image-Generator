import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ setIsLoggedIn }) {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!email.trim() || !password.trim()) {
      setError("Please enter email and password");
      return;
    }

    setError("");

    localStorage.setItem("login", "true");

    if (setIsLoggedIn) {
      setIsLoggedIn(true);
    }

    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-[#030712]">

      {/* Background Glow */}
      <div className="absolute w-56 h-56 sm:w-72 sm:h-72 bg-purple-700 rounded-full blur-[120px] opacity-20 -top-10 -left-10"></div>
      <div className="absolute w-56 h-56 sm:w-72 sm:h-72 bg-red-600 rounded-full blur-[120px] opacity-20 bottom-0 right-0"></div>

      <div className="relative w-full max-w-md bg-gray-900/90 backdrop-blur-lg border border-gray-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl">

        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8">
          Login
        </h1>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 p-3 sm:p-4 rounded-xl bg-gray-800 border border-gray-700 outline-none text-white text-sm sm:text-base"
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 p-3 sm:p-4 rounded-xl bg-gray-800 border border-gray-700 outline-none text-white text-sm sm:text-base"
        />

        {error && (
          <p className="text-red-500 text-center text-sm mb-4">
            {error}
          </p>
        )}

        <button
          onClick={handleLogin}
          className="w-full bg-gradient-to-r from-purple-600 to-red-600 py-3 sm:py-4 rounded-xl font-bold hover:scale-105 duration-300"
        >
          Login
        </button>

      </div>
    </div>
  );
}

export default Login;