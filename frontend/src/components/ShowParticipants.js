const ShowParticipants = ({ participants }) => {
    return (
        <div>
            <h4>Participants:</h4>
            {participants.map((participant) => (
                    <p key={participant}>- {participant}</p>
                ))}           
        </div>
    )
}

export default ShowParticipants
