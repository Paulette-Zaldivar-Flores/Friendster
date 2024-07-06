import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from "react-router-dom";
import SignupImage from '../assets/images/Friendster.png'
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);

  const user = {
    name: name,
    email: email,
    password: password
  };

  const handleSignUp = (e) => {
    e.preventDefault();

    axios.post("http://localhost:3000/api/user/create", user)
      .then(res => {
        console.log(res);
        console.log(res.data);

        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Access the user and the ID token
            const user = userCredential.user;
            return user.getIdToken();
          })
          .then((idToken) => {
            // Set the ID token to local storage
            localStorage.setItem("userToken", idToken);
            const expirationTime = new Date().getTime() + 30 * 10 * 1000; //

            // Store expiration time in localStorage
            localStorage.setItem("tokenExpiration", expirationTime);

            console.log("ID Token:", idToken);

            navigate("/");
          })
          .catch((error) => {
            console.error("Error signing in:", error);
            setErrorMessage("Invalid email or password. Please try again.");
          });
      })
      .catch((error) => {
        console.error('Error signing up:', error);
        console.error('Error message:', error.response.data.error.message);
        if (error.response.data.error.code == "auth/email-already-exists") {
          setErrorMessage("The email address is already in use");

        } else if (error.response.data.error.code == "auth/invalid-email") {
          setErrorMessage("The email address is not valid.");

        } else if (error.response.data.error.code == "auth/invalid-password") {
          setErrorMessage("The password must be a string with at least 6 characters.");

        } else {
          setErrorMessage('Issue signing up. Please try again.');

        }
      });

  };

  return (
    <div className="container mt-5 d-flex align-items-center justify-content-center">
      <div className="col-md-6">
        <div className="text-center">
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
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
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
