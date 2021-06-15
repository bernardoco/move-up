import { useCallback, useContext  } from 'react'
import { UserContext } from "../providers/UserProvider";
import ShowParticipants from './ShowParticipants'


const JoinEvent = ( { onJoin, setState, participants} ) => {
    const user = useContext(UserContext);
    const { displayName, uid } = user;

    const handleSubmit = useCallback(() => { 
                setState(false) 
            }, [setState]) 
         
    const onSubmit = () => { 
        handleSubmit() 
        onJoin(displayName, uid) 
    } 
 

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <ShowParticipants participants={participants} />
            <input type='submit' value='Join Event' className='button button-block' />
        </form>
    )
}

export default JoinEvent
