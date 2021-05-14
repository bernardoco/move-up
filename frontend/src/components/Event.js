import { FaTimes, FaPlusCircle, FaCalendarAlt, FaUserFriends, FaMapMarkerAlt } from 'react-icons/fa'
import { useState } from 'react'
import JoinEvent from './JoinEvent'

const Event = ({ _id, sport, local, date, curr_players, max_players, onJoinEvent, onDelete }) => {
    const [join, setJoin] = useState(false)

    const onJoin = (user_name) => {
        onJoinEvent(_id, user_name.name)
    }

    return (
        <div className='event'>
            <h3>{sport}  <FaTimes style={{color: 'red', cursor: 'pointer'}} onClick={() => onDelete(_id)}/></h3>
            <p id='local'><FaMapMarkerAlt /> {local}</p>
            <p id='date'><FaCalendarAlt /> {date}</p>
            {
                curr_players >= max_players ?
                <p id='players'><FaUserFriends /> {curr_players}/{max_players} </p>
                :
                <p id='players'><FaUserFriends /> {curr_players}/{max_players} <FaPlusCircle style={{cursor: 'pointer'}} onClick={() => setJoin(!join)} /> </p>
            }
            {
                join ? <JoinEvent onJoin={onJoin} setState={setJoin} _id={_id} />
                :
                null
            }
        </div>
    )
}

export default Event
