import Event from './Event'

const Events = ({ events, onClick, onDelete }) => {
    return (
        <>
            {events.map((event) => (
                <Event 
                    key={event._id}
                    _id={event._id}
                    sport={event.sport}
                    local={event.local}
                    date={event.start_date}
                    curr_players={event.curr_players}
                    max_players={event.max_players}
                    onClick={onClick}
                    onDelete={onDelete}/>
                ))}
        </>
    )
}

export default Events