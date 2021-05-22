import { FaTimes, FaPlusCircle, FaCalendarAlt, FaUserFriends, FaMapMarkerAlt, FaAngleDoubleDown, FaAngleDoubleUp } from 'react-icons/fa'
import { useState } from 'react'
import JoinEvent from './JoinEvent'
import ShowParticipants from './ShowParticipants'

const Event = ({ _id, sport, local, date, participants, curr_players, max_players, onJoinEvent, onDelete, user }) => {
    const [join, setJoin] = useState(false)
    const [showParticipants, setShow] = useState(false)
    const alreadySigned = participants.includes(user.displayName);

    const onJoin = (user_name) => {
        onJoinEvent(_id, user_name.name)
    }

    return (
        <div className='event'>
            <h3>{sport}  <FaTimes style={{color: 'red', cursor: 'pointer'}} onClick={() => onDelete(_id)}/></h3>
            <p id='local'><FaMapMarkerAlt /> {local}</p>
            <p id='date'><FaCalendarAlt /> {date}</p>
            {
                (curr_players >= max_players || alreadySigned) && !showParticipants ?
                <p id='players'><FaUserFriends /> {curr_players}/{max_players} <FaAngleDoubleDown style={{cursor: 'pointer'}} onClick={() => setShow(!showParticipants)}/></p>
                : (curr_players >= max_players || alreadySigned) && showParticipants ?
                <p id='players'><FaUserFriends /> {curr_players}/{max_players} <FaAngleDoubleUp style={{cursor: 'pointer'}} onClick={() => setShow(!showParticipants)}/></p>
                :
                <p id='players'><FaUserFriends /> {curr_players}/{max_players} <FaPlusCircle style={{cursor: 'pointer'}} onClick={() => setJoin(!join)} /> </p>
            }
            {
                showParticipants ? <ShowParticipants participants={participants} /> : null
            }
            {
                join ? <JoinEvent onJoin={onJoin} setState={setJoin} _id={_id} participants={participants}/>
                :
                null
            }
        </div>
    )
}

export default Event
