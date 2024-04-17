import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import LoginImage from '../assets/images/Friendster.png'
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";


const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);

  const handleLogin = (e) => {
    // Add your login logic here
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Access the user and the ID token
        const user = userCredential.user;
        return user.getIdToken();
      })
      .then((idToken) => {
        // Set the ID token to local storage
        localStorage.setItem("userToken", idToken);

        console.log("ID Token:", idToken);

        navigate("/");
      })
      .catch((error) => {
        console.error('Error signing in:', error);
        setErrorMessage('Invalid email or password. Please try again.');
      });
  };


  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === 'Return') {
      console.log('Enter key pressed!');
    }
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
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="text"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                onKeyDown={handleKeyDown}
                // ref={(input) => input && input.focus()}
              />
            </div>
            {errorMessage && (
              <div className="alert alert-danger" role="alert">
                {errorMessage}
              </div>
              )}
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
