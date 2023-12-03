import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { auth } from '../../firebase';
import Button from "react-bootstrap/Button";

const AuthDetails = ({ onSignIn }) => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
       // onSignIn(); // Call onSignIn function after successful authentication
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, [onSignIn]);

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log('Signed out');
        window.location.href = '/';
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      {authUser ? (
        <p className="signedIn">
          {`Signed In as ${authUser.email} `}
          <Button variant="success" className="ms-3" onClick={userSignOut}>
            Sign Out
          </Button>
        </p>
      ) : null}
    </div>
  );
};

export default AuthDetails;
