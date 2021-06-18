import React, {useState} from "react";
import { Link } from "@reach/router";
import { signInWithGoogle } from "../firebase";
import { auth } from "../firebase";


const SignIn = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const signInWithEmailAndPasswordHandler = (event,email, password) => {
        event.preventDefault();
        auth.signInWithEmailAndPassword(email, password).catch(error => {
        setError("Error signing in with password and email!");
          console.error("Error signing in with password and email", error);
        });
      };
      
      const onChangeHandler = (event) => {
          const {name, value} = event.currentTarget;
        
          if(name === 'userEmail') {
              setEmail(value);
          }
          else if(name === 'userPassword'){
            setPassword(value);
          }
      };
   

  return (
    <div className="mt-8">
      <h1 className="sign-in-h1">Sign In</h1>
      <div className="sign-in-form-div">
        {error !== null && <div className = "err">{error}</div>}
        <form className="">
          <label htmlFor="userEmail" className="block">
            Email:
          </label>
          <input
            type="email"
            className="email-input"
            name="userEmail"
            value = {email}
            placeholder="E.g: faruq123@gmail.com"
            id="userEmail"
            onChange = {(event) => onChangeHandler(event)}
          />
          <label htmlFor="userPassword" className="block">
            Password:
          </label>
          <input
            type="password"
            className="pwd-input"
            name="userPassword"
            value = {password}
            placeholder="Your Password"
            id="userPassword"
            onChange = {(event) => onChangeHandler(event)}
          />
          <button className="sign-in-btn" onClick = {(event) => {signInWithEmailAndPasswordHandler(event, email, password)}}>
            Sign in
          </button>
        </form>
        <p className="ctr">or</p>
        <button
          className="sign-in-google-btn"
          onClick={() => {
            signInWithGoogle();
          }}
        >
          Sign in with Google
        </button>
        <p className="ctr">
          Don't have an account?{" "}
          <Link to="signUp" className="extra-btn">
            Sign up here
          </Link>{" "}
          <br />{" "}
          <Link to="passwordReset" className="extra-btn">
            Forgot Password?
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
