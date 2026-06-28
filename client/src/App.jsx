import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import History from "./pages/History";

function Layout() {
  const location = useLocation();

  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("login") === "true"
  );

  return (
    <div className="min-h-screen bg-[#030712] text-white">

      {location.pathname !== "/login" && isLoggedIn && <Navbar />}

      <Routes>

        <Route
          path="/login"
          element={<Login setIsLoggedIn={setIsLoggedIn} />}
        />

        <Route
          path="/"
          element={
            isLoggedIn ? <Home /> : <Navigate to="/login" />
          }
        />

        <Route
          path="/history"
          element={
            isLoggedIn ? <History /> : <Navigate to="/login" />
          }
        />

      </Routes>

    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;