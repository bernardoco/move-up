import { FaTimes, FaPlusCircle, FaCalendarAlt, FaUserFriends, FaMapMarkerAlt, FaAngleDoubleDown, FaAngleDoubleUp } from 'react-icons/fa'
import { useState } from 'react'
import JoinEvent from './JoinEvent'
import ShowParticipants from './ShowParticipants'

const Event = ({ _id, sport, local, date, participants, curr_players, max_players, onJoinEvent, onDelete, user, profileMode }) => {
    const [join, setJoin] = useState(false)
    const [showParticipants, setShow] = useState(false)
    const names = participants.map(({ name }) => name);
    const uids = participants.map(({ userid }) => userid);

    const alreadySigned = uids.includes(user.uid);

    const onJoin = (user_name, user_id) => {
        onJoinEvent(_id, user_name.name, user_id)
    }

    return (
        <div className='event'>
            <h3>{sport}  <FaTimes style={{color: 'red', cursor: 'pointer'}} onClick={() => onDelete(_id)}/></h3>
            <p id='local'><FaMapMarkerAlt /> {local}</p>
            <p id='date'><FaCalendarAlt /> {date}</p>
            {
                ((curr_players >= max_players || alreadySigned) || profileMode) && !showParticipants ?
                <p id='players'><FaUserFriends /> {curr_players}/{max_players} <FaAngleDoubleDown style={{cursor: 'pointer'}} onClick={() => setShow(!showParticipants)}/></p>
                : ((curr_players >= max_players || alreadySigned) || profileMode) && showParticipants ?
                <p id='players'><FaUserFriends /> {curr_players}/{max_players} <FaAngleDoubleUp style={{cursor: 'pointer'}} onClick={() => setShow(!showParticipants)}/></p>
                :
                <p id='players'><FaUserFriends /> {curr_players}/{max_players} <FaPlusCircle style={{cursor: 'pointer'}} onClick={() => setJoin(!join)} /> </p>
            }
            {
                showParticipants ? <ShowParticipants participants={participants} /> : null
            }
            {
                (join && !profileMode) ? <JoinEvent onJoin={onJoin} setState={setJoin} _id={_id} participants={participants}/>
                :
                null
            }
        </div>
    )
}

export default Event
