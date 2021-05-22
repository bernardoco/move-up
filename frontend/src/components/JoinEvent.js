import { useCallback, useState, useContext  } from 'react'
import { UserContext } from "../providers/UserProvider";
import { navigate } from "@reach/router";
import {auth} from "../firebase";


const JoinEvent = ( { onJoin, setState, _id, participants} ) => {
    const user = useContext(UserContext);
    const {photoURL, displayName, email, uid} = user;
    console.log(user);

    return (
        <form className='add-form' onSubmit={() => onJoin(displayName, uid)}>
            <div>
                <h4>Participants:</h4>
                {participants.map((participant) => (
                        <p key={participant}>- {participant}</p>
                    ))}           
            </div>
            {/* <div className='form-control'>
                <h2 className = "text-2xl font-semibold">{displayName}</h2>
            </div> */}

            <input type='submit' value='Join Event' className='button button-block' />
        </form>
    )
}

export default JoinEvent
