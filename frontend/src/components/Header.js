
import React, { useContext } from "react";
import { UserContext } from "../providers/UserProvider";
import { navigate, Link } from "@reach/router";
import {auth} from "../firebase";
import logo from '../moveup-logo.png'

import { IconButton, Icon } from '@material-ui/core';
import {ExitToApp} from '@material-ui/icons';

const Header = () => {
  const user = useContext(UserContext);
  
  const {photoURL, displayName, email} = (user ? user : ['','','']);
  console.log(user);


  return (
    <div className="header">
        <div className='logo'>
            <img src={logo} alt="Move Up Logo"/>
        </div>
        {
          user ?
        <div className='Logout'>
            <Link to="/" className='nav-btn'>
              <h2>Home</h2>
            </Link>

            <Link to="profile" className='nav-btn'>
              <h2>Profile</h2>
            </Link>

          <div className = "UserInfo">
            <h2 className = "text-2xl font-semibold">Welcome, {displayName}!</h2>
          </div>
          <button className = "Sign-Out" onClick = {() => {auth.signOut()}}>
          <ExitToApp/>
          </button>
        </div>
        : <div></div>
        }
        
    </div>
  )
}

export default Header