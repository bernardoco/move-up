
import React from "react";
import Application from "./components/Application";
import UserProvider from "./providers/UserProvider";
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