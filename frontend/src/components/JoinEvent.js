import { useCallback, useState } from 'react'

const JoinEvent = ( { onJoin, setState, _id} ) => {
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
            <div className='form-control'>
                <input type='text' placeholder='Your Name' onChange={(e) => setName(e.target.value)} />
            </div>

            <input type='submit' value='Join Event' className='button button-block' />
        </form>
    )
}

export default JoinEvent
