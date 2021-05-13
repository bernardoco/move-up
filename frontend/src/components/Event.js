import { FaTimes, FaChevronUp } from 'react-icons/fa'

const Event = ({ _id, sport, local, curr_players, max_players, onClick, onDelete }) => {
    return (
        <div className='event'>
            <h3>{sport}  <FaTimes style={{color: 'red', cursor: 'pointer'}} onClick={() => onDelete(_id)}/></h3>
            <p id='local'>Local: {local}</p>
            <p id='players'>{curr_players}/{max_players} <FaChevronUp style={{cursor: 'pointer'}} onClick={() => onClick(_id)} /> </p>
        </div>
    )
}

export default Event
