import { useState } from 'react'
import { FaRegObjectUngroup } from 'react-icons/fa'

const AddEvent = ({ onAdd }) => {
    const [sport, setSport] = useState('')
    const [local, setLocal] = useState('')
    const [date, setDate] = useState('')
    const [max_players, setMaxPlayers] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if (!sport) {
            alert('Please add a sport')
            return
        }
        onAdd({ sport, local, date, max_players })
        setSport('')
        setLocal('')
        setDate('')
        setMaxPlayers('')
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Sport</label>
                <input type='text' placeholder='ex: Futebol' value={sport} onChange={(e) => setSport(e.target.value)}/>
            </div>

            <div className='form-control'>
                <label>Local</label>
                <input type='text' placeholder='ex: Lagoa Rodrigo de Freitas Quadra 1' value={local} onChange={(e) => setLocal(e.target.value)}/>
            </div>

            <div className='form-control'>
                <label>Date</label>
                <input type='date' value={date} onChange={(e) => setDate(e.target.value)}/>
            </div>

            <div className='form-control'>
                <label>Max Players</label>
                <input type='number' value={max_players} onChange={(e) => setMaxPlayers(e.target.value)}/>
            </div>

            <input type='submit' value='Add Event' className='button button-block'/>
        </form>
    )
}

export default AddEvent
