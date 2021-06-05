import React, { useContext } from "react";
import { Router } from "@reach/router";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import UserProvider from "../providers/UserProvider";
import HomePage from "./HomePage";
import { UserContext } from "../providers/UserProvider";
import PasswordReset from "./PasswordReset";
import Header from './Header'
import ProfilePage from './ProfilePage'


function Application() {
  const user = useContext(UserContext);
  console.log(user);
  return (
        user ?
          <Router>
            <HomePage path="/"/>
            <ProfilePage path="profile" user={user}/>
          </Router>
      :
        <Router>
          <SignUp path="signUp" />
          <SignIn path="/" />
          <PasswordReset path = "passwordReset" />
        </Router>
      
  );
}

export default Application;
