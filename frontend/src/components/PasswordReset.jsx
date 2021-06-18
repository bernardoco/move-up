import React, { useState } from "react";
import { auth } from "../firebase";
import { Link } from "@reach/router";

const PasswordReset = () => {
  const [email, setEmail] = useState("");
  const [emailHasBeenSent, setEmailHasBeenSent] = useState(false);
  const [error, setError] = useState(null);

  const onChangeHandler = event => {
    const { name, value } = event.currentTarget;

    if (name === "userEmail") {
      setEmail(value);
    }
  };

  const sendResetEmail = event => {
    event.preventDefault();
    auth
      .sendPasswordResetEmail(email)
      .then(() => {
          setEmailHasBeenSent(true);
        setTimeout(() => {setEmailHasBeenSent(false)}, 3000);
      })
      .catch(() => {
        setError("Error resetting password");
      });
  };
  return (
    <div className="mt-8">
      <h1 className="sign-in-h1">
        Reset your Password
      </h1>
      <div className="sign-in-form-div">
        <form action="">
          {emailHasBeenSent && (
            <div className="sign-in-btn">
              An email has been sent to you!
            </div>
          )}
          {error !== null && (
            <div className="sign-in-google-btn">
              {error}
            </div>
          )}
          <label htmlFor="userEmail" className="block">
            Email:
          </label>
          <input
            type="email"
            name="userEmail"
            id="userEmail"
            value={email}
            placeholder="Input your email"
            onChange={onChangeHandler}
            className="email-input"
          />
          <button
            className="resetlink-btn"
            onClick={event => {
              sendResetEmail(event);
            }}
          >
            Send me a reset link
          </button>
        </form>

        <Link
          to="/"
          className="goback-btn"
        >
          &larr; back to sign in page
        </Link>
      </div>
    </div>
  );
};

export default PasswordReset;
