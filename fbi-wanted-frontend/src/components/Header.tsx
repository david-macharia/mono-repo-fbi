import React from "react";
import { useLocation, Link } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const user = localStorage.getItem("user");
  let userId;
  if (user) {
    userId = JSON.parse(user).userId;
  }
  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("userId");
    window.location.href = "/"; // or use navigate('/')
  };

  const isActive = (path: string) =>
    location.pathname === path
      ? "border-b-2 border-blue-500 text-blue-600"
      : "text-gray-700";

  return (
    <header className="bg-white shadow p-4 flex items-center justify-between">
      <div className="text-xl font-bold text-gray-800">FBI Wanted</div>

      {userId && (
        <div className="text-xl font-bold text-gray-800">
          Logged In As({userId})
        </div>
      )}

      <nav className="flex gap-6">
        <a
          href="http://localhost:3000/docs#/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition text-gray-700"
        >
          Docs
        </a>

        {userId && (
          <div
            className="text-xl font-bold text-gray-800 cursor-pointer"
            onClick={handleLogout}
          >
            Logout
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
