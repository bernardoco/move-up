import { useState, useEffect, useContext  } from 'react'
import { FaEnvelope } from 'react-icons/fa'
import EventsDataService from '../services/events.js'
import Events from './Events'

const ProfilePage = (user) => {
    const [width, setWidth] = useState(window.innerWidth);
    const [events, setEvents] = useState([]);

    useEffect(() => {
        findRegistered(user.user.uid);
    }, []);
    
    const findRegistered = (query, by) => {
        EventsDataService.findRegistered(query, by)
          .then(response => {
            setEvents(response.data.events);
          })
          .catch(e => {
            console.log(e);
          });
      };

    return (
        <section className= {width >= 768 ? 'container' : 'container-mobile'}>
            <div className="events-comp">
                <p>{user.user.displayName}</p>
                <p id='players'>{user.user.email}<FaEnvelope /></p>
            </div>

            <div className="events-comp">
                <h1>Signed In Events</h1>
                {events.length > 0 ? <Events events={events} user={user} profileMode={true}/> : 'Sign in to an event in the Home Page!'}
            </div>

        </section>
    )
}

export default ProfilePage