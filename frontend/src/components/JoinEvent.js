import { useCallback, useState, useContext  } from 'react'
import { UserContext } from "../providers/UserProvider";
import { navigate } from "@reach/router";
import {auth} from "../firebase";
import ShowParticipants from './ShowParticipants'


const JoinEvent = ( { onJoin, setState, _id, participants} ) => {
    const user = useContext(UserContext);
    const {photoURL, displayName, email, uid} = user;
    console.log(user);


 
    const [name, setName] = useState('') 
 
    const handleSubmit = useCallback(event => { 
                setState(false) 
            }, [setState]) 
         
    const onSubmit = () => { 
        handleSubmit() 
        onJoin(displayName, uid) 
        setName('') 
    } 
 

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <ShowParticipants participants={participants} />
            <input type='submit' value='Join Event' className='button button-block' />
        </form>
    )
}

export default JoinEvent
