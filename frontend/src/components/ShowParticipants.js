const ShowParticipants = ({ participants }) => {
    return (
        <div>
            <h4>Participants:</h4>
            {participants.map((participant) => (
                    <p key={participant.userid}>- {participant.name}</p>
                ))}           
        </div>
    )
}

export default ShowParticipants
