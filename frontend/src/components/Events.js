import Event from './Event'

const Events = ({ events, user, onJoin, onDelete, profileMode }) => {
    events.sort((a,b) => b.sponsored - a.sponsored)

    return (
        <>
        {
            events.map((event) => (
                <Event 
                    key={event._id}
                    _id={event._id}
                    sport={event.sport}
                    local={event.local}
                    date={event.start_date}
                    participants={event.participants}
                    curr_players={event.curr_players}
                    max_players={event.max_players}
                    onJoinEvent={onJoin}
                    onDelete={onDelete}
                    user={user}
                    profileMode={profileMode}
                    sponsored={event.sponsored}/>
                ))}
        </>
    )
}

export default Events