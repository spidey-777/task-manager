import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    if (username.trim()) {
      localStorage.setItem('username', username);
      navigate('/');
    } else {
      alert('Please enter a username');
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen px-4">
      <h2 className="text-2xl font-semibold mb-6">Login</h2>
      <form
        onSubmit={handleLogin}
        className="flex flex-col gap-4 w-full max-w-sm"
      >
        <input
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="p-3 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="p-3 text-base bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
