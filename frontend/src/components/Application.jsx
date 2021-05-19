import React, { useContext } from "react";
import { Router } from "@reach/router";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import UserProvider from "../providers/UserProvider";
import HomePage from "./HomePage";
import { UserContext } from "../providers/UserProvider";
import PasswordReset from "./PasswordReset";
import Header from './Header'


function Application() {
  const user = useContext(UserContext);
  console.log(user);
  return (
        user ?
          <HomePage />
      :
        <Router>
          <SignUp path="signUp" />
          <SignIn path="/" />
          <PasswordReset path = "passwordReset" />
        </Router>
      
  );
}

export default Application;
