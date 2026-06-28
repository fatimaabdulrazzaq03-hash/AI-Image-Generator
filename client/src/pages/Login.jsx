import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ setIsLoggedIn }) {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (email.trim() === "" || password.trim() === "") {
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
    <div className="flex items-center justify-center min-h-screen px-6">
      <div className="w-full max-w-md bg-gray-900 border border-gray-800 rounded-3xl p-8 shadow-xl">

        <h1 className="text-4xl font-bold text-center mb-8">
          Login
        </h1>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 p-4 rounded-xl bg-gray-800 outline-none border border-gray-700 text-white"
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 p-4 rounded-xl bg-gray-800 outline-none border border-gray-700 text-white"
        />

        {error && (
          <p className="text-red-500 text-center mb-4">
            {error}
          </p>
        )}

        <button
          onClick={handleLogin}
          className="w-full bg-gradient-to-r from-purple-600 to-red-600 py-4 rounded-xl font-bold hover:scale-105 duration-300"
        >
          Login
        </button>

      </div>
    </div>
  );
}

export default Login;