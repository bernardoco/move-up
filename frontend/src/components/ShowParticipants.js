const ShowParticipants = ({ participants }) => {
    return (
        <div>
            <h4>Participants:</h4>
            { 
                (participants.length > 0) ?
                    participants.map((participant) => (
                    <p key={participant.userid}>- {participant.name}</p>
                ))
                : <p>There's no one signed in yet, be the first!</p>
            }      
        </div>
    )
}

export default ShowParticipants
