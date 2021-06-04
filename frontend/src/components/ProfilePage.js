import { useState, useEffect, useContext  } from 'react'
import { FaEnvelope } from 'react-icons/fa'

const ProfilePage = (user) => {
    const [width, setWidth] = useState(window.innerWidth);

    return (
        <section className= {width >= 768 ? 'container' : 'container-mobile'}>
            <div className="events-comp">
                <p>{user.user.displayName}</p>
                <p id='players'>{user.user.email}<FaEnvelope /></p>
            </div>

            <div className="events-comp">
                <h1>Signed In Events</h1>
            </div>

        </section>
    )
}

export default ProfilePage