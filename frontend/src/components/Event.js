import { FaTimes } from 'react-icons/fa'

const Event = ({ id, sport, local, curr_players, max_players, onDelete }) => {
    return (
        <div className='event'>
            <h3>{sport}  <FaTimes style={{color: 'red', cursor: 'pointer'}} onClick={() => onDelete(id)}/></h3>
            <p id='local'>Local: {local}</p>
            <p id='players'>{curr_players}/{max_players}</p>
        </div>
    )
}

export default Event
