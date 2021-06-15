import { useState, useEffect } from 'react'
import { FaEnvelope } from 'react-icons/fa'
import EventsDataService from '../services/events.js'
import Events from './Events'

const ProfilePage = (user) => {
    const [width] = useState(window.innerWidth);
    const [events, setEvents] = useState([]);

    useEffect(() => {
        findRegistered();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    const findRegistered = (by) => {
        EventsDataService.findRegistered(user.user.uid, by)
          .then(response => {
            setEvents(response.data.events);
          })
          .catch(e => {
            console.log(e);
          });
      };

    const unsignFromEvent = (id) => {
        EventsDataService.unsignFromEvent(id, user.user.uid)
        .then(() => {
            findRegistered()
          })
    }

    return (
        <section className= {width >= 768 ? 'container' : 'container-mobile'}>
            <div className="events-comp">
                { user.user.photoURL ? <img src={user.user.photoURL} alt="Profile"></img> : null}
                <p>{user.user.displayName}</p>
                <p id='players'>{user.user.email}<FaEnvelope /></p>
            </div>

            <div className="events-comp">
                <h1>Signed In Events</h1>
                {events.length > 0 ? <Events events={events} user={user} onDelete={unsignFromEvent} profileMode={true}/> : 'Sign in to an event in the Home Page!'}
            </div>

        </section>
    )
}

export default ProfilePage