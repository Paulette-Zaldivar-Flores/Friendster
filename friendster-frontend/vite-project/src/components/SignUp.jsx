import React, { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import SignupImage from '../assets/images/Friendster.png'
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSignUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user);
        // ...
        navigate("/Home");
      })
      .catch((error) => {
        console.error('Error signing up:', error);
        setErrorMessage('Issue signing up. Please try again.');
      });
  };

  return (
    <div className="container mt-5 d-flex align-items-center justify-content-center">
      <div className="col-md-6">
        <div className = "text-center">
          <img src={SignupImage}
            alt="SignupImg"
            className="img-fluid mb-4"
            style={{ width: '150px', height: '150px' }} />
        </div>

        <div>
          <form>
            <h2 className="gradient-text text-center">Join the community!</h2>
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
              />
            </div>
            {errorMessage && (
                <div className="alert alert-danger py-2" role="alert">
                  {errorMessage}
                </div>
              )}
            <div className="mb-5">
              <button
                type="button"
                className="btn btn-warning btn-block d-inline"
                onClick={handleSignUp}
              >
                Sign Up
              </button>
              <p className="d-inline ms-3">Already a user?</p>
              <Link to="/" className="d-inline mx-2 text-decoration-none">Login</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
