import React, { useState } from 'react';
import LoginImage from '../assets/Friendster.png'

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Add your login logic here
    console.log('Logging in with:', username, password);
  };

  return (
    <div className="container mt-5 d-flex align-items-center justify-content-center">
      <div className="col-md-6">
        <div className = "text-center">
      <img src={LoginImage}
        alt="Login"
        className="img-fluid mb-4"
        style={{ width: '150px', height: '150px' }} />
        </div>
        <div>

          <form>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="button"
              className="btn btn-warning btn-block mb-5"
              onClick={handleLogin}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
