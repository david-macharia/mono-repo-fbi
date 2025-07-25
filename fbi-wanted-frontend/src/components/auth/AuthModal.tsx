import React, { useState } from "react";
import { AUTH_ENDPOINTS } from "../../constants/Api";

const AuthModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [_user, setUser] = useState<{
    username: string;
    sub: number;
    access_token: string;
  } | null>(null);

  const handleAuth = async () => {
    setError("");
    if (!isLoginMode && password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const endpoint = isLoginMode
        ? AUTH_ENDPOINTS.LOGIN
        : AUTH_ENDPOINTS.SIGNUP;

      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "*/*",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });
      const data = await response.json();
      console.log(data);

      if (!response.ok) {
        throw new Error(data.message || "Authentication failed");
      }

      setUser(data);
      localStorage.setItem("user", JSON.stringify(data));
      if (!isLoginMode) {
        alert(
          `Your account has been created successfully!\n\nGenerated ID: ${data.userId}\n\nPlease copy and save this ID securely. You'll need it to log in.`,
        );
      }
      onClose();
    } catch (err: any) {
      setError(err.message);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-2xl p-6 shadow-lg max-w-sm w-full">
        <h2 className="text-xl font-bold mb-4 text-center">
          {isLoginMode ? "Login" : "Signup"}
        </h2>

        {isLoginMode && (
          <div className="mb-3">
            <label className="text-sm block text-gray-700 mb-1">
              Your Secret Auto Gen Id
            </label>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full border px-3 py-2 rounded-md"
              placeholder="Your username"
            />
          </div>
        )}

        <div className="mb-3">
          <label className="text-sm block text-gray-700 mb-1">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border px-3 py-2 rounded-md"
            placeholder="Your password"
          />
        </div>

        {!isLoginMode && (
          <div className="mb-3">
            <label className="text-sm block text-gray-700 mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full border px-3 py-2 rounded-md"
              placeholder="Confirm password"
            />
          </div>
        )}

        {error && (
          <p className="text-sm text-red-600 mb-3 text-center">{error}</p>
        )}

        <button
          onClick={handleAuth}
          className="bg-blue-600 text-white w-full py-2 rounded-md hover:bg-blue-700 transition"
        >
          {isLoginMode ? "Login" : "Signup"}
        </button>

        <p
          onClick={() => setIsLoginMode(!isLoginMode)}
          className="mt-3 text-center text-sm text-gray-600 cursor-pointer hover:underline"
        >
          {isLoginMode
            ? "Don't have an account? Signup"
            : "Already have an account? Login"}
        </p>

        <button
          onClick={onClose}
          className="mt-2 w-full py-2 text-sm text-gray-500 hover:underline"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AuthModal;
