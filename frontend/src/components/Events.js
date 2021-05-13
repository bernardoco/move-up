import Event from './Event'

const Events = ({ events, onClick, onDelete }) => {
    return (<>
        <h1>Events</h1>
        <>
            {events.map((event) => (
                <Event 
                    key={event._id}
                    _id={event._id}
                    sport={event.sport}
                    local={event.local}
                    curr_players={event.curr_players}
                    max_players={event.max_players}
                    onClick={onClick}
                    onDelete={onDelete}/>
                ))}
        </>
    </>
    )
}

export default Events