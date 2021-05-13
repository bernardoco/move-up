import { FaTimes, FaChevronUp, FaCalendarAlt, FaUserFriends, FaMapMarkerAlt } from 'react-icons/fa'

const Event = ({ _id, sport, local, date, curr_players, max_players, onClick, onDelete }) => {
    return (
        <div className='event'>
            <h3>{sport}  <FaTimes style={{color: 'red', cursor: 'pointer'}} onClick={() => onDelete(_id)}/></h3>
            <p id='local'><FaMapMarkerAlt /> {local}</p>
            <p id='date'><FaCalendarAlt /> {date}</p>
            <p id='players'><FaUserFriends /> {curr_players}/{max_players} <FaChevronUp style={{cursor: 'pointer'}} onClick={() => onClick(_id)} /> </p>
        </div>
    )
}

export default Event
