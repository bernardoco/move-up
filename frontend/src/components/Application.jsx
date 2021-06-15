import React, { useContext } from "react";
import { Router } from "@reach/router";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import HomePage from "./HomePage";
import { UserContext } from "../providers/UserProvider";
import PasswordReset from "./PasswordReset";
import ProfilePage from './ProfilePage'


function Application() {
  const user = useContext(UserContext);

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
