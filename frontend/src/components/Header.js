
import React, { useContext } from "react";
import { UserContext } from "../providers/UserProvider";
import { navigate } from "@reach/router";
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
          <div className = "md:pl-4">
            <h2 className = "text-2xl font-semibold">{displayName}</h2>
            <h3 className = "italic">{email}</h3>
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