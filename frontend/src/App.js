
import React, { useContext } from "react";
import { Router } from "@reach/router";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Application from "./components/Application";
import UserProvider from "./providers/UserProvider";
import { UserContext } from "./providers/UserProvider";
import Header from './components/Header'

function App() {
  
  return (
    <UserProvider>
      <Header />
      <Application />
    </UserProvider>
  );
}

export default App;