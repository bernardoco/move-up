import { useCallback, useState } from 'react'

const JoinEvent = ( { onJoin, setState, _id, participants} ) => {
    const [name, setName] = useState('')

    const handleSubmit = useCallback(event => {
                setState(false)
            }, [setState])
        
    const onSubmit = () => {
        handleSubmit()
        onJoin( {name} )
        setName('')
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div>
                <h4>Participants:</h4>
                {participants.map((participant) => (
                        <p key={participant}>- {participant}</p>
                    ))}           
            </div>
            <div className='form-control'>
                <input type='text' placeholder='Your Name' onChange={(e) => setName(e.target.value)} />
            </div>

            <input type='submit' value='Join Event' className='button button-block' />
        </form>
    )
}

export default JoinEvent
